import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from "swiper/angular";
import { ReactiveFormsModule, FormsModule } 	from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReviewsComponent } from './reviews/reviews.component';
import { NotifymeComponent } from './notifyme/notifyme.component';
import { PopupProductComponent } from './popup-product/popup-product.component';
import { RelatedProductComponent } from './related-product/related-product.component';
import { DeleteComponent } from './delete/delete.component';
import { StaticProductComponent } from './static-product/static-product.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
	ReactiveFormsModule,
	FormsModule,
	SwiperModule
  ],
  declarations: [
	ReviewsComponent,
	NotifymeComponent,
	PopupProductComponent,
	RelatedProductComponent,
	DeleteComponent,
	StaticProductComponent
  ],
  exports: [
    ReviewsComponent,
	NotifymeComponent,
	PopupProductComponent,
	RelatedProductComponent,
	DeleteComponent,
	StaticProductComponent
  ]
})

export class ProductModule { }
