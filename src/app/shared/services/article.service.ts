import { Article } from '../article.interface';
import { Injectable } from '@angular/core';
import { ARTICLES } from './mock-articles';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ArticleService {

    constructor(private http: Http) {
    }

    loadArticles(): Promise<Article[]> {
        return this.http.get('https://s3.amazonaws.com/mbgd/feed/prod-test-7fc12640-6f09-4461-b683-3e55acdfd4f4.json')
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
        // return Promise.resolve(ARTICLES);
    }

    private extractData(res: Response) {
        let articles = res.json();
        let parsedData: Article[] = [];

        for(let i in articles){
            parsedData.push(this.parseData(articles[i]));
        }

        return parsedData;
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    }

    private parseData(data) {
      let article: Article = {
        title: data['title'],
        id: data['id'],
        publishedDate: data['publishedDate'],
        lastUpdate: data['lastUpdate'],
        body: data['body'],
        author: data['author'],
        image: data['image']
      };
      return article;
    }

}
