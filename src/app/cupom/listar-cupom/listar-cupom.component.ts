import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cupom } from '../Cupom';
import { CupomService } from '../CupomService';

@Component({
  selector: 'app-listar-cupom',
  templateUrl: './listar-cupom.component.html',
  styleUrls: ['./listar-cupom.component.css']
})
export class ListarCupomComponent {

  cupons: Cupom[] = [];
  cupom: Cupom = new Cupom;
  error: string[] | undefined;
  sucess: boolean = false;
  errors: string[]= [];
  mensagemSucesso : string | undefined;
  mensagemErro : string | undefined;

  constructor(private service: CupomService, private router: Router)
  {}

  listarTodos()
   {
   this.service.listar().subscribe( todos => {
     console.log(todos);
     this.cupons = todos;
 
   });
   }

}
