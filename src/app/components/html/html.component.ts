import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../service/youtube.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {
  public htmlVideosData = [];
  public playListUrl: string;
  constructor(private youtubeServices: YoutubeService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    if(localStorage.getItem('videoDetails')){
      let data = [];
      data = JSON.parse(localStorage.getItem('videoDetails'));
      for(let i = 0; i< data.length; i++) {
        if(data[i].playListTitle == 'HTML-5'){
          this.playListUrl = data[i].playListUrl;
          this.htmlVideosData = Object.assign(data[i].playListVDatas);
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
            if (data[i].playListTitle == 'HTML-5') {
              this.playListUrl = data[i].playListUrl;
              this.htmlVideosData = Object.assign(data[i].playListVDatas);
            }
          }

        }
        this.spinner.hide();
      });
    }
  }

}
