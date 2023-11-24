import { Component, inject, ViewChild, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { BreadcrumbService } from '../../breadcrumb.service';
// import { tslib } from ;

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './principal-format.component.html',
  styleUrls: ['./principal-format.component.css']
})

export class PrincipalFormatComponent implements OnInit{

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    // Agregar migas de pan específicas para esta página
    this.breadcrumbService.clearBreadcrumbs();
    this.breadcrumbService.addBreadcrumb('Inicio', '/');
    this.breadcrumbService.addBreadcrumb('Página', '/pagina');
  }
}
