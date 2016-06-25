import { AtividadesDisciplina } from './atividades-disciplina';

export class Boletim {
	Id: number;
	Periodo: number;
	Disciplinas: Array<AtividadesDisciplina> = [];
}