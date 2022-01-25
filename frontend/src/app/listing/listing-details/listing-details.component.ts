import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/user/service/user.service';
import { Listing } from '../model/listing';
import { ListingService } from '../sevice/listing.service';


@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent implements OnInit {

  id: any;
  
  listing!: Listing;

  listingSub$!: Subscription;
  showForm: boolean | undefined;
  
  editListingForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required]),
    locality: new FormControl("", [Validators.required]),
    details: new FormControl("", [Validators.required]),
  });

  constructor(private listingService: ListingService, 
    private route: ActivatedRoute, 
    private router: Router,
    public userService: UserService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.listingSub$ = this.listingService
              .getListings(this.id)
              .subscribe(listing => {
                this.listing = listing;
                // console.log(listing);
              })
  }

  ngOnDestroy(): void{
    this.listingSub$.unsubscribe();
  }

  showEdit() {
    this.showForm = !this.showForm;
  }

  editListing(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.editListingForm.valid) {
      this.listingService
        .editListing(this.editListingForm.value, this.id)
        .subscribe(res => {
          this.editListingForm.reset();
          this.router.navigate(["/listings"]);
        });
    }
  }

  removeListing() {
    
    this.id = this.route.snapshot.paramMap.get("id");

    this.listingService.deleteListing(this.id).subscribe(res => {
      console.log(res);
      this.router.navigate(["/listings"]);
    });
  }
}
