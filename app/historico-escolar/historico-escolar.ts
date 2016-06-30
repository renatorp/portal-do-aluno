import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../service/aluno-service';
import { HistoricoEscolar } from '../entity/historico-escolar';
import { Session } from '../session/session';
import { Usuario } from '../entity/usuario';

@Component({
  templateUrl: 'app/historico-escolar/historico-escolar.html',
})
export class HistoricoEscolarPortal implements OnInit {
	listaHistorico: HistoricoEscolar[] = [];
	usuario: Usuario = null;

	constructor(private alunoService: AlunoService, private session: Session) {}

	public getDataAsDate(dateString: string): Date{
		return new Date(dateString);
	}

	ngOnInit() {
	    this.usuario = this.session.getCurrentUser();
	    if (this.usuario && this.usuario.Id) {
			this.alunoService.getHistoricoEscolar(this.usuario.Id).then(listaHistorico => this.listaHistorico = listaHistorico);
	    }
    }
}