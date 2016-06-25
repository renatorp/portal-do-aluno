import { NotaDisciplina } from './nota-disciplina';

export class HistoricoEscolar {
	Id: number;
	Periodo: number;
	NotaDisciplinas: Array<NotaDisciplina> = [];
}	