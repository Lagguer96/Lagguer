import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { MaintenancePageComponent } from './maintenance-page/maintenance-page.component';
import { SidebarViewComponent } from './sidebar-view/sidebar-view.component';


@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    PaginaPrincipalComponent,
    MaintenancePageComponent,
    SidebarViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
