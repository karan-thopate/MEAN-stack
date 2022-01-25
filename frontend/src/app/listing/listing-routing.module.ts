import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../user/guard/auth.guard';
import { AddListingComponent } from './add-listing/add-listing.component';
import { AllListingComponent } from './all-listing/all-listing.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';

const routes: Routes = [
  {
    path:"",
    component: AllListingComponent
  },
  {
    path:"add-listing",
    component: AddListingComponent,
    canActivate: [AuthGuard]
  },
  {
    path:":id",
    component: ListingDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule { }
