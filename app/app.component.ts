import { Component } from '@angular/core';
import { RouteConfig, ROUTER_PROVIDERS, RouterLink, Router } from '@angular/router-deprecated';
import { HomePortal } from './home/home';
import { LoginPortal } from './login/login';
import { NotasPortal } from './notas/notas';
import { RetificacaoFaltasPortal } from './retificacao-faltas/retificacao-faltas';
import { HistoricoEscolarPortal } from './historico-escolar/historico-escolar';
import { GradeCurricularPortal } from './grade-curricular/grade-curricular';
import { RetifFaltasCreateAlunoPortal } from './retificacao-faltas/retif-faltas-create-aluno';
import { LoggedInRouterOutlet } from './routing/logged-in-outlet';
import { LoginService } from './service/login-service';
import { AlunoService } from './service/aluno-service';
import { UsuarioService } from './service/usuario-service';

@Component({
	selector: 'portal-aluno',
	template: `
		<router-outlet></router-outlet>
	`,
	directives: [LoggedInRouterOutlet, RouterLink],
	providers: [ROUTER_PROVIDERS, LoginService, AlunoService, UsuarioService]
})
@RouteConfig([
  { path: '/',  redirectTo: ['/Home'] },
  { path: '/home',  name: 'Home',  component: HomePortal, useAsDefault: true },
  { path: '/login',  name: 'Login',  component: LoginPortal },
  { path: '/notas',  name: 'Notas',  component: NotasPortal },
  { path: '/historico',  name: 'HistoricoEscolar',  component: HistoricoEscolarPortal },
  { path: '/grade',  name: 'GradeCurricular',  component: GradeCurricularPortal },
  { path: '/retificacao',  name: 'RetificacaoFaltas',  component: RetificacaoFaltasPortal },
  //{ path: '/retificacao/aprovar',name: 'RetifFaltasEditProf',  component: RetifFaltasEditProfPortal },
  {path:'/retificacao/criar',name:'RetifFaltasCreateAluno',component: RetifFaltasCreateAlunoPortal}
])
export class AppComponent {
	constructor(private router: Router) {}
}
