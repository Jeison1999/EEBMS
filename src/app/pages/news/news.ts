import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-news',
  imports: [],
  template: `<p>news works!</p>`,
  styleUrl: './news.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class News {}
