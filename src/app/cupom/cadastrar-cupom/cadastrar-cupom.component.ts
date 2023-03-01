import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Cupom } from '../Cupom';
import { CupomService } from '../CupomService';

@Component({
  selector: 'app-cadastrar-cupom',
  templateUrl: './cadastrar-cupom.component.html',
  styleUrls: ['./cadastrar-cupom.component.css']
})
export class CadastrarCupomComponent {

  cupons: Cupom[] = [];
  cupom : Cupom;
  error: string[] | undefined;
  sucess: boolean = false;
  erros: string[] | undefined;
  id: number | undefined;
  router: Router | undefined;
  activatedRoute: ActivatedRoute | undefined;
 // service: CupomService | undefined;

  
  constructor(private service : CupomService) 
  {
    this.cupom = new Cupom();
  }


  salvar(cupom: any)
  {
  this.service.salvar(this.cupom).subscribe( salvado => 
    { this.cupons.push(salvado) 
      console.log(salvado);
    
    })
    
    
    console.log("Teste", cupom);
  }

}
