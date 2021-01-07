import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/api/movies/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token 093ad5cc1de93f8ae09f91e99d1d843484ce71e4'
  });

  
  constructor(
    private httpClient: HttpClient
  ) { }

  getMovies() {
    return this.httpClient.get(this.baseUrl, {headers: this.headers});
    
  }
}
