import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { AllListingComponent } from './all-listing/all-listing.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllListingComponent,
    ListingDetailsComponent,
    AddListingComponent
  ],
  imports: [
    CommonModule,
    ListingRoutingModule,
    ReactiveFormsModule
  ]
})
export class ListingModule { }
