import { Component } from '@angular/core';
import { RouteConfig, ROUTER_PROVIDERS, RouterLink, Router } from '@angular/router-deprecated';
import { HomePortal } from './home/home';
import { LoginPortal } from './login/login';
import { LoggedInRouterOutlet } from './routing/logged-in-outlet'

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
	providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/',  redirectTo: ['/Home'] },
  { path: '/home',  name: 'Home',  component: HomePortal, useAsDefault: true },
  { path: '/login',  name: 'Login',  component: LoginPortal }
])
export class AppComponent {
	title = 'Portal do Aluno';

		constructor(public router: Router) {}

	  logout() {
	    // Method to be called when the user wants to logout
	    // Logging out means just deleting the JWT from localStorage and redirecting the user to the Login page
	    localStorage.removeItem('jwt');
	    this.router.navigateByUrl('/login');
	  }
}