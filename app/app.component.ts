import { Component, OnInit } from '@angular/core';
import { Usuario } from './entity/usuario';
import { Session } from './session/session';
import { RouteConfig, ROUTER_PROVIDERS, RouterLink, Router } from '@angular/router-deprecated';
import { HomePortal } from './home/home';
import { LoginPortal } from './login/login';
import { NotasPortal } from './notas/notas';
import { RetificacaoFaltasPortal } from './retificacao-faltas/retificacao-faltas';
import { HistoricoEscolarPortal } from './historico-escolar/historico-escolar';
import { GradeCurricularPortal } from './grade-curricular/grade-curricular';
import { RetifFaltasCreateAlunoPortal } from './retificacao-faltas/retif-faltas-create-aluno';
import { RetifFaltasEditProfPortal } from './retificacao-faltas/retif-faltas-edit-prof';
import { LoggedInRouterOutlet } from './routing/logged-in-outlet';
import { LoginService } from './service/login-service';
import { AlunoService } from './service/aluno-service';
import { UsuarioService } from './service/usuario-service';
import { DisciplinaService } from './service/disciplina-service';

@Component({
	selector: 'portal-aluno',
  templateUrl: 'app/app.component.html',
	directives: [LoggedInRouterOutlet, RouterLink],
	providers: [ROUTER_PROVIDERS, 
              LoginService, 
              AlunoService, 
              UsuarioService, 
              DisciplinaService]
})
@RouteConfig([
  { path: '/',  redirectTo: ['/Home'] },
  { path: '/home',  name: 'Home',  component: HomePortal, useAsDefault: true },
  { path: '/login',  name: 'Login',  component: LoginPortal },
  { path: '/notas',  name: 'Notas',  component: NotasPortal },
  { path: '/historico',  name: 'HistoricoEscolar',  component: HistoricoEscolarPortal },
  { path: '/grade',  name: 'GradeCurricular',  component: GradeCurricularPortal },
  { path: '/retificacao',  name: 'RetificacaoFaltas',  component: RetificacaoFaltasPortal },
  { path: '/retificacao/aprovar',name: 'RetifFaltasEditProf',  component: RetifFaltasEditProfPortal },
  {path:'/retificacao/criar',name:'RetifFaltasCreateAluno',component: RetifFaltasCreateAlunoPortal}
])
export class AppComponent implements OnInit {

   title = 'Portal do Aluno';

    constructor(private router: Router, private loginService: LoginService, private session: Session, private usuarioService: UsuarioService) {}

    ngOnInit() {
      let user = this.session.getCurrentUser();

      if (user == null || user.IdPerfil == null) {
        this.logout();
      }

    }

    logout() {
        this.loginService.logout(() => this.router.navigateByUrl('/login'));
    }

    isRouterActive(path :string): boolean {
        return this.router.isRouteActive(this.router.generate([path]));
    }

    public isUsuarioAluno(): boolean {
        return this.usuarioService.isUsuarioAluno(this.session.getCurrentUser());
    }
}