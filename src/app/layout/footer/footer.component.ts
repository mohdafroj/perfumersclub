import { Component, OnInit, DoCheck, ViewEncapsulation  } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } 					from '@angular/forms';
import { HttpParams, HttpErrorResponse } 						from '@angular/common/http';
import { Myconfig } 											from './../../_services/pb/myconfig';
import { PagesService } 										from './../../_services/pb/pages.service';
import { CustomerService } from './../../_services/pb/customer.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit, DoCheck {
	rForm:FormGroup;
	msg:string			= '';
	showDevice:boolean 	= false;
	infoActive:string   = '';
	infoShow:string     = '';
	prodActive:string   = '';
	prodShow:string     = '';
	custActive:string   = '';
	custShow:string     = '';
	addrActive:string   = '';
	addrShow:string     = '';
	userId:number		= 0;	
	currentYear:number = 2020;
	showFooter = true;
	company;
	constructor ( 
		public config: Myconfig, 
		private pages: PagesService, 
		private router: Router, 
		private customer:CustomerService
	) {
	}

	ngOnInit() {
		this.company = {'name':'','add':'','city':'','state':'','country':'','pin':'','code':'','phone':'','email':'','website':'','start_year':'','facebook':'','youtube':'','twitter':'','pinterest':'','instagram':''};
		this.userId = this.customer.getId();
		this.rForm = new FormGroup ({
			email: new FormControl("", Validators.compose([Validators.required, Validators.pattern(this.config.EMAIL_REGEXP)]) )
		});
		
		//if(this.window.nativeWindow.innerWidth <= 767){
		//this.showDevice = ($(window).width() <= 767) ? true:false;
		var d = new Date();
		this.currentYear = d.getFullYear();
		let infoData = this.pages.getCompanyData();
		this.company = ( (infoData != undefined) && (infoData['company'] != undefined) ) ? infoData['company'] : this.company;
		this.router.events.subscribe(event => {
			if(event instanceof NavigationEnd) {
				let urlAr = event.url.split('/');
				this.showFooter = ( this.config.footerHiddenPages.indexOf(urlAr[2]) != -1 ) ? false : true;
				if ( this.showFooter == true ) {
					this.showFooter = ( this.config.footerHiddenPages.indexOf(urlAr[1]) != -1 ) ? false : true;
				}
			}
		});
	}
	
	newsletterSubscribe(formData){
		this.msg = 'Wait...';
		this.pages.newsletterSubscribe(formData).subscribe(
			res => {
				if(res.status){
					this.rForm = new FormGroup ({
						email: new FormControl("", Validators.compose([Validators.required, Validators.pattern(this.config.EMAIL_REGEXP)]) )
					});
				}
				this.msg = res.message;
			},
			(err: HttpErrorResponse) => {
			}
		);
	}
	ngDoCheck(){
		let newUsername = this.rForm.controls.email.value;
		this.rForm.controls.email.setValue(newUsername.toLowerCase(), {});
	}
	
	footerToggle(num:number){
		if(this.showDevice){
			switch(num){
				case 1:
					this.infoActive		= (this.infoActive == '') ? 'active':'';
					this.infoShow		= (this.infoShow == '')   ? 'show':'';
					this.custActive 	= this.custShow = this.prodActive = this.prodShow = this.addrActive	= this.addrShow	= '';
					break;
				case 2:
					this.custActive		= (this.custActive == '') ? 'active':'';
					this.custShow		= (this.custShow == '')   ? 'show':'';
					this.infoActive 	= this.infoShow = this.prodActive = this.prodShow = this.addrActive	= this.addrShow	= '';
					break;
				case 3:
					this.prodActive		= (this.prodActive == '') ? 'active':'';
					this.prodShow		= (this.prodShow == '')   ? 'show':'';
					this.infoActive 	= this.infoShow = this.custActive = this.custShow = this.addrActive	= this.addrShow	= '';
					break;
				case 4:
					this.addrActive		= (this.addrActive == '') ? 'active':'';
					this.addrShow		= (this.addrShow == '')   ? 'show':'';
					this.infoActive 	= this.infoShow = this.custActive = this.custShow = this.prodActive	= this.prodShow	= '';
					break;
				default:
			}
		}
	}

}
