import { Component, OnInit } from '@angular/core';
//import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Myconfig } from './../../_services/pb/myconfig';
import { CustomerService } from '../../_services/pb/customer.service';

@Component({
  selector: 'pc-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: [
		'./account-detail.component.css'
	]
})
export class AccountDetailComponent implements OnInit {
	rForm;
	msg:string		= '';
	response:any		= '';
	constructor(
		private router: Router, 
		private route: ActivatedRoute, 
		private config: Myconfig, 
		private customer: CustomerService
	) {
	}

  ngOnInit() {
    this.rForm = new FormGroup ({
      firstname: new FormControl("", Validators.compose([Validators.required,Validators.pattern(this.config.ALPHA_SPACE_REGEXP), Validators.minLength(3)]) ),
      lastname: new FormControl("", Validators.compose([Validators.required,Validators.pattern(this.config.ALPHA_SPACE_REGEXP),Validators.minLength(3)]) ),
      dob: new FormControl("", Validators.compose([Validators.required,Validators.pattern(this.config.DATE_MM_DD_YYYY_REGEXP)]) ),
      gender: new FormControl("", Validators.required),
      mobile: new FormControl("", Validators.required)
    });
    this.response = {
      firstname:'',
      lastname:'',
      email:'',
      gender:'',
      dob:'',
      mobile:'',
      image:'',
      created:'',
      modified:''
    }
    this.customer.getProfile().subscribe({
      next: (res) => {
        if(res.status){
          this.response = res.data;
          //console.log(res.message);
        }
        this.rForm = new FormGroup ({
          firstname: new FormControl(this.response.firstname, Validators.compose([Validators.required,Validators.pattern(this.config.ALPHA_SPACE_REGEXP),Validators.minLength(3)]) ),
          lastname: new FormControl(this.response.lastname, Validators.compose([Validators.required,Validators.pattern(this.config.ALPHA_SPACE_REGEXP),Validators.minLength(3)]) ),
          dob: new FormControl(this.response.dob.substring(0,10), Validators.compose([Validators.required,Validators.pattern(this.config.DATE_MM_DD_YYYY_REGEXP)]) ),
          gender: new FormControl(this.response.gender, Validators.required),
          mobile: new FormControl(this.response.mobile, Validators.required)
        });
      },
      error: (err) => {
        console.log("Server Isse!");
      }
   });

  }
  customerDetail(detail){
    this.msg = 'Wait...';
    this.customer.updateProfile(detail).subscribe({
      next: (res) => {
        //console.log(res);
        if(res.status){
          this.router.navigate(['/customer/profile']);
        }else{
          this.msg = res.message;
        }
      },
      error: (err) => {
        if(err.error instanceof Error){
          this.msg = 'Client error: '+err.error.message;
        }else{
          this.msg = 'Server error: '+JSON.stringify(err.error);
        }
      }
    });
  }
}
