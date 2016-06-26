import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { AlunoService } from '../service/aluno-service';
import { UsuarioService } from '../service/usuario-service';
import { BasePage } from '../base/base';
import { Session } from '../session/session';
import { RetificacaoFalta } from '../entity/retificacao-falta';
import { Usuario } from '../entity/usuario';

declare var jQuery:any;

@Component({
  templateUrl: 'app/retificacao-faltas/retif-faltas-create-aluno.html',
  directives: [BasePage]
})
export class  RetifFaltasCreateAlunoPortal implements OnInit {

	retFalta: RetificacaoFalta = new RetificacaoFalta();
	usuario: Usuario = null;
	error: any;


	constructor(
		private alunoService: AlunoService, 
		private usuarioService: UsuarioService, 
		private session: Session,
		private router: Router,
		private elementRef: ElementRef
	) {
		this.usuario = this.session.getCurrentUser();
	}

	ngOnInit(){
		if (!this.isUsuarioAluno()) {
			this.router.navigate(['Home']);
		}

		jQuery(this.elementRef.nativeElement).find('#datePicker').datepicker({
            format: 'dd/mm/yyyy'
        });
	}

	public isUsuarioAluno(): boolean {
        return this.usuarioService.isUsuarioAluno(this.usuario);
    }

    public salvarSolicitacao() {
    	this.alunoService.solicitarRetificacaoFalta(this.retFalta)
        	.then(retificacaoFalta => {
          		this.voltar();
        	})
        .catch(error => this.error = error); // TODO: Display error message
  	}

  	public voltar() {
    	window.history.back();
  }

}