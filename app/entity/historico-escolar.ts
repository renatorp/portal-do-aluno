import { DisciplinaAtividade } from './disciplina-atividade';

export class HistoricoEscolar {
	Id: number;
	Periodo: number;
	Disciplinas: Array<DisciplinaAtividade> = [];
}	