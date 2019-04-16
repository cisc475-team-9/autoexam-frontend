import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }
  postUrl = "http://localhost:2468/mbz";
  // httpOptions = {
  //   headers: {
  //     contentType: contentType
  //   }
  // }
  postFile(file: any): Observable<any>{
    return this.http.post<any>(this.postUrl,file);
  }
  
}
