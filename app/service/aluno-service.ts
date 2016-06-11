import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { contentHeaders } from '../common/headers';
import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';
import { Atividade } from '../entity/atividade';
import { Nota } from '../entity/nota';

@Injectable()
export class AlunoService {

	constructor(private http: Http, public authHttp: AuthHttp) { }

	private notasUrl = 'http://localhost:3001/api/protected/aluno/nota';

	getNotas(): Promise<Nota[]> {
	     return this.authHttp.get(this.notasUrl)
	     		.toPromise()
                .then(this.extractData)
                .catch(this.handleError);
               	
               	/*.subscribe(
		          data => this.notas = data,
		          error => this.handleError(error.text())
		        );
		  return this.notas;*/
	}

	private handleError(error: any) {
	    console.error('Ocorreu um erro!!', error);
	    return Promise.reject(error.message || error);
	}

	private extractData(res: Response) {
	  return res.json();
	  //return body.data || { };
	}
}