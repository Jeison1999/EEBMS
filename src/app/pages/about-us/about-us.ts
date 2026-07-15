import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import type {
	BeliefItem,
	LeadershipGroup,
	LeadershipMemberDto,
	TimelineItem,
	ValueItem,
} from './about-us.models';

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
	readonly photoErrors = signal<ReadonlySet<string>>(new Set());
	readonly heroImageFailed = signal(false);
	readonly platformImageFailed = signal<ReadonlySet<'back' | 'front'>>(new Set());

	readonly heroImageSrc = 'assets/images/equipo.jpg';

	readonly platformImages = {
		back: 'https://res.cloudinary.com/dsm6diilz/image/upload/v1784139019/Captura_de_pantalla_2026-07-15_130842_nddh4f.png',
		front: 'https://res.cloudinary.com/dsm6diilz/image/upload/v1784139018/Captura_de_pantalla_2026-07-15_130907_vo1fny.png',
	} as const;

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

	public readonly leadershipGroups: readonly LeadershipGroup[] = [
		{
			id: 'direccion',
			title: 'Dirección',
			subtitle: 'Quienes guían la visión y el corazón institucional de EEBMS.',
			featured: true,
			members: [
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
			],
		},
		{
			id: 'administracion',
			title: 'Administración y operación',
			subtitle: 'El equipo que sostiene la gestión diaria y el soporte técnico.',
			members: [
				{
					name: 'Anyela Ortega',
					role: 'Asistente Administrativo',
					photoUrl: CLOUDINARY_PHOTO('angela_y6f5gj'),
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
					name: 'Yohandry Martinez',
					role: 'Coordinador Técnico',
					photoUrl: CLOUDINARY_PHOTO('Yohandry_wqkczk'),
				},
				{
					name: 'Isaac Jimenez',
					role: 'Auxiliar Técnico',
					photoUrl: CLOUDINARY_PHOTO('Isaac_ncb7rb'),
				},
			],
		},
		{
			id: 'formacion',
			title: 'Formación y coordinación académica',
			subtitle: 'Quienes acompañan cada programa y el crecimiento de los estudiantes.',
			members: [
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
					name: 'Maria Camila',
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
			],
		},
	];

	hasHeroImage(): boolean {
		return !this.heroImageFailed();
	}

	onHeroImageError(): void {
		this.heroImageFailed.set(true);
	}

	onPlatformImageError(slot: 'back' | 'front'): void {
		this.platformImageFailed.update((current) => new Set([...current, slot]));
	}

	onPhotoError(photoUrl: string): void {
		this.photoErrors.update((current) => new Set([...current, photoUrl]));
	}

	hasPhoto(member: LeadershipMemberDto): boolean {
		return !!member.photoUrl && !this.photoErrors().has(member.photoUrl);
	}
}
