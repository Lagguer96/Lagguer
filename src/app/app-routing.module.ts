import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { MaintenancePageComponent } from './maintenance-page/maintenance-page.component';
import { SidebarViewComponent } from './sidebar-view/sidebar-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/pagina-principal', pathMatch: 'full' },
  { path: 'pagina-principal', component: PaginaPrincipalComponent },
  { path: 'information', component: InformationComponent },
  { path: 'siderbar-view', component: SidebarViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
