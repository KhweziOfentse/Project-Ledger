import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-ledger';

  constructor(private router: Router) {}

  isAuthPage(): boolean {
    return ['/', '/login', '/register'].includes(this.router.url);
  }
}
