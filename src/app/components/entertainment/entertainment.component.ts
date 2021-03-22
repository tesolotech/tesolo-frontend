import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  public mastiVideosData = [];
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('videoDetails')){
      let data = [];
      data = JSON.parse(localStorage.getItem('videoDetails'));
      for(let i = 0; i< data.length; i++) {
        if(data[i].playListTitle == 'CuTeNess_OvErLod_Of_InDiA'){
          this.mastiVideosData = Object.assign(data[i].playListVDatas);
        }
      }
      // console.log(this.mastiVideosData);
    }
  }

}
