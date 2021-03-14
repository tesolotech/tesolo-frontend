import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../service/youtube.service';

@Component({
  selector: 'app-all-videos',
  templateUrl: './all-videos.component.html',
  styleUrls: ['./all-videos.component.css']
})
export class AllVideosComponent implements OnInit {

  public allVideosData = [];

  constructor( private youtubeServices: YoutubeService) { }

  ngOnInit() {
    // this.youtubeServices.getVideosDetails().subscribe((response)=> {
    //   console.log(response);
    // });
    if(localStorage.getItem('videoDetails')){
      const data = JSON.parse(localStorage.getItem('videoDetails'));
      this.allVideosData = Object.assign(data);

      console.log(this.allVideosData);
    }
  }

}
