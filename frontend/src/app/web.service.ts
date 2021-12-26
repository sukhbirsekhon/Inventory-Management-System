import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WebService {
  readonly ROOT_URL;
  constructor(private http: HttpClient) {
    if(environment.production) {
      this.ROOT_URL = "http://ims-back.herokuapp.com";
    } else {
      this.ROOT_URL = "http://localhost:3000";
    }

  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
}
