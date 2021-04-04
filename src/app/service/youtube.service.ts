import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


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
