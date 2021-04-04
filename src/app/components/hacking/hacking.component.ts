import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../service/youtube.service';

@Component({
  selector: 'app-hacking',
  templateUrl: './hacking.component.html',
  styleUrls: ['./hacking.component.css']
})
export class HackingComponent implements OnInit {
  public hackingVideosData = [];
  public playListUrl: string;
  constructor(private youtubeServices: YoutubeService) { }

  ngOnInit() {
    if(localStorage.getItem('videoDetails')){
      let data = [];
      data = JSON.parse(localStorage.getItem('videoDetails'));
      for(let i = 0; i< data.length; i++) {
        if(data[i].playListTitle == 'Hacking'){
          this.playListUrl = data[i].playListUrl;
          this.hackingVideosData = Object.assign(data[i].playListVDatas);
        }
      }
    } else {
      this.youtubeServices.getVideosDetails().subscribe((response)=> {
        if (response["statusCode"] == '200' && response["message"] == 'Success') {
          localStorage.setItem('videoDetails', JSON.stringify(response["data"]) );
          let data = [];
          data = JSON.parse(localStorage.getItem('videoDetails'));
          for(let i = 0; i< data.length; i++) {
            if (data[i].playListTitle == 'Hacking') {
              this.playListUrl = data[i].playListUrl;
              this.hackingVideosData = Object.assign(data[i].playListVDatas);
            }
          }

        }

      });
    }
  }

}
