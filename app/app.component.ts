import { Component } from '@angular/core';
import { RouteConfig, ROUTER_PROVIDERS, RouterLink, Router } from '@angular/router-deprecated';
import { HomePortal } from './home/home';
import { LoginPortal } from './login/login';
import { LoggedInRouterOutlet } from './routing/logged-in-outlet';
import { LoginService } from './service/login-service';

@Component({
	selector: 'portal-aluno',
	template: `
		<h1>{{title}}</h1>
		<nav>
			<a [routerLink]="['Home']">Home</a>
			<a [routerLink]="['Login']">Login</a>
			<a href="" (click)="logout()">Logout</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['app/app.component.css'],
	directives: [LoggedInRouterOutlet, RouterLink],
	providers: [ROUTER_PROVIDERS, LoginService]
})
@RouteConfig([
  { path: '/',  redirectTo: ['/Home'] },
  { path: '/home',  name: 'Home',  component: HomePortal, useAsDefault: true },
  { path: '/login',  name: 'Login',  component: LoginPortal }
])
export class AppComponent {
	title = 'Portal do Aluno';

		constructor(public router: Router, private loginService: LoginService) {}

	  logout() {
	  		this.loginService.logout(() => this.router.navigateByUrl('/login'));
	  }
}