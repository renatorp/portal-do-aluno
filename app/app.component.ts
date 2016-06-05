import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


@Component({
	selector: 'portal-aluno',
	template: `
		<h1>{{title}}</h1>
		<nav>
			<a>Home</a>
			<a>Heroes</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS]
})
@RouteConfig([])
export class AppComponent {
	title = 'Portal do Aluno';
}
/*
 {
          path: '/dashboard',
          name: 'Dashboard',
          component: DashboardComponent,
          useAsDefault: true
        }
<a [routerLink]="['Dashboard']">Dashboard</a>
*/
