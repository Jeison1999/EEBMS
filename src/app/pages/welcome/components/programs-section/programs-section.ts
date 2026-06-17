import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-programs-section',
	imports: [RouterLink],
	templateUrl: './programs-section.html',
	styleUrl: './programs-section.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgramsSection {}
