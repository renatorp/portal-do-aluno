import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../service/aluno-service';
import { GradeCurricular } from '../entity/grade-curricular'
import { Session } from '../session/session';

@Component({
  templateUrl: 'app/grade-curricular/grade-curricular.html'
})
export class GradeCurricularPortal  implements OnInit {
	gradeCurricular: GradeCurricular = null;

	constructor(private alunoService: AlunoService, private session: Session) {}

	ngOnInit(){
		let user = this.session.getCurrentUser();
		if (user) {
			this.alunoService.getGradeCurricular(user.Id).then(gradeCurricular => this.gradeCurricular = gradeCurricular);
		}
	}
}