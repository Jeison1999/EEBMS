export interface ProgramMeta {
	readonly label: string;
	readonly value: string;
}

export interface ProgramItem {
	readonly id: string;
	readonly step: string;
	readonly title: string;
	readonly summary: string;
	readonly description: string;
	readonly purpose: string;
	readonly meta: readonly ProgramMeta[];
}
