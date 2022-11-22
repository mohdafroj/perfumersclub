import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Myconfig } from './../../_services/pb/myconfig';

interface ItemsResponse {
  status:boolean,
  message:string,
  data:any
}

interface ProductResponse {
  message:string,
  status:boolean,
  data:any,
  pagination:any,
  category:any
}

interface FiltersResponse {
  brands:any,
  families:any,
  prices:any,
  sizes:any
}

@Injectable({
	providedIn:'root'
})
export class ProductsService {
    pbApi:string;
    constructor( private config: Myconfig,  private http: HttpClient ) {
        this.pbApi = config.apiEndPoint;
		//console.log("product services called");
    }
    getOfferProducts(prms){
        return this.http.get<ItemsResponse>(this.pbApi+'products/get-offer-products', {params:prms});
    }

    getSkuProducts(prms){
        return this.http.get<ItemsResponse>(this.pbApi+'products/get-sku-products', {params:prms});
    }

    getProducts(prms, segment=''): Observable<ProductResponse>{
        return this.http.get<ProductResponse>(this.pbApi+'products/get-products/'+segment, {params:prms}).pipe(retry(1), catchError(this.errorHandl));
    }

    getScentMatch(prms){
        return this.http.get<ProductResponse>(this.pbApi+'products/get-scent-match', {params:prms});
    }

    getAlgoProducts(prms){
        return this.http.get<ProductResponse>(this.pbApi+'products/get-algo-products', {params:prms});
    }

    getProductNew(prms){
        return this.http.get<ProductResponse>(this.pbApi+'products/get-product-new', {params:prms});
    }

    getProductBuynow(prms){
        return this.http.get<ProductResponse>(this.pbApi+'products/get-product-buynow', {params:prms});
    }

    getProductByCategory(prms){
        return this.http.get<ProductResponse>(this.pbApi+'products/get-product-by-category', {params:prms});
    }

	getLaunchOffer(prms){
        return this.http.get<ProductResponse>(this.pbApi+'products/get-launch-offer', {params:prms});
    }

    getRedeemProducts(prms){
        return this.http.get<ProductResponse>(this.pbApi+'products/get-redeem-products', {params:prms});
    }

    getFilters(){
        return this.http.get<FiltersResponse>(this.pbApi+'products/get-filters', {});
    }

    getCategoryBrands(prms){
        return this.http.get<ItemsResponse>(this.pbApi+'products/get-brands-by-category', {params:prms});
    }

    getFilterProducts(prms){
        return this.http.get<ItemsResponse>(this.pbApi+'products/get-filter-products', {params:prms});
    }

    getMoreProducts(prms){
        return this.http.get(this.pbApi+'products/get-more-products', {params:prms});
    }

    getPages(prms){
      return this.http.get<ProductResponse>(this.pbApi+'products/get-pages', {params:prms});
    }
	
    getDetails(prms){
      return this.http.get<ProductResponse>(this.pbApi+'products/get-details', {params:prms});
    }

    getProductReviews(input){
		let prms = new HttpParams();
		prms = prms.append('productId', input.productId);
		prms = prms.append('page', input.page);
		prms = prms.append('order', input.order);
		return this.http.get<ProductResponse>(this.pbApi+'products/get-reviews', {params:prms});
    }

    getSuggestion(item){
		let prms = new HttpParams();
		prms = prms.append('searchkeyword', item);
		return this.http.get<ProductResponse>(this.pbApi+'products/get-suggestion', {params:prms});
	}

	notifyMe(formData){
		return this.http.post<ItemsResponse>(this.pbApi+'products/notify-me', JSON.stringify(formData), {});
	}
	
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
	getGender(){
		let gender = '';
		if( localStorage.getItem('pcgender') ){
		  gender = localStorage.getItem('pcgender') || '';
		}
		return gender;
    }
	
	setGender(gender){
		localStorage.setItem('pcgender', gender);
    }
	
}
