import { Component } from '@angular/core';
import { AlunoService } from '../service/aluno-service';
import { BasePage } from '../base/base';
import { HistoricoEscolar } from '../entity/historico-escolar';
import { Session } from '../session/session';
import { Str2DatePipe } from '../pipes/str2date-pipe';
import { Usuario } from '../entity/usuario';

@Component({
  templateUrl: 'app/historico-escolar/historico-escolar.html',
  directives: [BasePage],
  pipes: [Str2DatePipe]
})
export class HistoricoEscolarPortal  {
	listaHistorico: HistoricoEscolar[] = [];
	usuario: Usuario = null;

	constructor(private alunoService: AlunoService, private session: Session) {
		this.usuario = this.session.getCurrentUser();
		this.alunoService.getHistoricoEscolar(this.usuario.Id).then(listaHistorico => this.listaHistorico = listaHistorico);
	}

	public getDataAsDate(dateString: string): Date{
		return new Date(dateString);
	}
}