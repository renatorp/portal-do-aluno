import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { contentHeaders } from '../common/headers';
import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';
import { OfertaDisciplina } from '../entity/oferta-disciplina';

@Injectable()
export class DisciplinaService {

	constructor(private http: Http, private authHttp: AuthHttp) { }

	private baseUrl = 'https://sistemaacademico.azurewebsites.net/api/';
	private disciplinasUrl = this.baseUrl + 'Disciplinas/Matricula/$1';
	
	getDisciplinasByMatricula(matricula :number): Promise<OfertaDisciplina[]> {
	     return this.http.get(this.mountUrlWithParam(this.disciplinasUrl, matricula), { headers: contentHeaders })
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