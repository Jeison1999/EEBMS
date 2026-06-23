import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface TimelineItem {
	readonly year: string;
	readonly title: string;
	readonly description: string;
}

interface BeliefItem {
	readonly title: string;
	readonly description: string;
}

interface ValueItem {
	readonly title: string;
	readonly description: string;
}

interface OrgRole {
	readonly title: string;
	readonly name: string;
	readonly description: string;
}

interface TeamMember {
	readonly name: string;
	readonly role: string;
	readonly focus: string;
}

@Component({
	selector: 'app-about-us',
	imports: [RouterLink],
	templateUrl: './about-us.html',
	styleUrl: './about-us.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUs {
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

	public readonly orgRoles: readonly OrgRole[] = [
		{
			title: 'Dirección general',
			name: 'Por definir',
			description: 'Coordina la visión institucional, el desarrollo académico y el servicio a la comunidad.',
		},
		{
			title: 'Docencia',
			name: 'Equipo docente',
			description: 'Imparte la formación bíblica y teológica con rigor, claridad y corazón pastoral.',
		},
		{
			title: 'Administración',
			name: 'Por definir',
			description: 'Apoya la organización de programas, inscripciones, comunicación y logística.',
		},
	];

	public readonly team: readonly TeamMember[] = [
		{
			name: 'Equipo fundador',
			role: 'Liderazgo institucional',
			focus: 'Guía los primeros pasos de EEBMS con visión, oración y servicio a la iglesia local.',
		},
		{
			name: 'Docentes',
			role: 'Formación bíblica',
			focus: 'Enseñan la Palabra con pasión por la verdad y el crecimiento espiritual de cada estudiante.',
		},
		{
			name: 'Voluntarios',
			role: 'Apoyo comunitario',
			focus: 'Acompañan actividades, logística y el ambiente de comunidad que caracteriza a la escuela.',
		},
	];
}
