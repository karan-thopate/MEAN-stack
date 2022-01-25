import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from '../model/listing';
import { ListingService } from '../sevice/listing.service';

@Component({
  selector: 'app-all-listing',
  templateUrl: './all-listing.component.html',
  styleUrls: ['./all-listing.component.css']
})
export class AllListingComponent implements OnInit {

  lisings$: Observable<Listing[]> | undefined;
  
  constructor(private listingService: ListingService) { }

  ngOnInit(): void {

    this.lisings$ = this.listingService.getListing();
    

  }

}
