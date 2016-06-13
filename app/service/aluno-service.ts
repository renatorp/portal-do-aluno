import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { contentHeaders } from '../common/headers';
import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';
import { Atividade } from '../entity/atividade';
import { Nota } from '../entity/nota';
import { HistoricoEscolar } from '../entity/historico-escolar';
import { GradeCurricular } from '../entity/grade-curricular';
@Injectable()
export class AlunoService {

	constructor(private http: Http, public authHttp: AuthHttp) { }

	private baseUrl = 'http://localhost:3001/api/protected';
	private notasUrl = this.baseUrl + '/aluno/nota';
	private historicoUrl = this.baseUrl + '/aluno/historico';
	private gradeUrl = this.baseUrl + '/aluno/grade';

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

	getHistoricoEscolar(): Promise<HistoricoEscolar[]> {
	     return this.authHttp.get(this.historicoUrl)
	     		.toPromise()
                .then(this.extractData)
                .catch(this.handleError);
	}

	getGradeCurricular(): Promise<GradeCurricular[]> {
	     return this.authHttp.get(this.gradeUrl)
	     		.toPromise()
                .then(this.extractData)
                .catch(this.handleError);
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