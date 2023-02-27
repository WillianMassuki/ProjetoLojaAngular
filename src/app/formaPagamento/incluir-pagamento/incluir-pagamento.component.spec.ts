import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirPagamentoComponent } from './incluir-pagamento.component';

describe('IncluirPagamentoComponent', () => {
  let component: IncluirPagamentoComponent;
  let fixture: ComponentFixture<IncluirPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirPagamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncluirPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
