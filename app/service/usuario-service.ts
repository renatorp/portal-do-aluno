import { Injectable }    from '@angular/core';
import { Usuario } from '../entity/usuario';

@Injectable()
export class UsuarioService {

	constructor() { }

	public isUsuarioProfessor(usuario: Usuario) :boolean {
		if (usuario != null && usuario.IdPerfil == 2) {
			return true;
		}
		return false;
	}

	public isUsuarioAluno(usuario: Usuario) :boolean {
		if (usuario != null && usuario.IdPerfil == 1) {
			return true;
		}
		return false;
	}
}