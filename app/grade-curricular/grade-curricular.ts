import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../service/aluno-service';
import { BasePage } from '../base/base';
import { GradeCurricular } from '../entity/grade-curricular'
import { Session } from '../session/session';

@Component({
  templateUrl: 'app/grade-curricular/grade-curricular.html',
  directives: [BasePage]
})
export class GradeCurricularPortal  implements OnInit {
	gradeCurricular: GradeCurricular = null;

	constructor(private alunoService: AlunoService, private session: Session) {}

	ngOnInit(){
		let user = this.session.getCurrentUser();
		if (user && user.IdMatriculaAtual) {
			this.alunoService.getGradeCurricular(1).then(gradeCurricular => this.gradeCurricular = gradeCurricular);
		}
	}
}