export interface Todo {
	id: string;
	title: string;
	completed: boolean;
}

export enum QueryKeyEnum {
	TODOS = 'TODOS',
	TODO = 'TODO',
}
