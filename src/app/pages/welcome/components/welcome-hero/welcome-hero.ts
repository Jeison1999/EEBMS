import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
	selector: 'app-welcome-hero',
	imports: [],
	templateUrl: './welcome-hero.html',
	styleUrl: './welcome-hero.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeHero {
	readonly heroImageFailed = signal(false);

	/**
	 * Foto de los directivos para el hero.
	 * Coloca el archivo en: public/assets/images/hero-inicio.jpg
	 * (también sirve .jpeg / .png si cambias la extensión aquí)
	 */
	readonly heroImageSrc = 'assets/images/pastores.jpg';

	hasHeroImage(): boolean {
		return !this.heroImageFailed();
	}

	onHeroImageError(): void {
		this.heroImageFailed.set(true);
	}
}
