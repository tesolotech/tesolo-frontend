import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../service/youtube.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-all-videos',
  templateUrl: './all-videos.component.html',
  styleUrls: ['./all-videos.component.css']
})
export class AllVideosComponent implements OnInit {

  public allVideosData = [];

  constructor( private youtubeServices: YoutubeService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    if(localStorage.getItem('videoDetails')){
      const data = JSON.parse(localStorage.getItem('videoDetails'));
      this.allVideosData = Object.assign(data);

    } else {
      this.spinner.show();
      this.youtubeServices.getVideosDetails().subscribe((response)=> {
        if (response["statusCode"] == '200' && response["message"] == 'Success') {
          localStorage.setItem('videoDetails', JSON.stringify(response["data"]) );
          this.allVideosData = Object.assign(response['data']);
        }
        this.spinner.hide();
      });
    }
  }

}
