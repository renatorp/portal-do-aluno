import { Component } from '@angular/core';
import { RouteConfig, ROUTER_PROVIDERS, RouterLink, Router} from '@angular/router-deprecated';
import { LoggedInRouterOutlet } from '../routing/logged-in-outlet';
import { LoginService } from '../service/login-service';

@Component({
  selector: 'base',
  templateUrl: 'app/base/base.html',
  directives: [LoggedInRouterOutlet, RouterLink]
})
export class BasePage {

	 title = 'Portal do Aluno';

    constructor(private router: Router, private loginService: LoginService) {
    }

    logout() {
        this.loginService.logout(() => this.router.navigateByUrl('/login'));
    }

    isRouterActive(path :string): boolean {
        return this.router.parent.isRouteActive(this.router.generate([path]));
    }
}