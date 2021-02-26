import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoterDetailsService {

  constructor(private http: HttpClient) { }

  Header: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'responseType': 'json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
  });

  // URL
  base_url = "https://sgbserviceapi-dev.azurewebsites.net";


  getParentInfo(IdNo,emisCode)
  {
    return this.http.get(this.base_url + "/api/Parent/GetParentInfo?IDNumber=" + IdNo + "&EmisCode=" + emisCode, { headers: this.Header })
  }
}