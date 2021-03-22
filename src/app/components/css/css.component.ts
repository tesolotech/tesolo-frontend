import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {
  public cssVideosData = [];
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('videoDetails')){
      let data = [];
      data = JSON.parse(localStorage.getItem('videoDetails'));
      for(let i = 0; i< data.length; i++) {
        if(data[i].playListTitle == 'StyleSheet(CSS3)'){
          this.cssVideosData = Object.assign(data[i].playListVDatas);
        }
      }
      // console.log(this.cssVideosData);
    }
  }

}
