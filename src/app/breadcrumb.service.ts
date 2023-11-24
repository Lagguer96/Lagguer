import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private breadcrumb: { label: string; url: string }[] = [];

  getBreadcrumb(): { label: string; url: string }[] {
    return this.breadcrumb;
  }

  addBreadcrumb(label: string, url: string): void {
    this.breadcrumb.push({ label, url });
  }

  clearBreadcrumbs(): void {
    this.breadcrumb = [];
  }

}
