import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { IMeetings } from './Interface/meetings';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectionsService {

  constructor(private http: HttpClient) { }

  Header: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'responseType': 'json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
  });

  // URL
  meetings_url = "https://sgbserviceapi.azurewebsites.net/api/Meeting/MeetingList";
  base_url = "https://sgbserviceapi.azurewebsites.net";



  ////////////// MEETING service ////////////////////////
  getAllMeetings() {
    return this.http.get(this.meetings_url);
  }


  ////////////// AUTH service ////////////////////////
  authenticateParentIDNmber(jsonData) {
    return this.http.post(this.base_url + "/api/Login/AuthenticateParent", jsonData, { headers: this.Header })
  }

  authParentOTP(phonenumber, otp) {
    return this.http.post(this.base_url + "/AuthenticateOTP?MobileNumber=" + phonenumber + "&OTP=" + otp, { headers: this.Header })
  }

  sendOTP(IDnumber) {
    return this.http.post(this.base_url + "/SendOTP?IDNumber=" + IDnumber, { headers: this.Header })
  }

  resendOTP(id) {
    return this.http.get(this.base_url + "/ResendOTP?Id=" + id, { headers: this.Header })
  }



  ////////////// PARENT service ////////////////////////

  getParentInfo(id) {
    return this.http.get(this.base_url + "/GetParentInfo?IDNumber=" + id, { headers: this.Header })
  }

  getSchoolByParentId(id) {
    return this.http.get(this.base_url + "/GetChildrenSchoolByParentId?ParentId=" + id, { headers: this.Header })
  }

  getLearnersByParentId(id, emisCode) {
    return this.http.get(this.base_url + "/GetLeanersByParent?ParentId=" + id + "&EmisCode=" + emisCode, { headers: this.Header })
  }



  /*
  https://sgbserviceapi.azurewebsites.net/GetParentInfo?IDNumber=9401095569086
  /GetChildrenSchoolByParentId?ParentId=<integer>
  /GetLeanersByParent?ParentId=<string>&EmisCode=<string>
  */

}
