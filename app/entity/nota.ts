import { Atividade } from './atividade';

export class Nota {
	Disciplina: string;
	Atividades: Array<Atividade> = [];
}