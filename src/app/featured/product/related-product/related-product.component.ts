import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpParams, HttpErrorResponse } 						from '@angular/common/http';
import { DataService } from './../../../_services/data.service';
import { TrackingService } 	from './../../../_services/tracking.service';
import { CustomerService } from '../../../_services/pb/customer.service';
import { StoreService } from './../../../_services/pb/store.service';

@Component({
  selector: 'related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.css']
})
export class RelatedProductComponent implements OnInit {
	subscription;
    result:any = [];
	userId = 0;
	nguInputs;
	nguThirdToken;

    constructor (
		private toastr:ToastrService, 
	    private dataService: DataService,
		private router: Router, 
		private track:TrackingService,
		private route: ActivatedRoute,
		private customer: CustomerService,
		private store: StoreService
	) { }

    ngOnInit() {
		this.subscription = this.dataService.getRelatedProduct().subscribe(res => {
			this.userId = res.userId;
            this.result = res.items;
			//console.log(this.result);
        });
    }

	addCart(itemId){
		localStorage.setItem('productId', itemId);
		if( this.userId > 0 ){
			let formData:any = {itemId:itemId,qty:1};
			this.store.addToCart(formData).subscribe({
				next: (res) => {
					if( res.status ){
						this.customer.setCart(res.data.cart);
						for(let i of this.result){
							if( itemId == i.id ){ i.isCart = 1; }
						}
						this.toastr.success(res.message);
						let myCart: any = this.customer.getCart();
						for(let i=0; i < myCart.length; i++){
							if( myCart[i]['id'] == itemId ){
								this.track.addToCart(myCart[i]);
								break;
							}
						}
					}else{
						this.toastr.error(res.message);
					}
				},
				error: (err) => {
					this.toastr.error("Sorry, there are some app issue!");
				}
			});
		}else{
			this.router.navigate(['/customer/registration']);
		}
	}
   
    notifyMePopup(itemId){
		this.dataService.sendNotifyme({userId: this.userId, productId: itemId});
	}
	gotoProduct(key){ this.router.navigate(['/'+key]); }
	
	goToCart(){ this.router.navigate(['/checkout/cart'], {}); }
	
    ngOnDestroy(){ this.subscription.unsubscribe(); }
}
