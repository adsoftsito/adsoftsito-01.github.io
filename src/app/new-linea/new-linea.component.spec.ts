import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLineaComponent } from './new-linea.component';

describe('NewLineaComponent', () => {
  let component: NewLineaComponent;
  let fixture: ComponentFixture<NewLineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLineaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
