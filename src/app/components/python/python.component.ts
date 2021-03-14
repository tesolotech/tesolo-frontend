import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent implements OnInit {
  public pythonVideosData = [];
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('videoDetails')){
      let data = [];
      data = JSON.parse(localStorage.getItem('videoDetails'));
      for(let i = 0; i< data.length; i++) {
        if(data[i].playListTitle == 'Python3'){
          this.pythonVideosData = Object.assign(data[i].playListVDatas);
        }
      }
      console.log(this.pythonVideosData);
    }
  }

}
