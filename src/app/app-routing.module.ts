import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
//import { MaintenancePageComponent } from './maintenance-page/maintenance-page.component';

const routes: Routes = [
  { path: 'information', component: InformationComponent },
  { path: 'pagina-principal', component: PaginaPrincipalComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
