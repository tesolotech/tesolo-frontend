import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../service/youtube.service';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {
  public cssVideosData = [];
  public playListUrl: string;
  constructor(private youtubeServices: YoutubeService) { }

  ngOnInit() {
    if(localStorage.getItem('videoDetails')){
      let data = [];
      data = JSON.parse(localStorage.getItem('videoDetails'));
      for(let i = 0; i< data.length; i++) {
        if(data[i].playListTitle == 'StyleSheet(CSS3)'){
          this.playListUrl = data[i].playListUrl;
          this.cssVideosData = Object.assign(data[i].playListVDatas);
        }
      }
    } else {
      this.youtubeServices.getVideosDetails().subscribe((response)=> {
        if (response["statusCode"] == '200' && response["message"] == 'Success') {
          localStorage.setItem('videoDetails', JSON.stringify(response["data"]) );
          let data = [];
          data = JSON.parse(localStorage.getItem('videoDetails'));
          for(let i = 0; i< data.length; i++) {
            if (data[i].playListTitle == 'StyleSheet(CSS3)') {
              this.playListUrl = data[i].playListUrl;
              this.cssVideosData = Object.assign(data[i].playListVDatas);
            }
          }

        }

      });
    }
  }

}
