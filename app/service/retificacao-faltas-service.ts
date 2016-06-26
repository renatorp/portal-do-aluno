import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { contentHeaders } from '../common/headers';
import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';
import { RetificacaoFalta } from '../entity/retificacao-falta';

@Injectable()
export class RetificacaoFaltasService {

	constructor(private http: Http, private authHttp: AuthHttp) { }

	private baseUrl = 'https://sistemaacademico.azurewebsites.net/api/';
	private buscarSolicitacoesUrl = this.baseUrl + 'RetificacoesFalta';
	private aprovarRetificacaoUrl = this.baseUrl + 'RetificacoesFalta/$1/Aprovar';
	private rejeitarRetificacaoUrl = this.baseUrl + 'RetificacoesFalta/$1/Rejeitar';
	private solicitarRetifFaltaUrl = this.baseUrl + 'RetificacoesFalta';
	private retificacaoFaltaUrl = this.baseUrl + 'RetificacoesFalta';	
	private buscaRetificacao = this.baseUrl + 'RetificacoesFalta/$1';


	aprovarRetificacao(retificacao: RetificacaoFalta): Promise<void> {
	     return this.http.put(this.mountUrlWithParam(this.aprovarRetificacaoUrl, retificacao.Id), JSON.stringify(retificacao),  { headers: contentHeaders })
	     		.toPromise()
                .then(function(res){})
                .catch(this.handleError);
	}

	rejeitarRetificacao(retificacao: RetificacaoFalta): Promise<void> {
	     return this.http.put(this.mountUrlWithParam(this.rejeitarRetificacaoUrl, retificacao.Id), JSON.stringify(retificacao), { headers: contentHeaders })
	     		.toPromise()
                .then(function(res){})
                .catch(this.handleError);
	}

	getRetificacaoFaltasById(idRetificacao: number): Promise<RetificacaoFalta> {
		return this.http.get(this.mountUrlWithParam(this.buscaRetificacao, idRetificacao), { headers: contentHeaders })
	     		.toPromise()
                .then(this.extractData)
                .catch(this.handleError);

                /*return new Promise<RetificacaoFalta>(function(resolve, reject){

                	let todasSolicitacoes = null;
                	this.getTodasSolicitacoes().then(all => todasSolicitacoes = all);

                	if (todasSolicitacoes.length > 0) {
                		let solicitacao = todasSolicitacoes.filter(item => item.Id == idRetificacao)[0];
                		if (solicitacao) {
                			resolve(solicitacao);
                		}
                	}

                	reject('Solicitação não foi encontrada!');
                }); */
	}

	getTodasSolicitacoes(): Promise<RetificacaoFalta[]> {
		return this.http.get(this.buscarSolicitacoesUrl,{ headers: contentHeaders })
	     		.toPromise()
                .then(this.extractData)
                .catch(this.handleError);
	}

	getRetificacoesFaltasByMatricula(matriculaAluno :number): Promise<RetificacaoFalta[]> {
		return this.http.get(this.mountUrlWithParam(this.retificacaoFaltaUrl, matriculaAluno),{ headers: contentHeaders })
	     		.toPromise()
                .then(this.extractData)
                .catch(this.handleError);
	}

	solicitarRetificacaoFalta(solicitacao :RetificacaoFalta): Promise<RetificacaoFalta> {
		
    	return this.http
               .post(this.solicitarRetifFaltaUrl, JSON.stringify({
               		"IdMatricula": solicitacao.IdMatricula,
				    "IdOferta": solicitacao.IdOferta,
				    "DataFalta": new Date(solicitacao.DataFalta.split("-").join("/")),
				    "Justificativa": solicitacao.Justificativa
               }), { headers: contentHeaders })
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