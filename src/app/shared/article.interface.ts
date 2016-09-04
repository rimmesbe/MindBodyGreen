export interface Article {
    id: number;
    title: string;
    articleId: number;
    publishDate: Date; //"M/d/yyyy h:mm A"
    lastUpdate: Date;
    body: string;
    author: string;
    image: string;
}
