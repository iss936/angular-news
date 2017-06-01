import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { News }         from '../news';
import { CallApiService }  from '../call-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(
    private callApiService: CallApiService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  news;

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.callApiService.getNews(params['id']).then(data => {
        
      }))
      .subscribe(news => this.news = news);

  }

  goBack(): void {
    this.location.back();
  }
  
}
