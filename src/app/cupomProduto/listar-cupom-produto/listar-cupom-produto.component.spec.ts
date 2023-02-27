import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCupomProdutoComponent } from './listar-cupom-produto.component';

describe('ListarCupomProdutoComponent', () => {
  let component: ListarCupomProdutoComponent;
  let fixture: ComponentFixture<ListarCupomProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCupomProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCupomProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
