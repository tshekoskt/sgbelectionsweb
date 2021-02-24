import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMeetings } from './Interface/meetings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectionsService {

  constructor(private http: HttpClient) { }

  // API
  meetings_url = "https://sgbserviceapi.azurewebsites.net/api/Meeting/MeetingList"

 // API Requests

 getAllMeetings(): Observable<IMeetings[]>{
   return this.http.get<IMeetings[]>(this.meetings_url);
 }

// getAllMeetings() {
//   return this.http.get(this.meetings_url);
// }

}
