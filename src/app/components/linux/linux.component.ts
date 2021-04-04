import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../service/youtube.service';

@Component({
  selector: 'app-linux',
  templateUrl: './linux.component.html',
  styleUrls: ['./linux.component.css']
})
export class LinuxComponent implements OnInit {
  public linuxVideosData = [];
  public playListUrl: string;
  constructor(private youtubeServices: YoutubeService) { }

  ngOnInit() {
    if(localStorage.getItem('videoDetails')) {
      let data = [];
      data = JSON.parse(localStorage.getItem('videoDetails'));
      for(let i = 0; i< data.length; i++) {
        if(data[i].playListTitle == 'Linux Tutorial'){
          this.playListUrl = data[i].playListUrl;
          this.linuxVideosData = Object.assign(data[i].playListVDatas);
        }
      }
    } else {
      this.youtubeServices.getVideosDetails().subscribe((response)=> {
        if (response["statusCode"] == '200' && response["message"] == 'Success') {
          localStorage.setItem('videoDetails', JSON.stringify(response["data"]) );
          let data = [];
          data = JSON.parse(localStorage.getItem('videoDetails'));
          for(let i = 0; i< data.length; i++) {
            if (data[i].playListTitle == 'Linux Tutorial') {
              this.playListUrl = data[i].playListUrl;
              this.linuxVideosData = Object.assign(data[i].playListVDatas);
            }
          }

        }

      });
    }
  }

}
