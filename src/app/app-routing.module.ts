import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllVideosComponent } from './components/all-videos/all-videos.component';
import { HomeComponent } from './components/home/home.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { HtmlComponent } from './components/html/html.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { PythonComponent } from './components/python/python.component';
import { JavaComponent } from './components/java/java.component';
import { CssComponent } from './components/css/css.component';
import { LinuxComponent } from './components/linux/linux.component';
import { HackingComponent } from './components/hacking/hacking.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { CoursesComponent } from './components/courses/courses.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Videos", component: AllVideosComponent },
  { path: "Bootstrap", component: BootstrapComponent },
  { path: "Html", component: HtmlComponent },
  { path: "Css", component: CssComponent },
  { path: "Java", component: JavaComponent },
  { path: "Python", component: PythonComponent },
  { path: "Javascript", component: JavascriptComponent },
  { path: "Linux", component: LinuxComponent },
  { path: "Hacking", component: HackingComponent },
  { path: "Entertainment", component: EntertainmentComponent },
  { path: "Courses", component: CoursesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],


exports: [RouterModule]
})
export class AppRoutingModule { }
