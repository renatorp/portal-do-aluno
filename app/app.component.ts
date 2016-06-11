import { Component } from '@angular/core';
import { RouteConfig, ROUTER_PROVIDERS, RouterLink, Router } from '@angular/router-deprecated';
import { HomePortal } from './home/home';
import { LoginPortal } from './login/login';
import { NotasPortal } from './notas/notas';
import { LoggedInRouterOutlet } from './routing/logged-in-outlet';
import { LoginService } from './service/login-service';
import { AlunoService } from './service/aluno-service';

@Component({
	selector: 'portal-aluno',
	template: `
		<router-outlet></router-outlet>
	`,
	directives: [LoggedInRouterOutlet, RouterLink],
	providers: [ROUTER_PROVIDERS, LoginService, AlunoService]
})
@RouteConfig([
  { path: '/',  redirectTo: ['/Home'] },
  { path: '/home',  name: 'Home',  component: HomePortal, useAsDefault: true },
  { path: '/login',  name: 'Login',  component: LoginPortal },
  { path: '/notas',  name: 'Notas',  component: NotasPortal }
])
export class AppComponent {
	constructor(private router: Router) {}
}