import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { contentHeaders } from '../common/headers';
import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';
import { Atividade } from '../entity/atividade';
import { Usuario } from '../entity/usuario';
import { Boletim } from '../entity/boletim';
import { HistoricoEscolar } from '../entity/historico-escolar';
import { GradeCurricular } from '../entity/grade-curricular';
import { Session } from '../session/session';
import { RetificacaoFalta } from '../entity/retificacao-falta';

@Injectable()
export class AlunoService {

	constructor(private http: Http, private authHttp: AuthHttp, private session: Session) { }

	private baseUrl = 'https://sistemaacademico.azurewebsites.net/api/';
	private notasUrl = this.baseUrl + 'Boletins/$1';
	private historicoUrl = this.baseUrl + 'Alunos/$1/Historico';
	private solicitarRetifFaltaUrl = this.baseUrl + 'RetificacoesFalta';
	private gradeUrl = this.baseUrl + '/aluno/grade';
	private retificacaoFaltaUrl = this.baseUrl + 'RetificacoesFalta';

	getNotas(matricula :number): Promise<Boletim> {
	     return this.http.get(this.mountUrlWithParam(this.notasUrl, matricula), { headers: contentHeaders })
	     		.toPromise()
                .then(this.extractData)
                .catch(this.handleError);
	}

	getHistoricoEscolar(matriculaAluno :number): Promise<HistoricoEscolar[]> {
	     return this.http.get(this.mountUrlWithParam(this.historicoUrl, matriculaAluno), { headers: contentHeaders })
	     		.toPromise()
                .then(this.extractData)
                .catch(this.handleError);
	}

	getGradeCurricular(): Promise<GradeCurricular[]> {
	     return this.http.get(this.gradeUrl, { headers: contentHeaders })
	     		.toPromise()
                .then(this.extractData)
                .catch(this.handleError);
	}

	getRetificacoesFaltas(matriculaAluno :number): Promise<RetificacaoFalta[]> {
		return this.http.get(this.mountUrlWithParam(this.retificacaoFaltaUrl, matriculaAluno),{ headers: contentHeaders })
	     		.toPromise()
                .then(this.extractData)
                .catch(this.handleError);
	}

	solicitarRetificacaoFalta(solicitacao :RetificacaoFalta): Promise<RetificacaoFalta> {
    	return this.http
               .post(this.solicitarRetifFaltaUrl, JSON.stringify(solicitacao), { headers: contentHeaders })
               .toPromise()
               .then(res => res.json().data)
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