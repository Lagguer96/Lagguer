import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './Components/information/information.component';
import { PrincipalFormatComponent } from './Components/principal-format/principal-format.component';
import { MaintenancePageComponent } from './Components/maintenance-page/maintenance-page.component';
import { SidebarViewComponent } from './Components/sidebar-view/sidebar-view.component';
import { HomeComponent } from './Components/home/home.component';
import { InstagramViewComponent } from './Components/instagram-view/instagram-view.component';	
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  // { path: '', redirectTo: '/principal-format', pathMatch: 'full' },
  { path: 'pagina-principal', component: PrincipalFormatComponent },
  { path: 'information', component: InformationComponent },
  { path: 'siderbar-view', component: SidebarViewComponent },
  { path: 'maintenance-page', component: MaintenancePageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'instagram-view', component: InstagramViewComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
