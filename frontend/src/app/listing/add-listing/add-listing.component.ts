import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListingService } from '../sevice/listing.service';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  listingForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required]),
    locality: new FormControl("", [Validators.required]),
    details: new FormControl("", [Validators.required]),

  }) 
  constructor(private listingService: ListingService, private router: Router) { }

  ngOnInit(): void {
  }
  newListing(){
      if(this.listingForm.valid){
        // as a parameter data pass
        this.listingService.addListing(this.listingForm.value).subscribe(res => {
            this.listingForm.reset();
            // were we want redirect this path sholud giving
            this.router.navigate(["/listings"]);
        })
      }
  }

}
