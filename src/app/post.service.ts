import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private pincode: number | undefined;
  private url: string | undefined;


  constructor(private http: HttpClient) { }

  getDetails(): Observable<any>{
    this.url = 'https://api.postalpincode.in/pincode/'+ this.pincode;
    return this.http.get(this.url);
  }

  geturl(value: number) {
    this.pincode = value;
  }

}
