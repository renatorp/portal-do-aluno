import { Component } from '@angular/core';
import { AlunoService } from '../service/aluno-service';
import { BasePage } from '../base/base';
import { GradeCurricular } from '../entity/grade-curricular'

@Component({
  templateUrl: 'app/grade-curricular/grade-curricular.html',
  directives: [BasePage]
})
export class GradeCurricularPortal  {
	listaGradeCurricular: GradeCurricular[] = [];

	constructor(private alunoService: AlunoService) {
		this.alunoService.getGradeCurricular().then(listaGradeCurricular => this.listaGradeCurricular = listaGradeCurricular);
	}
}