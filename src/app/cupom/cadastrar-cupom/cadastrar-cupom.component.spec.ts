import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCupomComponent } from './cadastrar-cupom.component';

describe('CadastrarCupomComponent', () => {
  let component: CadastrarCupomComponent;
  let fixture: ComponentFixture<CadastrarCupomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarCupomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarCupomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
