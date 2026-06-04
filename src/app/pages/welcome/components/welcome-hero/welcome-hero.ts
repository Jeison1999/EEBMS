import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-welcome-hero',
	imports: [],
	templateUrl: './welcome-hero.html',
	styleUrl: './welcome-hero.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeHero {}
