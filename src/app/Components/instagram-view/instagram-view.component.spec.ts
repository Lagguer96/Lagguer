import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramViewComponent } from './instagram-view.component';

describe('InstagramViewComponent', () => {
  let component: InstagramViewComponent;
  let fixture: ComponentFixture<InstagramViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstagramViewComponent]
    });
    fixture = TestBed.createComponent(InstagramViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
