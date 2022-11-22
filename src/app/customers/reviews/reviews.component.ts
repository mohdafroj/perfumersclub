import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Myconfig } from './../../_services/pb/myconfig';
import { CustomerService } from '../../_services/pb/customer.service';

@Component({
	selector: 'pb-reviews',
	templateUrl: './reviews.component.html',
	styleUrls: [
		'./reviews.component.css'
	]
})
export class ReviewsComponent implements OnInit {
	msg;
	reviews:any				= [];
	moreReviewsFlag:number 	= 1;
	loader:number 			= 1;
	page:number				= 1
	constructor(private titleService: Title, private route: ActivatedRoute, private config:Myconfig, private auth: CustomerService) {
		route.data.subscribe(res =>{
			titleService.setTitle(res['title']);
		});
	}

	ngOnInit() {
		this.getReviews();

	}

	getReviews() {		
		this.auth.getCustomerReviews(this.page).subscribe({
			next: (res) => {
				if(res.data['reviews']){
					for( let i of res.data.reviews ){
						this.reviews.push(i);
					}
					
				}
				this.moreReviewsFlag = res.data['viewMore'] ? res.data.viewMore:0;
			},
			error: (err) => {
				console.log("Server Isse!");
			},
			complete: () => {
				this.loader 	= 0;
			},
		});
	}
	
	loadMoreReviews(){
		this.page = this.page + 1;
		this.getReviews();
	}
	
	getFinalRating(num){
		return this.config.numToArray(num); //Array.from(Array(num).keys());
	}
	
	getRemainingRating(num){
		let a = 5 - num;
		return this.config.numToArray(a); //Array.from(Array(a).keys());
	}
}
