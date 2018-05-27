import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './home/index';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //directives : [HomeComponent]//deprecated
})

@NgModule({
  declarations: [ HomeComponent ]
})

export class AppComponent {
  title = 'app works!';
}
