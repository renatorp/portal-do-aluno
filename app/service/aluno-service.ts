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

	private baseUrl = 'https://sistemaacademico.azurewebsites.net/api/';
	private notasUrl = this.baseUrl + '/aluno/nota';
	private historicoUrl = this.baseUrl + 'Alunos/$1/Historico';
	private gradeUrl = this.baseUrl + '/aluno/grade';

	getNotas(): Promise<Nota[]> {
	     return this.http.get(this.notasUrl)
	     		.toPromise()
                .then(this.extractData)
                .catch(this.handleError);
               	
               	/*.subscribe(
		          data => this.notas = data,
		          error => this.handleError(error.text())
		        );
		  return this.notas;*/
	}

	getHistoricoEscolar(idAluno :number): Promise<HistoricoEscolar[]> {
	     return this.http.get(this.mountUrlWithParam(this.historicoUrl, idAluno))
	     		.toPromise()
                .then(this.extractData)
                .catch(this.handleError);
	}

	getGradeCurricular(): Promise<GradeCurricular[]> {
	     return this.http.get(this.gradeUrl)
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

	private mountUrlWithParam(url :string, param :any) :string {
		return url.replace('$1', param);
	}
}