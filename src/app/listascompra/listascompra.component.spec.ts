import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListascompraComponent } from './listascompra.component';

describe('ListascompraComponent', () => {
  let component: ListascompraComponent;
  let fixture: ComponentFixture<ListascompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListascompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListascompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
