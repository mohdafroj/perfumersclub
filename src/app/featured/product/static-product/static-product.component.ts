import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from './../../../_services/data.service';
import { TrackingService } 	from './../../../_services/tracking.service';
import { CustomerService } from '../../../_services/pb/customer.service';
import { StoreService } from './../../../_services/pb/store.service';
import SwiperCore , { Pagination, SwiperOptions, FreeMode } from 'swiper';
//import 'swiper/css/bundle';
//import 'swiper/css';
SwiperCore.use([Pagination,FreeMode]);

@Component({
  selector: 'static-product',
  templateUrl: './static-product.component.html',
  styleUrls: ['./static-product.component.css']
})
export class StaticProductComponent implements OnInit {
	subscription;
    result = [];
	userId = 0;
	swiperConfig: SwiperOptions = {
		slidesPerView: 2.5,
		spaceBetween: 10,
		loop: false,
		centeredSlides:false,
		freeMode:true,
		breakpoints: {
		  320: {
			slidesPerView: 1.5,
			spaceBetween: 5
		  },
		  640: {
			slidesPerView: 1.2,
			spaceBetween: 5
		  },
		  768: {
			slidesPerView: 2.2,
			spaceBetween: 10
		  },
		  1024: {
			slidesPerView: 3.5,
			spaceBetween: 10
		  }
		}
  	};
	

    constructor (
		private toastr:ToastrService, 
	    private dataService: DataService,
		private router: Router, 
		private track:TrackingService,
		private route: ActivatedRoute,
		private customer: CustomerService,
		private store: StoreService
	) { 
		subscription: Subscription;
	}

    ngOnInit() {
		this.subscription = this.dataService.getRelatedProduct().subscribe({
			next: (res) => {
				this.userId = res.userId;
				this.result = res.items;
			},
			error: (err) => {}			
        });
    }

	/*addCart(itemId){
		localStorage.setItem('productId', itemId);
		if( this.userId > 0 ){
			let formData:any = {itemId:itemId,qty:1};
			this.store.addToCart(formData).subscribe(
				res => {
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
				(err: HttpErrorResponse) => {
					this.toastr.error("Sorry, there are some app issue!");
				}
			);
		}else{
			this.router.navigate(['/customer/registration']);
		}
	}*/
   
    notifyMePopup(itemId){
		this.dataService.sendNotifyme({userId: this.userId, productId: itemId});
	}
	gotoProduct(key){ this.router.navigate(['/'+key]); }
	
	goToCart(){ this.router.navigate(['/checkout/cart'], {}); }
	
    ngOnDestroy(){ this.subscription.unsubscribe(); }
}
