import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AboutSection } from './components/about-section/about-section';
import { ContactSection } from './components/contact-section/contact-section';
import { MissionVisionSection } from './components/mission-vision-section/mission-vision-section';
import { ProgramsSection } from './components/programs-section/programs-section';
import { WelcomeHero } from './components/welcome-hero/welcome-hero';

@Component({
	selector: 'app-welcome',
	imports: [
		WelcomeHero,
		AboutSection,
		MissionVisionSection,
		ProgramsSection,
		ContactSection,
	],
	templateUrl: './welcome.html',
	styleUrl: './welcome.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Welcome {}
