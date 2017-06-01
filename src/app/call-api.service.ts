import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Source } from './source';
import { News } from './news';

@Injectable()
// Permet de faire les appels api nécessaire au bon fonctionnement de l'application
export class CallApiService {
    private sourcesUrl = 'http://newsapi.org/v1/sources';  // URL to sources news api
    private newsUrl = 'https://newsapi.org/v1/articles?source=abc-news-au&apiKey=0b4f5d3c739e4d3287e3c21abcf55cb0'; // URL to news api

    private apiKey = '0b4f5d3c739e4d3287e3c21abcf55cb0';

    constructor(private http: Http) { }

    // retourne les Sources de News
    getSourcesNews(): any {

    return this.http.get(this.sourcesUrl)
               .toPromise()
               .then(response => response.json() as Source[])
               .catch(this.handleError);
   }

   /**
    * id: id de la source du journal
    * return la liste des news pour une source donnée
    */
   getNews(id): any {

    return this.http.get("https://newsapi.org/v1/articles?source="+id+"&apiKey="+this.apiKey)
               .toPromise()
               .then(response => response.json() as News[])
               .catch(this.handleError);
   }

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
