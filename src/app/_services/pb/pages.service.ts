import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Myconfig } from './../../_services/pb/myconfig';
interface ItemsResponse {
  status:boolean,
  message:string,
  data:any
}

@Injectable({
	providedIn:'root'
})
export class PagesService {
    pbApi:string;
    constructor( 
      @Inject(PLATFORM_ID) private _platformId: Object,
      private config: Myconfig, 
      private http: HttpClient ) {
      this.pbApi = this.config.apiEndPoint;      
    }
	
    getCode(prms){
        let head:any;
        head = new HttpHeaders();
        head.set('Content-Type', 'application/json');
        return this.http.get(this.pbApi+'pages/zipcodes', {params:prms, headers:head});
    }
	
    companyData(){
		let headers = new HttpHeaders();
		headers = headers.set('Content-Type', 'application/json');
		return this.http.get<ItemsResponse>(this.pbApi+'pages/company-data', {headers: headers});
    }

    contactUs(formData){
		let headers = new HttpHeaders();
		headers = headers.set('Content-Type', 'application/json');
		return this.http.post<ItemsResponse>(this.pbApi+'pages/contact-us', JSON.stringify(formData), {headers: headers});
    }

    newsletterSubscribe(formData){
		let headers = new HttpHeaders();
		headers = headers.set('Content-Type', 'application/json');
		return this.http.post<ItemsResponse>(this.pbApi+'pages/newsletter-subscribe', JSON.stringify(formData), {headers: headers});
    }

	getCompanyData(){
		let company = {company:{name:'',add:'',city:'',state:'',country:'',pin:'',code:'',phone:'',email:'',website:'',start_year:'',facebook:'',youtube:'',twitter:'',pinterest:'',instagram:''}};
      let c = localStorage.getItem('pccompany');
      if( c ){
        company = JSON.parse(c);
      }
		  return company;
    }

	setCompanyData(company){
    localStorage.setItem('pccompany', JSON.stringify(company));
		  return company;
    }

}
