import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../service/aluno-service';
import { UsuarioService } from '../service/usuario-service';
import { BasePage } from '../base/base';
import { Str2DatePipe } from '../pipes/str2date-pipe';
import { Session } from '../session/session';
import { RetificacaoFalta } from '../entity/retificacao-falta';
import { Usuario } from '../entity/usuario';

@Component({
  templateUrl: 'app/retificacao-faltas/retificacao-faltas.html',
  directives: [BasePage],
  pipes: [Str2DatePipe]
})
export class RetificacaoFaltasPortal implements OnInit {

	listaRetificacao: RetificacaoFalta[] = [];
	usuario: Usuario = null;

	constructor(private alunoService: AlunoService, private usuarioService: UsuarioService, private session: Session) {
		this.usuario = this.session.getCurrentUser();
	}

	ngOnInit(){
		let user = this.session.getCurrentUser();
		if (user && user.IdMatriculaAtual) {
			this.alunoService.getRetificacoesFaltas(user.IdMatriculaAtual).then(
				listaRetificacao => {
					if (this.isUsuarioProfessor()) {
						this.listaRetificacao = listaRetificacao;
					} else {
						this.listaRetificacao = listaRetificacao.filter(item => this.isExibirRegistro(item));
					}
				}
			);
		}
	}

	public isUsuarioProfessor(): boolean {
        return this.usuarioService.isUsuarioProfessor(this.usuario);
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

}