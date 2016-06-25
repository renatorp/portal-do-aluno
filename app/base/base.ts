import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_PROVIDERS, RouterLink, Router} from '@angular/router-deprecated';
import { LoggedInRouterOutlet } from '../routing/logged-in-outlet';
import { LoginService } from '../service/login-service';
import { Session } from '../session/session';
import { Usuario } from '../entity/usuario';
import { UsuarioService } from '../service/usuario-service';

@Component({
  selector: 'base',
  templateUrl: 'app/base/base.html',
  directives: [LoggedInRouterOutlet, RouterLink]
})
export class BasePage implements OnInit{

	 title = 'Portal do Aluno';
   user: Usuario = null;

    constructor(private router: Router, private loginService: LoginService, private session: Session, private usuarioService: UsuarioService) {}

    ngOnInit() {
      this.user = this.session.getCurrentUser();

      if (this.user == null || this.user.IdPerfil == null) {
        this.logout();
      }

    }

    logout() {
        this.loginService.logout(() => this.router.navigateByUrl('/login'));
    }

    isRouterActive(path :string): boolean {
        return this.router.parent.isRouteActive(this.router.generate([path]));
    }

    public isUsuarioAluno(): boolean {
        return this.usuarioService.isUsuarioAluno(this.user);
    }
}