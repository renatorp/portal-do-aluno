import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { RetificacaoFaltasService } from '../service/retificacao-faltas-service';
import { UsuarioService } from '../service/usuario-service';
import { DisciplinaService } from '../service/disciplina-service';
import { Session } from '../session/session';
import { RetificacaoFalta } from '../entity/retificacao-falta';
import { Usuario } from '../entity/usuario';
import { OfertaDisciplina } from '../entity/oferta-disciplina';

declare var jQuery:any;

@Component({
  templateUrl: 'app/retificacao-faltas/retif-faltas-create-aluno.html',
  providers: [RetificacaoFaltasService]
})
export class  RetifFaltasCreateAlunoPortal implements OnInit {

	@Input() retFalta: RetificacaoFalta = new RetificacaoFalta();
	usuario: Usuario = null;
	error: any;
	disciplinas: OfertaDisciplina[] = [];


	constructor(
		private retificacaoFaltasService: RetificacaoFaltasService, 
		private usuarioService: UsuarioService, 
		private session: Session,
		private router: Router,
		private elementRef: ElementRef,
		private disciplinaService: DisciplinaService
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

        if (this.usuario && this.usuario.IdMatriculaAtual) {
        	this.disciplinaService.getDisciplinasByMatricula(this.usuario.IdMatriculaAtual).then(
				disciplinas => this.disciplinas = disciplinas
			);
        }

	}

	public isUsuarioAluno(): boolean {
        return this.usuarioService.isUsuarioAluno(this.usuario);
    }

    public criarSolicitacao() {
    	
    	if (this.validarDados()) {
    		this.retFalta.IdMatricula = this.usuario.IdMatriculaAtual;

	    	this.retificacaoFaltasService.solicitarRetificacaoFalta(this.retFalta)
	        	.then(retificacaoFalta => {
	          		this.voltar();
	        	})
	        .catch(error => alert('Ocorreu um erro:' + error)); // TODO: Display error message
	    	
    	}

  	}

  	private validarDados() {
  		if (this.retFalta.DataFalta == null || this.retFalta.IdOferta == null || this.retFalta.Justificativa == null) {
  			alert("Todos os campos são obrigatórios!");
  			return false;
  		}

  		return true;

  	}

  	public voltar() {
    	this.router.parent.navigate(['RetificacaoFaltas']);
  	}

}