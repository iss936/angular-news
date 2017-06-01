import { Component, OnInit } from '@angular/core';
import { CallApiService }  from '../call-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
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
