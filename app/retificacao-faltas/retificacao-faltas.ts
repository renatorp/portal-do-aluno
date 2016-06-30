import { Component, OnInit } from '@angular/core';
import { RetificacaoFaltasService } from '../service/retificacao-faltas-service';
import { UsuarioService } from '../service/usuario-service';
import { Str2DatePipe } from '../pipes/str2date-pipe';
import { Session } from '../session/session';
import { RetificacaoFalta } from '../entity/retificacao-falta';
import { Usuario } from '../entity/usuario';
import { Router } from '@angular/router-deprecated';

@Component({
  templateUrl: 'app/retificacao-faltas/retificacao-faltas.html',
  pipes: [Str2DatePipe],
  providers: [RetificacaoFaltasService]
})
export class RetificacaoFaltasPortal implements OnInit {

	listaRetificacao: RetificacaoFalta[] = [];
	usuario: Usuario = null;

	constructor(private retificacaoFaltasService: RetificacaoFaltasService, 
				private usuarioService: UsuarioService, 
				private session: Session,
				private router: Router) {
		this.usuario = this.session.getCurrentUser();
	}

	ngOnInit(){
		let user = this.session.getCurrentUser();
		if (user && user.IdMatriculaAtual && this.isUsuarioAluno()) {

		this.retificacaoFaltasService
		.getRetificacoesFaltasByMatricula(user.IdMatriculaAtual)
		.then(listaRetificacao => {
				this.listaRetificacao = listaRetificacao
						.filter(item => this.isExibirRegistro(item));
			}
		);

		} else {
			if (this.isUsuarioProfessor()) {
				this.retificacaoFaltasService.getTodasSolicitacoes().then(
				listaRetificacao => this.listaRetificacao = listaRetificacao
			);	
			}

		}
	}

	public isUsuarioProfessor(): boolean {
        return this.usuarioService.isUsuarioProfessor(this.usuario);
    }

    public isUsuarioAluno(): boolean {
        return this.usuarioService.isUsuarioAluno(this.usuario);
    }

    public isExibirRegistro(ret :RetificacaoFalta): boolean {
    	if (ret) {

	    	if (this.isUsuarioProfessor()) {
	    		return true;
	    	}

	    	if (this.usuario != null && this.usuario.IdMatriculaAtual == ret.IdMatricula) {
	    		return true;
	    	}

	    }
    	return false;
    }

    public criarNovaSolicitacao() {
    	if (this.isUsuarioAluno()) {
    		this.router.parent.navigate(['RetifFaltasCreateAluno']);
    	} 
    }

    public acessarRetificacao(retItem: RetificacaoFalta) {
    	if (this.isUsuarioProfessor()) {
    		this.router.parent.navigate(['RetifFaltasEditProf', {id: retItem.Id}]);
    	} 	
    }

}