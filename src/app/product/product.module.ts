import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-listings.component/product-listings.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: ':productid', component: ProductDetailComponent },
    ]
  },
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
