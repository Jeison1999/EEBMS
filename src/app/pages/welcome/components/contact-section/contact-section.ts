import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icons } from '../../../../shared/Interfaces/Icons.interface';

@Component({
	selector: 'app-contact-section',
	imports: [],
	templateUrl: './contact-section.html',
	styleUrl: './contact-section.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {
	icons: Icons[] = [
		{
			name: 'Whatsapp',
			src: 'assets/icons/whatsapp.svg'
		},
		{
			name: 'mail',
			src: 'assets/icons/email.svg'
		},
		{
			name: 'phone',
			src: 'assets/icons/phone.svg'
		},
		{
			name: 'location',
			src: 'assets/icons/location.svg'
		}
	]
}
