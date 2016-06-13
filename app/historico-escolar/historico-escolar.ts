import { Component } from '@angular/core';
import { AlunoService } from '../service/aluno-service';
import { BasePage } from '../base/base';
import { HistoricoEscolar } from '../entity/historico-escolar'

@Component({
  templateUrl: 'app/historico-escolar/historico-escolar.html',
  directives: [BasePage]
})
export class HistoricoEscolarPortal  {
	listaHistorico: HistoricoEscolar[] = [];

	constructor(private alunoService: AlunoService) {
		this.alunoService.getHistoricoEscolar().then(listaHistorico => this.listaHistorico = listaHistorico);
	}
}