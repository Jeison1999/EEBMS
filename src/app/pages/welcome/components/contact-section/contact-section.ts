import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-contact-section',
	imports: [],
	templateUrl: './contact-section.html',
	styleUrl: './contact-section.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {}
