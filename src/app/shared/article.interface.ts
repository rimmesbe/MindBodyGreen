export interface Article {
    title: string;
    id: number;
    publishedDate: number; //"M/d/yyyy h:mm A"
    lastUpdate: number; //"M/d/yyyy h:mm A"
    body: string;
    author: string;
    image: string;
}
