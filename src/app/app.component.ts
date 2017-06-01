import { Component, OnInit } from '@angular/core';
import { CallApiService }  from './call-api.service';
import { AppRoutingModule }     from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'Infos news';
    constructor(private callApi: CallApiService) {}
    sources;

    ngOnInit() {
        this.callApi.getSourcesNews().then(data => {
            // console.log('data', data.sources);
            this.sources = data.sources;
        });
    }
}
