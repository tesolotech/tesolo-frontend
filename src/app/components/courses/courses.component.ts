import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../service/youtube.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public courseDataSets = [];
  constructor(
    private youtubeServices: YoutubeService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    if(localStorage.getItem('videoDetails')){
      let data = [];
      let courseList = [];
      data = JSON.parse(localStorage.getItem('videoDetails'));
      if(data.length > 0) {
        data.forEach((item) => {courseList.push(item.playListTitle)});
      }

      for(let i = 0; i< data.length; i++) {
        let courseModel = {
          title: '',
          discription: '',
          imageUrl: 'assets/img/course-1.jpg',
          authorName: 'Vikash Kumar',
          authorImgUrl: 'assets/img/trainers/vikash_python.jpg',
          cost: 'Free',
          userSubscribeCount: 50,
          userLikeCount : 100,
          redirectUrl: ''
        }

        if(courseList[i] === 'Python3'){
          courseModel.title = courseList[i];
          courseModel.redirectUrl = '/Python';
          this.courseDataSets.push(courseModel);
        } else if (courseList[i] === 'CuTeNess_OvErLod_Of_InDiA') {
          courseModel.title = courseList[i];
          courseModel.redirectUrl = '/Entertainment';
          this.courseDataSets.push(courseModel);
        } else if (courseList[i] === 'Java') {
          courseModel.title = courseList[i];
          courseModel.redirectUrl = '/Java';
          this.courseDataSets.push(courseModel);
        } else if (courseList[i] === 'Hacking') {
          courseModel.title = courseList[i];
          courseModel.redirectUrl = '/Hacking';
          this.courseDataSets.push(courseModel);
        } else if (courseList[i] === 'JavaScript') {
          courseModel.title = courseList[i];
          courseModel.redirectUrl = '/Javascript';
          this.courseDataSets.push(courseModel);
        } else if (courseList[i] === 'Bootstrap') {
          courseModel.title = courseList[i];
          courseModel.redirectUrl = '/Bootstrap';
          this.courseDataSets.push(courseModel);
        } else if (courseList[i] === 'HTML-5') {
          courseModel.title = courseList[i];
          courseModel.redirectUrl = '/Html';
          this.courseDataSets.push(courseModel);
        } else if (courseList[i] === 'StyleSheet(CSS3)') {
          courseModel.title = courseList[i];
          courseModel.redirectUrl = '/Css';
          this.courseDataSets.push(courseModel);
        } else if (courseList[i] === 'Linux Tutorial') {
          courseModel.title = courseList[i];
          courseModel.redirectUrl = '/Linux';
          this.courseDataSets.push(courseModel);
        }

      }
      console.log('courseDataSets', this.courseDataSets);
    } else {
      this.spinner.show();
      this.youtubeServices.getVideosDetails().subscribe((response)=> {
        if (response["statusCode"] == '200' && response["message"] == 'Success') {
          localStorage.setItem('videoDetails', JSON.stringify(response["data"]) );
          let data = [];
          let courseList = [];
          data = JSON.parse(localStorage.getItem('videoDetails'));
          if(data.length > 0) {
            data.forEach((item) => {courseList.push(item.playListTitle)});
          }
          for(let i = 0; i< data.length; i++) {
            let courseModel = {
              title: '',
              discription: '',
              imageUrl: 'assets/img/course-1.jpg',
              authorName: 'Vikash Kumar',
              authorImgUrl: 'assets/img/trainers/vikash_python.jpg',
              cost: 'Free',
              userSubscribeCount: 50,
              userLikeCount : 100,
              redirectUrl: ''
            };

            if(courseList[i] === 'Python3'){
              courseModel.title = courseList[i];
              courseModel.redirectUrl = '/Python';
              this.courseDataSets.push(courseModel);
            } else if (courseList[i] === 'CuTeNess_OvErLod_Of_InDiA') {
              courseModel.title = courseList[i];
              courseModel.redirectUrl = '/Entertainment';
              this.courseDataSets.push(courseModel);
            } else if (courseList[i] === 'Java') {
              courseModel.title = courseList[i];
              courseModel.redirectUrl = '/Java';
              this.courseDataSets.push(courseModel);
            } else if (courseList[i] === 'Hacking') {
              courseModel.title = courseList[i];
              courseModel.redirectUrl = '/Hacking';
              this.courseDataSets.push(courseModel);
            } else if (courseList[i] === 'JavaScript') {
              courseModel.title = courseList[i];
              courseModel.redirectUrl = '/Javascript';
              this.courseDataSets.push(courseModel);
            } else if (courseList[i] === 'Bootstrap') {
              courseModel.title = courseList[i];
              courseModel.redirectUrl = '/Bootstrap';
              this.courseDataSets.push(courseModel);
            } else if (courseList[i] === 'HTML-5') {
              courseModel.title = courseList[i];
              courseModel.redirectUrl = '/Html';
              this.courseDataSets.push(courseModel);
            } else if (courseList[i] === 'StyleSheet(CSS3)') {
              courseModel.title = courseList[i];
              courseModel.redirectUrl = '/Css';
              this.courseDataSets.push(courseModel);
            } else if (courseList[i] === 'Linux Tutorial') {
              courseModel.title = courseList[i];
              courseModel.redirectUrl = '/Linux';
              this.courseDataSets.push(courseModel);
            }
          }
          console.log('courseDataSets', this.courseDataSets);

        }
        this.spinner.hide();
      });
    }
  }


}
