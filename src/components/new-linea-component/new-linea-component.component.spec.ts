import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLineaComponentComponent } from './new-linea-component.component';

describe('NewLineaComponentComponent', () => {
  let component: NewLineaComponentComponent;
  let fixture: ComponentFixture<NewLineaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLineaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLineaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
