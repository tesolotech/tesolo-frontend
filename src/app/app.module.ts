import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AllVideosComponent } from './components/all-videos/all-videos.component';
import { HomeComponent } from './components/home/home.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { PythonComponent } from './components/python/python.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { JavaComponent } from './components/java/java.component';
import { HtmlComponent } from './components/html/html.component';
import { AngularComponent } from './components/angular/angular.component';
import { CssComponent } from './components/css/css.component';
import { LinuxComponent } from './components/linux/linux.component';
import { HackingComponent } from './components/hacking/hacking.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AllVideosComponent,
    HomeComponent,
    JavascriptComponent,
    PythonComponent,
    BootstrapComponent,
    JavaComponent,
    HtmlComponent,
    AngularComponent,
    CssComponent,
    LinuxComponent,
    HackingComponent,
    EntertainmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
