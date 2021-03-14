import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeService } from '../../service/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private youtubeServices: YoutubeService
    ) { }

  ngOnInit() {
      if ( localStorage.getItem('videoDetails')) {

      } else {
        this.youtubeServices.getVideosDetails().subscribe((response)=> {
          if (response["statusCode"] == '200' && response["message"] == 'Success') {
            localStorage.setItem('videoDetails', JSON.stringify(response["data"]) );
          }
          // console.log('youtube response',response);
        });
      }
  }


}
