import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './Components/information/information.component';
import { PaginaPrincipalComponent } from './Components/pagina-principal/pagina-principal.component';
import { MaintenancePageComponent } from './Components/maintenance-page/maintenance-page.component';
import { SidebarViewComponent } from './Components/sidebar-view/sidebar-view.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  // { path: '', redirectTo: '/pagina-principal', pathMatch: 'full' },
  { path: 'pagina-principal', component: PaginaPrincipalComponent },
  { path: 'information', component: InformationComponent },
  { path: 'siderbar-view', component: SidebarViewComponent },
  { path: 'maintenance-page', component: MaintenancePageComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
