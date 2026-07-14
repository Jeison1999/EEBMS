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
	readonly description?: string;
}
