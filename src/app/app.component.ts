import { Component, OnInit } from '@angular/core';
import { CallApiService }  from './call-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Infos news';
  constructor(private callApi: CallApiService) {}

  ngOnInit() {
     this.callApi.getSourcesNews();
  }


}
