import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { BeliefItem, LeadershipMemberDto, TimelineItem, ValueItem } from './about-us.models';

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

	public readonly leadershipMembers: readonly LeadershipMemberDto[] = [
		{
			name: 'Doris de Rios',
			role: 'Directora',
		},
		{
			name: 'Pedro Rios',
			role: 'Pastor Presidente',
		},
		{
			name: 'Anyela Ortega',
			role: 'Asistente Administrativo',
		},
		{
			name: 'Yohandry Martinez',
			role: 'Coordinador Técnico',
		},
		{
			name: 'Isaac Jimenez',
			role: 'Auxiliar Técnico',
		},
		{
			name: 'Diana Dimuro',
			role: 'Coordinador de Finanzas',
		},
		{
			name: 'Mirna Villalba',
			role: 'Coordinador General',
		},
		{
			name: 'Saray Obregon',
			role: 'Coord. Académico Teología',
		},
		{
			name: 'Julieth Yejas',
			role: 'Coord. Discipulado Básico',
		},
		{
			name: 'Melissa Julio',
			role: 'Coord. Liderazgo',
		},
		{
			name: 'Ma Camila Echavarria',
			role: 'Coord. Discipulado Intensivo',
		},
		{
			name: 'Andres Sevilla',
			role: 'Coordinador Teología Virtual',
		},
		{
			name: 'Roberto Charris',
			role: 'Monitor Teología Presencial',
		},
		{
			name: 'Maestros',
			role: 'Equipo docente presencial',
		},
		{
			name: 'Maestros',
			role: 'Equipo docente discipulado',
		},
		{
			name: 'Maestros',
			role: 'Equipo docente liderazgo',
		},
	];
}
