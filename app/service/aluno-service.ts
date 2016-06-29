import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { contentHeaders } from '../common/headers';
import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';
import { Atividade } from '../entity/atividade';
import { Boletim } from '../entity/boletim';
import { HistoricoEscolar } from '../entity/historico-escolar';
import { GradeCurricular } from '../entity/grade-curricular';
import { RetificacaoFalta } from '../entity/retificacao-falta';

@Injectable()
export class AlunoService {

	constructor(private http: Http, private authHttp: AuthHttp) { }

	private baseUrl = 'https://sistemaacademico.azurewebsites.net/api/';
	private notasUrl = this.baseUrl + 'Boletins/$1';
	private historicoUrl = this.baseUrl + 'Alunos/$1/Historico';
	private gradeUrl = this.baseUrl + 'Alunos/MinhaGradeCurricular';

	getNotas(matricula :number): Promise<Boletim> {
	     return this.authHttp.get(this.mountUrlWithParam(this.notasUrl, matricula), { headers: contentHeaders })
	     		.toPromise()
                .then(this.extractData)
                .catch(this.handleError);
	}

	getHistoricoEscolar(matriculaAluno :number): Promise<HistoricoEscolar[]> {
	     return this.authHttp.get(this.mountUrlWithParam(this.historicoUrl, matriculaAluno), { headers: contentHeaders })
	     		.toPromise()
                .then(this.extractData)
                .catch(this.handleError);
	}

	getGradeCurricular(idAluno :number): Promise<GradeCurricular> {
	     return this.authHttp.get(this.mountUrlWithParam(this.gradeUrl), { headers: contentHeaders })
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
		if (param) {
			return url.replace('$1', param);
		}
		return url;
	}
}