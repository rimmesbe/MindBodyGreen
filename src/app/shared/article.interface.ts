export interface Article {
    title: string;
    id: number;
    publishDate: Date; //"M/d/yyyy h:mm A"
    lastUpdate: Date;
    body: string;
    author: string;
    image: string;
}
