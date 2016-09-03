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
            .then((data) => this.parseData(data))
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    }

    private parseData(data) {
        let articles: Article[] = [];
        for(let i in data){
            let article: Article = {
                title: data[i]['title'],
                id: data[i]['id'],
                publishDate: new Date(data[i]['publishDate']),
                lastUpdate: new Date(data[i]['lastUpdate']),
                body: data[i]['body'],
                author: data[i]['author'],
                image: data[i]['image']
            };
            articles.push(article);
        }
      return articles;
    }

}
