import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	ElementRef,
	afterNextRender,
	inject,
	signal,
	viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import type { BeliefItem, LeadershipMemberDto, TimelineItem, ValueItem } from './about-us.models';

const CLOUDINARY_CLOUD = 'dsm6diilz';

/**
 * URL de foto en Cloudinary.
 * Se entrega sin recorte cuadrado fijo para poder centrar cada cara con `photoObjectPosition` en CSS.
 */
const CLOUDINARY_PHOTO = (publicId: string, version = 'v1784085276'): string =>
	`https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload/w_640,c_limit,f_auto,q_auto/${version}/${publicId}.jpg`;

@Component({
	selector: 'app-about-us',
	imports: [RouterLink],
	templateUrl: './about-us.html',
	styleUrl: './about-us.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUs {
	private readonly destroyRef = inject(DestroyRef);
	private readonly leadershipTrack = viewChild<ElementRef<HTMLElement>>('leadershipTrack');

	readonly canScrollPrev = signal(false);
	readonly canScrollNext = signal(false);
	readonly photoErrors = signal<ReadonlySet<string>>(new Set());
	readonly heroImageFailed = signal(false);

	readonly heroImageSrc = 'assets/images/equipo.jpg';

	hasHeroImage(): boolean {
		return !this.heroImageFailed();
	}

	onHeroImageError(): void {
		this.heroImageFailed.set(true);
	}

	constructor() {
		afterNextRender(() => {
			const track = this.leadershipTrack()?.nativeElement;
			if (!track) {
				return;
			}

			this.updateScrollState();

			const resizeObserver = new ResizeObserver(() => this.updateScrollState());
			resizeObserver.observe(track);

			this.destroyRef.onDestroy(() => {
				resizeObserver.disconnect();
			});
		});
	}

	onLeadershipScroll(): void {
		this.updateScrollState();
	}

	onPhotoError(photoUrl: string): void {
		this.photoErrors.update((current) => new Set([...current, photoUrl]));
	}

	hasPhoto(member: LeadershipMemberDto): boolean {
		return !!member.photoUrl && !this.photoErrors().has(member.photoUrl);
	}

	scrollLeadership(direction: 'prev' | 'next'): void {
		const track = this.leadershipTrack()?.nativeElement;
		if (!track) {
			return;
		}

		const cards = [...track.querySelectorAll<HTMLElement>('.leadership-card')];
		if (!cards.length) {
			return;
		}

		const currentIndex = this.getVisibleCardIndex(track, cards);
		const nextIndex =
			direction === 'next'
				? Math.min(currentIndex + 1, cards.length - 1)
				: Math.max(currentIndex - 1, 0);

		if (nextIndex === currentIndex) {
			return;
		}

		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		cards[nextIndex].scrollIntoView({
			behavior: prefersReducedMotion ? 'auto' : 'smooth',
			inline: 'start',
			block: 'nearest',
		});

		this.updateScrollState();

		if (!prefersReducedMotion) {
			track.addEventListener('scrollend', () => this.updateScrollState(), { once: true });
		}
	}

	private getVisibleCardIndex(
		track: HTMLElement,
		cards: readonly HTMLElement[],
	): number {
		const scrollLeft = track.scrollLeft;
		let index = 0;

		for (let i = 0; i < cards.length; i++) {
			if (cards[i].offsetLeft <= scrollLeft + 8) {
				index = i;
			}
		}

		return index;
	}

	private updateScrollState(): void {
		const track = this.leadershipTrack()?.nativeElement;
		if (!track) {
			return;
		}

		const cards = track.querySelectorAll<HTMLElement>('.leadership-card');
		const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
		const tolerance = 4;
		const hasOverflow = maxScroll > tolerance;

		if (!hasOverflow || !cards.length) {
			this.canScrollPrev.set(false);
			this.canScrollNext.set(false);
			return;
		}

		const currentIndex = this.getVisibleCardIndex(track, [...cards]);

		this.canScrollPrev.set(currentIndex > 0 || track.scrollLeft > tolerance);
		this.canScrollNext.set(
			currentIndex < cards.length - 1 || track.scrollLeft < maxScroll - tolerance,
		);
	}
	public readonly timeline: readonly TimelineItem[] = [
		{
			year: '2025',
			title: 'Nace el proyecto',
			description:
				'Un grupo de creyentes comparte la visión de una escuela bíblica local, centrada en la Palabra y el servicio a la comunidad.',
		},
		{
			year: '2026',
			title: 'Primeros pasos institucionales',
			description:
				'EEBMS da inicio formal a sus actividades formativas, definiendo su identidad, estructura básica y primeros programas de estudio.',
		},
		{
			year: 'Hoy',
			title: 'Un instituto en crecimiento',
			description:
				'Somos una institución joven que construye su historia paso a paso, con fe, disciplina y el compromiso de formar obreros aprobados.',
		},
	];

	public readonly beliefs: readonly BeliefItem[] = [
		{
			title: 'Las Escrituras',
			description:
				'Creemos que la Biblia es la Palabra inspirada de Dios, autoridad suprema para la fe y la conducta del creyente.',
		},
		{
			title: 'La Trinidad',
			description:
				'Confesamos un solo Dios eterno en tres personas: Padre, Hijo y Espíritu Santo, iguales en esencia y distintos en función.',
		},
		{
			title: 'Salvación por gracia',
			description:
				'La salvación es un regalo de Dios recibido por fe en Jesucristo, no por obras humanas, para vida eterna y transformación.',
		},
		{
			title: 'La Iglesia',
			description:
				'La iglesia local es el cuerpo de Cristo, llamada a adorar, enseñar la Palabra, discipular y servir con amor al prójimo.',
		},
		{
			title: 'Sana doctrina',
			description:
				'Procuramos enseñar y vivir conforme a la verdad bíblica, con fidelidad, humildad y responsabilidad ministerial.',
		},
		{
			title: 'Servicio y misión',
			description:
				'Cada creyente está llamado a servir con excelencia, usando sus dones para edificar a otros y glorificar a Dios.',
		},
	];

	public readonly values: readonly ValueItem[] = [
		{
			title: 'Fidelidad a la Palabra',
			description: 'Estudiamos, enseñamos y aplicamos las Escrituras con integridad y reverencia.',
		},
		{
			title: 'Excelencia',
			description: 'Buscamos calidad en la formación, el servicio y el testimonio de cada estudiante.',
		},
		{
			title: 'Comunidad',
			description: 'Crecemos juntos en un ambiente de respeto, apoyo mutuo y vida en congregación.',
		},
		{
			title: 'Servicio',
			description: 'Formamos no solo para saber, sino para servir con humildad y propósito.',
		},
	];

	public readonly leadershipMembers: readonly LeadershipMemberDto[] = [
		{
			name: 'Doris de Rios',
			role: 'Directora',
			photoUrl: CLOUDINARY_PHOTO('Dori_wiyab4'),
		},
		{
			name: 'Pedro Rios',
			role: 'Pastor Presidente',
			photoUrl: CLOUDINARY_PHOTO('Pedro_razdtu'),
		},
		{
			name: 'Anyela Ortega',
			role: 'Asistente Administrativo',
			photoUrl: CLOUDINARY_PHOTO('angela_y6f5gj'),
		},
		{
			name: 'Yohandry Martinez',
			role: 'Coordinador Técnico',
			photoUrl: CLOUDINARY_PHOTO('Yohandry_wqkczk'),
		},
		{
			name: 'Isaac Jimenez',
			role: 'Auxiliar Técnico',
			photoUrl: CLOUDINARY_PHOTO('Isaac_ncb7rb'),
		},
		{
			name: 'Diana Dimuro',
			role: 'Coordinador de Finanzas',
			photoUrl: CLOUDINARY_PHOTO('diana_czs3ul'),
		},
		{
			name: 'Mirna Villalba',
			role: 'Coordinador General',
			photoUrl: CLOUDINARY_PHOTO('mirna_pptlb8'),
		},
		{
			name: 'Saray Obregon',
			role: 'Coord. Académico Teología',
			photoUrl: CLOUDINARY_PHOTO('saray2_p5acx0'),
			photoObjectPosition: '28% 22%',
		},
		{
			name: 'Julieth Yejas',
			role: 'Coord. Discipulado Básico',
			photoUrl: CLOUDINARY_PHOTO('yuliet_vonovc'),
		},
		{
			name: 'Melissa Julio',
			role: 'Coord. Liderazgo',
			photoUrl: CLOUDINARY_PHOTO('melissa_htpqvn'),
		},
		{
			name: 'Maria Camila ',
			role: 'Coord. Discipulado Intensivo',
			photoUrl: CLOUDINARY_PHOTO('maria_camila_cpdpor'),
		},
		{
			name: 'Andres Sevilla',
			role: 'Coordinador Teología Virtual',
			photoUrl: CLOUDINARY_PHOTO('andres_ibkli4'),
		},
		{
			name: 'Roberto Charris',
			role: 'Monitor Teología Presencial',
			photoUrl: CLOUDINARY_PHOTO('Roberto_j4n8qd'),
		},
	];
}
