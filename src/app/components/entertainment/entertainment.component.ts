import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../service/youtube.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  public mastiVideosData = [];
  public playListUrl: string;
  constructor(private youtubeServices: YoutubeService) { }

  ngOnInit() {
    if(localStorage.getItem('videoDetails')){
      let data = [];
      data = JSON.parse(localStorage.getItem('videoDetails'));
      for(let i = 0; i< data.length; i++) {
        if(data[i].playListTitle == 'CuTeNess_OvErLod_Of_InDiA'){
          this.playListUrl = data[i].playListUrl;
          this.mastiVideosData = Object.assign(data[i].playListVDatas);
        }
      }
    } else {
      this.youtubeServices.getVideosDetails().subscribe((response)=> {
        if (response["statusCode"] == '200' && response["message"] == 'Success') {
          localStorage.setItem('videoDetails', JSON.stringify(response["data"]) );
          let data = [];
          data = JSON.parse(localStorage.getItem('videoDetails'));
          for(let i = 0; i< data.length; i++) {
            if (data[i].playListTitle == 'CuTeNess_OvErLod_Of_InDiA') {
              this.playListUrl = data[i].playListUrl;
              this.mastiVideosData = Object.assign(data[i].playListVDatas);
            }
          }

        }

      });
    }
  }

}
