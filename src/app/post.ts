export class Post {

  title: string;
  content: string;
  created_at: number;

  constructor(obj) {
    this.title = obj.title;
    this.content = obj.content;
    this.created_at = Date.now();
  }
}
