import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCupomProdutoComponent } from './cadastro-cupom-produto.component';

describe('CadastroCupomProdutoComponent', () => {
  let component: CadastroCupomProdutoComponent;
  let fixture: ComponentFixture<CadastroCupomProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCupomProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroCupomProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
