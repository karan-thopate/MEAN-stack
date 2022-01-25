import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Listing } from '../model/listing';

@Injectable({
  providedIn: 'root'
})



export class ListingService {
  private ROOT_URL = 'http://localhost:4000/api/listings';
  

  
  // for token
  private httpOptions = {
    headers: new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("auth-token", localStorage.getItem("token")as string)
  };

  
  constructor(private http: HttpClient) { }

  // to get all list
  getListing(): Observable <Listing[]> {
    return this.http.get<Listing[]>(this.ROOT_URL);
  }

  // to get id from data
  getListings(id:string){
      return this.http.get<Listing>(`${this.ROOT_URL}/${id}`)
  }

  addListing(listing : any){
    return this.http.post<any>(this.ROOT_URL, listing, this.httpOptions)
  }
  
  editListing(listing:any, id: String){
      return this.http.put<any>(`${this.ROOT_URL}/${id}`, listing, this.httpOptions);
  }

  deleteListing(id: string) {
      return this.http.delete(`${this.ROOT_URL}/${id}`, this.httpOptions);
  }
}


