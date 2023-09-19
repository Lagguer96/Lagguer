import { Component, NgModule, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map } from 'rxjs';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    // ... otros imports ...
    MatSidenavModule,
  ],
  // ... otros configuraciones ...
})
export class AppModule { }

@Component({
  selector: 'app-sidebar-view',
  templateUrl: './sidebar-view.component.html',
  styleUrls: ['./sidebar-view.component.css']
})
export class SidebarViewComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  isSidenavOpen = false; // Inicialmente, la barra lateral está abierta

  // Método para abrir o cerrar la barra lateral
  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
