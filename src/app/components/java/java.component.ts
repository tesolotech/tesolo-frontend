import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../service/youtube.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {
  public javaVideosData = [];
  public playListUrl: string;
  constructor(private youtubeServices: YoutubeService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    if(localStorage.getItem('videoDetails')) {
      let data = [];
      data = JSON.parse(localStorage.getItem('videoDetails'));
      for(let i = 0; i< data.length; i++) {
        if(data[i].playListTitle == 'Java'){
          this.playListUrl = data[i].playListUrl;
          this.javaVideosData = Object.assign(data[i].playListVDatas);
        }
      }
    } else {
      this.spinner.show();
      this.youtubeServices.getVideosDetails().subscribe((response)=> {
        if (response["statusCode"] == '200' && response["message"] == 'Success') {
          localStorage.setItem('videoDetails', JSON.stringify(response["data"]) );
          let data = [];
          data = JSON.parse(localStorage.getItem('videoDetails'));
          for(let i = 0; i< data.length; i++) {
            if (data[i].playListTitle == 'Java') {
              this.playListUrl = data[i].playListUrl;
              this.javaVideosData = Object.assign(data[i].playListVDatas);
            }
          }

        }
        this.spinner.hide();
      });
    }
  }

}
