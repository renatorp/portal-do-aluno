import { Component } from '@angular/core';
import { AlunoService } from '../service/aluno-service';
import { BasePage } from '../base/base';
import { Nota } from '../entity/nota';

@Component({
  templateUrl: 'app/notas/notas.html',
  directives: [BasePage]
})
export class NotasPortal  {
	notas: Nota[] = [];

	constructor(private alunoService: AlunoService) {
		this.alunoService.getNotas().then(notas => this.notas = notas);
	}
}