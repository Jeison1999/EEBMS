export interface TimelineItem {
	readonly year: string;
	readonly title: string;
	readonly description: string;
}

export interface BeliefItem {
	readonly title: string;
	readonly description: string;
}

export interface ValueItem {
	readonly title: string;
	readonly description: string;
}

export interface LeadershipMemberDto {
	readonly name: string;
	readonly role: string;
	readonly photoUrl?: string;
	readonly photoAlt?: string;
	/** Ajuste de encuadre del círculo, ej. "30% 25%" cuando la cara queda descentrada. */
	readonly photoObjectPosition?: string;
	readonly description?: string;
}

export interface LeadershipGroup {
	readonly id: string;
	readonly title: string;
	readonly subtitle: string;
	readonly featured?: boolean;
	readonly members: readonly LeadershipMemberDto[];
}
