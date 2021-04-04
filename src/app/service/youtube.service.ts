import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
// import { CookieService } from "ngx-cookie-service";
// import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  public path = ''
  constructor(
    private httpClient: HttpClient
  ) { }

  getVideosDetails() {
    return this.httpClient.get('https://tesolo-backend.herokuapp.com/playListDetails');
  }

}
