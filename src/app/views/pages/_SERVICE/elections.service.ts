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
  base_url = "https://sgbserviceapi-dev.azurewebsites.net";
  Xbase_url = "https://sgbserviceapi.azurewebsites.net";



  ////////////// MEETING service ////////////////////////
  getAllMeetings() {
    return this.http.get(this.base_url + "/api/Meeting/MeetingList");
  }


  ////////////// AUTH service ////////////////////////
  authenticateParentIDNmber(jsonData) {
    return this.http.post(this.base_url + "/api/Login/AuthenticateParent", jsonData, { headers: this.Header })
  }

  authParentOTP(phonenumber, otp) {
    return this.http.post(this.base_url + "/api/SMS/AuthenticateOTP?MobileNumber=" + phonenumber + "&OTP=" + otp, { headers: this.Header })
  }

  sendOTP(IDnumber) {
    return this.http.get(this.base_url + "/api/SMS/SendOTP?IDNumber=" + IDnumber)
  }

  resendOTP(id) {
    return this.http.get(this.base_url + "/ResendOTP?Id=" + id, { headers: this.Header })
  }



  ////////////// PARENT service ////////////////////////

  getParentInfo(id) {
    return this.http.get(this.base_url + "/GetParentInfo?IDNumber=" + id, { headers: this.Header })
  }

  getSchoolByParentId(id) {
    return this.http.get(this.base_url + "/api/Parent/GetChildrenSchoolByParentId?ParentId=" + id, { headers: this.Header })
  }

  getLearnersByParentId(id, emisCode) {
    return this.http.get(this.base_url + "/GetLeanersByParent?ParentId=" + id + "&EmisCode=" + emisCode, { headers: this.Header })
  }



  ////////////// NOMINATION service ////////////////////////

  getInfoByEmisCode(emisCode) {
    return this.http.get(this.base_url + "/api/Nomination/GetScheduledInfoByEmisCode?EmisCode=" + emisCode)
  }

  getScheduledNominationByEmisCode(emisCode, date) {
    return this.http.get(this.base_url + "/api/Nomination/GetScheduledNominationByEmisCode?EmisCode=" + emisCode + "&currentDate=" + date)
  }


  /*
/api/Nomination/GetScheduledInfoByEmisCode?EmisCode=
/api/Nomination/GetScheduledNominationByEmisCode?EmisCode=700400139&currentDate=2021-01-01
  */

}
