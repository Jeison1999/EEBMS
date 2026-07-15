import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { ProgramItem } from './programs.models';

@Component({
	selector: 'app-programs',
	imports: [RouterLink],
	templateUrl: './programs.html',
	styleUrl: './programs.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Programs {
	readonly heroImageFailed = signal(false);
	readonly heroImageSrc = 'assets/images/equipo.jpg';

	readonly programs: readonly ProgramItem[] = [
		{
			id: 'discipulado-basico',
			step: '01',
			title: 'Discipulado Básico',
			summary: 'El primer paso de los nuevos creyentes en el Señor.',
			description:
				'Es un programa diseñado para fortalecer la fe cristiana, guiando al nuevo discípulo en su crecimiento espiritual y en el conocimiento de los principios de la vida cristiana.',
			purpose:
				'Llevar al creyente a ser bautizado como muestra física de su fe en Cristo Jesús.',
			meta: [
				{ label: 'Estructura', value: '8 clases' },
				{ label: 'Frecuencia', value: '1 vez por semana' },
				{ label: 'Duración', value: '2 meses' },
			],
		},
		{
			id: 'discipulado-intensivo',
			step: '02',
			title: 'Discipulado Intensivo',
			summary: 'Formación profunda después del bautismo.',
			description:
				'Después de ser bautizado, el nuevo discípulo pasa a este programa de formación profunda. Busca desarrollar discípulos comprometidos con un mayor entendimiento de la Palabra de Dios y una vida práctica de servicio y obediencia al Señor. Se profundiza en los principios fundamentales de la fe cristiana, que le ayudarán en su propósito y su servicio al Señor.',
			purpose:
				'Formar discípulos comprometidos con la Palabra, el servicio y la obediencia al Señor.',
			meta: [
				{ label: 'Estructura', value: '4 módulos prácticos' },
				{ label: 'Frecuencia', value: '1 vez por semana' },
				{ label: 'Duración', value: '6 meses' },
			],
		},
		{
			id: 'liderazgo',
			step: '03',
			title: 'Liderazgo',
			summary: 'Formación de líderes íntegros para servir e influir.',
			description:
				'Programa orientado al desarrollo de líderes íntegros y capacitados para servir, influir y guiar con sabiduría, carácter cristiano y visión ministerial.',
			purpose:
				'Formar líderes dispuestos a contribuir al crecimiento del Reino de los cielos.',
			meta: [
				{ label: 'Estructura', value: '2 niveles' },
				{ label: 'Frecuencia', value: '1 vez por semana' },
				{ label: 'Duración', value: '1 año y medio' },
			],
		},
		{
			id: 'teologia',
			step: '04',
			title: 'Teología',
			summary: 'Estudio sistemático de las Escrituras y la doctrina.',
			description:
				'Área de enseñanza creada para profundizar en los conocimientos bíblicos y teológicos. Es un espacio de estudio sistemático de las Escrituras que permite comprender las diferentes doctrinas fundamentales de la fe cristiana y fortalecer el conocimiento bíblico con fundamento sólido.',
			purpose:
				'Capacitar a los ministros del Señor con fundamentos en la fe cristiana, entendiendo el plan de salvación, la historia de la iglesia y el propósito de Dios para Su pueblo.',
			meta: [
				{ label: 'Estructura', value: '4 semestres' },
				{ label: 'Modalidad', value: 'Presencial y asincrónica' },
				{ label: 'Enfoque', value: 'Doctrina y Escrituras' },
			],
		},
	];

	hasHeroImage(): boolean {
		return !this.heroImageFailed();
	}

	onHeroImageError(): void {
		this.heroImageFailed.set(true);
	}
}
