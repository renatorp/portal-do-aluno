import { Component, OnInit, Input } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';
import { UsuarioService } from '../service/usuario-service';
import { RetificacaoFaltasService } from '../service/retificacao-faltas-service';
import { BasePage } from '../base/base';
import { Session } from '../session/session';
import { RetificacaoFalta } from '../entity/retificacao-falta';
import { Usuario } from '../entity/usuario';

@Component({
  templateUrl: 'app/retificacao-faltas/retif-faltas-edit-prof.html',
  directives: [BasePage],
  providers: [RetificacaoFaltasService]
})
export class  RetifFaltasEditProfPortal implements OnInit {

	@Input() retFalta: RetificacaoFalta;
	usuario: Usuario = null;
	error: any;

	constructor(
		private usuarioService: UsuarioService, 
		private session: Session,
		private router: Router,
		private routeParams: RouteParams,
		private retificacaoFaltasService: RetificacaoFaltasService
	) {
		this.usuario = this.session.getCurrentUser();
	}

	ngOnInit(){

		let id = +this.routeParams.get('id');
		if (!this.isUsuarioProfessor() || !id) {
			this.router.navigate(['Home']);
		}

		this.retificacaoFaltasService.getRetificacaoFaltasById(id).then(
			retificacaoFalta => this.retFalta = retificacaoFalta
		);
	}

	public isUsuarioProfessor(): boolean {
        return this.usuarioService.isUsuarioProfessor(this.usuario);
    }

    public aprovarRetificacao() {
	
    	this.retificacaoFaltasService.aprovarRetificacao(this.retFalta)
        	.then(retificacaoFalta => {
          		this.voltar();
        	})
        .catch(error => alert('Ocorreu um erro:' + error)); 
  	}

  	public rejeitarRetificacao() {
	
    	this.retificacaoFaltasService.rejeitarRetificacao(this.retFalta)
        	.then(retificacaoFalta => {
          		this.voltar();
        	})
        .catch(error => alert('Ocorreu um erro:' + error)); 
  	}

  	public voltar() {
    	this.router.parent.navigate(['RetificacaoFaltas']);
  	}

}