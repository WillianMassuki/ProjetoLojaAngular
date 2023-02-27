import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCupomComponent } from './listar-cupom.component';

describe('ListarCupomComponent', () => {
  let component: ListarCupomComponent;
  let fixture: ComponentFixture<ListarCupomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCupomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCupomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
