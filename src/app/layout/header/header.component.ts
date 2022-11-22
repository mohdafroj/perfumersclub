import { Component, OnInit, ElementRef, ViewEncapsulation, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { CustomerService } from './../../_services/pb/customer.service';
import { ToastrService } from 'ngx-toastr';
import { DataService } from './../../_services/data.service';
import { Myconfig } from './../../_services/pb/myconfig';
import { PagesService } from './../../_services/pb/pages.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
    windowWidth:number = 0;
	windowHeight:number = 0;
	homeLink = '';
	actveMenu = false;
	showCart = false;
	showCartMenu = true;
	cartCurrency;
	userId = 0;
	name = '';
	picUrl = '';
	cartTotal = 0;
	cartLength = 0;
	shoppingCart = [];
	shoppingPack = [];
	topScrollClass:string = 'affix-top';
	shonowSticky = 0;
	stripBanner = '';
	navbarPosition = 'relative';
	sanitizer:any;	
	constructor(
		private router: Router,
		private route: ActivatedRoute, 
		private toastr: ToastrService,
		public config: Myconfig, 
		private customer: CustomerService,
		private elem: ElementRef,
		private dataService: DataService,
		private pages: PagesService,
		private sanitize: DomSanitizer) {
		this.sanitizer = sanitize;
	}
	ngOnInit(){
		this.windowWidth = window.innerWidth;
		this.windowHeight = window.innerHeight;
		this.cartCurrency = this.config.cartCurrency; 
		this.homeLink = (this.router.url == '/winter-sale-offer') ? this.router.url : '/';
		this.router.events.subscribe(event => {
			if(event instanceof NavigationEnd) {
				let urlAr:any = event.url.split('/');
				this.showCartMenu = ( this.config.footerHiddenPages.indexOf(urlAr[2]) != -1 ) ? false : true;				
			}
		});
		this.getMiniCart();
		let infoData = this.pages.getCompanyData();
		this.stripBanner = ( (infoData != undefined) && (infoData['company'] != undefined) ) ? infoData['company']['strip'] : '';
		if ( this.stripBanner != '' ) {
			this.navbarPosition = ( this.windowWidth < 768 ) ? 'fixed' : 'relative';
		} else {
			this.navbarPosition = 'fixed';
		}
    }
	
	menuToggle1 ():any {
		this.actveMenu = ! this.actveMenu;
	}
	
	menuToggle () {
		this.elem.nativeElement.querySelector('#menuToggle').click();
	}
	ngDoCheck () {
		this.getMiniCart();
	}
	getMiniCart () {
		this.cartTotal = 0;
		this.userId = this.customer.getId();
		this.name = this.customer.getName();
		this.picUrl = this.customer.getImage();
		if ( this.userId == 0 || this.picUrl == '' || this.picUrl == null || this.picUrl == undefined ) {
			this.picUrl = 'assets/images/profilePic.svg';
			this.name = '';
		}
		let cart = this.customer.getFromCart(); 
		cart['shopping'] = cart['shopping'] ? cart['shopping'] : {};
		this.shoppingCart = cart['shopping']['cart'] ? cart['shopping']['cart'] : [];
		this.shoppingPack = cart['shopping']['pack'] ? cart['shopping']['pack'] : [];
		this.cartLength = this.shoppingCart.length + this.shoppingPack.length;
		for ( let i = 0; i < this.shoppingCart.length; i++ ) {
			this.cartCurrency = this.shoppingCart[i]['price_logo'];
			this.cartTotal += this.shoppingCart[i]['cart_quantity'] * this.shoppingCart[i]['price'];
		}
		for ( let i = 0; i < this.shoppingPack.length; i++ ) {
			this.cartTotal += this.shoppingPack[i]['cart_quantity'] * this.shoppingPack[i]['price'];
		}
	}

	onLogged (userId: any) {
		this.userId = userId;
	}
	
	customerLogout(){
		this.customer.customerLogout();
	}

	removeItem(cartId){
		this.dataService.sendDeleteItem({cartId: cartId, userId: this.userId});
	}
	
	@HostListener('window:scroll') onResize() {
		//const componentPosition = this.elem.nativeElement.offsetTop
		if ( this.stripBanner != '' ) {
			this.navbarPosition = ( this.windowWidth < 768 ) ? 'fixed' : 'relative';
		} else {
			this.navbarPosition = 'fixed';
		}
		const scrollPosition = window.pageYOffset
		if( scrollPosition > 50 ){
			this.shonowSticky = 1;
		}else{
			this.shonowSticky = 0;
		}
		//console.log(scrollPosition);
	}
	
	@HostListener('window:scroll') checkScroll() {
		const scrollPosition = window.pageYOffset;
		if( scrollPosition > 50 ){
			this.shonowSticky = 1;
		}else{
			this.shonowSticky = 0;
		}
	}

	@HostListener('window:resize', ['$event'])

	resizeWindow() {
		this.windowWidth = window.innerWidth;
		this.windowHeight = window.innerHeight;
	}
	
}
