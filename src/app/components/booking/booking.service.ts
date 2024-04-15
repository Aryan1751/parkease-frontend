import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  baseUrl="http://localhost:3000/";
  constructor(private httpclient: HttpClient) { }


  getAllUsers(): Observable<any>{
    return this.httpclient.get(this.baseUrl+"users");
  }

  submitUserDetail(userDetail: any):Observable<any>{
    return this.httpclient.post(this.baseUrl+'users',userDetail)
  }
}
