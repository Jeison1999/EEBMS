import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-welcome',
	imports: [],
	templateUrl: './welcome.html',
	styleUrl: './welcome.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Welcome {}