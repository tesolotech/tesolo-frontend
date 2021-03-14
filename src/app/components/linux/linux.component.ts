import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linux',
  templateUrl: './linux.component.html',
  styleUrls: ['./linux.component.css']
})
export class LinuxComponent implements OnInit {
  public linuxVideosData = [];
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('videoDetails')){
      let data = [];
      data = JSON.parse(localStorage.getItem('videoDetails'));
      for(let i = 0; i< data.length; i++) {
        if(data[i].playListTitle == 'Linux Tutorial'){
          this.linuxVideosData = Object.assign(data[i].playListVDatas);
        }
      }
      console.log(this.linuxVideosData);
    }
  }

}
