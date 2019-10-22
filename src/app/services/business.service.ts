import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private API_URL_GET_LIST_BUSINESS = environment.api_main + 'posts'

  constructor(private http: HttpClient) { }

  getBusiness(){
    return this.http.get(this.API_URL_GET_LIST_BUSINESS)
  }
}
