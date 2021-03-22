import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hacking',
  templateUrl: './hacking.component.html',
  styleUrls: ['./hacking.component.css']
})
export class HackingComponent implements OnInit {
  public hackingVideosData = [];
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('videoDetails')){
      let data = [];
      data = JSON.parse(localStorage.getItem('videoDetails'));
      for(let i = 0; i< data.length; i++) {
        if(data[i].playListTitle == 'Hacking'){
          this.hackingVideosData = Object.assign(data[i].playListVDatas);
        }
      }
      // console.log(this.hackingVideosData);
    }
  }

}
