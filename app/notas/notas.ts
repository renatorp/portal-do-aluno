import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../service/aluno-service';
import { BasePage } from '../base/base';
import { Boletim } from '../entity/boletim';
import { Str2DatePipe } from '../pipes/str2date-pipe';
import { Session } from '../session/session';

@Component({
  templateUrl: 'app/notas/notas.html',
  directives: [BasePage],
  pipes: [Str2DatePipe]
})
export class NotasPortal implements OnInit {
	boletim: Boletim = null;

	constructor(private alunoService: AlunoService, private session: Session) {}

	ngOnInit(){
		let user = this.session.getCurrentUser();
		if (user && user.IdMatriculaAtual) {
			this.alunoService.getNotas(user.IdMatriculaAtual).then(
				boletim => this.boletim = boletim
			);
		}
	}
}