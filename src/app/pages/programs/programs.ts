import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-programs',
  imports: [],
  template: `<p>Programs works!</p>`,
  styleUrl: './programs.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Programs {}
