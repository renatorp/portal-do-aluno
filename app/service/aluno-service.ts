import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { contentHeaders } from '../common/headers';
import 'rxjs/add/operator/toPromise';

import { Atividade } from '../entity/atividade';
import { Nota } from '../entity/nota';

@Injectable()
export class AlunoService {

	constructor(private http: Http) { }

	private notasUrl = 'http://localhost:3001/aluno/nota';

	getNotas() {
	     return this.http.get(this.notasUrl)
               .subscribe(
		          response => console.log(response.text()),
		          error => this.response = error.text()
		        );
	}

	private handleError(error: any) {
	    console.error('Ocorreu um erro!!', error);
	    return Promise.reject(error.message || error);
	}
}