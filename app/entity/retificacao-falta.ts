import { Disciplina } from './disciplina';

export class RetificacaoFalta {
	Id :number;
	IdMatricula :number;
	IdOferta :number;
	NomeAluno :string;
	Disciplina :Disciplina;
	DataFalta :string;
	Justificativa :string;
	IdStatus :number;
	NomeStatus :string;
	DataRequisicao :string;
}