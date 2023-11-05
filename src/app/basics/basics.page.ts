import { Component } from '@angular/core';
interface Video {
  url: string;
  title: string;
  liked: boolean;
}

@Component({
  selector: 'app-basics',
  templateUrl: './basics.page.html',
  styleUrls: ['./basics.page.scss'],
})
export class BasicsPage {
  videos: Video[] = [
    { url: 'https://www.youtube.com/embed87yfJHZR2yA', title: 'Video 1', liked: false },
    { url: 'https://www.youtube.com/embed/87yfJHZR2yA', title: 'Video 2', liked: false },
    { url: 'https://www.youtube.com/embed/87yfJHZR2yA', title: 'Video 3', liked: false },
    { url: 'https://www.youtube.com/embed/87yfJHZR2yA', title: 'Video 4', liked: false },
    { url: 'https://www.youtube.com/embed/87yfJHZR2yA', title: 'Video 5', liked: false },
    { url: 'https://www.youtube.com/embed/87yfJHZR2yA', title: 'Video 6', liked: false }
  ];

  toggleLike(video: Video) {
    video.liked = !video.liked;
  }
}
