import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

export type MissionVisionTab = 'mission' | 'vision';

interface MissionVisionPanel {
	readonly id: MissionVisionTab;
	readonly label: string;
	readonly title: string;
	readonly body: string;
	readonly imageSrc: string;
	readonly imageAlt: string;
}

@Component({
	selector: 'app-mission-vision-section',
	imports: [],
	templateUrl: './mission-vision-section.html',
	styleUrl: './mission-vision-section.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionVisionSection {
	public readonly activeTab = signal<MissionVisionTab>('mission');

	public readonly panels: readonly MissionVisionPanel[] = [
		{
			id: 'mission',
			label: 'Misión',
			title: 'Capacitar a cada estudiante en el conocimiento de la Palabra de Dios y en el servicio ministerial.',
			body: 'Formamos creyentes comprometidos con la fe, la sana doctrina y el crecimiento espiritual, preparando obreros aprobados que usan correctamente la Palabra de verdad.',
			imageSrc: '/assets/images/mision.jpg',
			imageAlt: 'Estudiantes en formación bíblica — misión EEBMS',
		},
		{
			id: 'vision',
			label: 'Visión',
			title: 'Ser un centro de formación teológica que impulse el crecimiento espiritual y personal de cada creyente.',
			body: 'Aspiramos a fundamentar a nuestros estudiantes en una doctrina sana, teniendo como eje la Trinidad bíblica: Padre, Hijo y Espíritu Santo.',
			imageSrc: '/assets/images/vision.jpg',
			imageAlt: 'Comunidad de fe y aprendizaje — visión EEBMS',
		},
	];

	public readonly activePanel = () => this.panels.find((p) => p.id === this.activeTab())!;

	setTab(tab: MissionVisionTab): void {
		this.activeTab.set(tab);
	}

	isActive(tab: MissionVisionTab): boolean {
		return this.activeTab() === tab;
	}

	onImageError(event: Event): void {
		const img = event.target as HTMLImageElement;
		img.style.display = 'none';
	}
}
