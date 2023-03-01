import { Component } from '@angular/core';
import { Params, Router } from '@angular/router';
import { Cupom } from 'src/app/cupom/Cupom';
import { CupomService } from 'src/app/cupom/CupomService';
import { Produto } from 'src/app/produto/Produto';
import { ProdutoService } from 'src/app/produto/Produto-Service';
import { CupomProduto } from '../CupomProduto';
import { CupomProdutoService } from '../CupomProduto-Service';

@Component({
  selector: 'app-cadastro-cupom-produto',
  templateUrl: './cadastro-cupom-produto.component.html',
  styleUrls: ['./cadastro-cupom-produto.component.css']
})
export class CadastroCupomProdutoComponent {

  cupomProdutos: CupomProduto[] = [];
  produtos: Produto[] = [];
  cupons: Cupom[] = [];
  produto: Produto | undefined;
  cupom: Cupom | undefined;
  cupomProduto: CupomProduto = new CupomProduto;
  id: number | undefined;
  router: Router | undefined;
  params: Params | undefined;

  constructor(private cupomProdutoservice: CupomProdutoService, private produtoService: ProdutoService, private CupomService: CupomService)
  {
    
  }

  salvar(cupomProduto: CupomProduto)
  {
  this.cupomProdutoservice.salvar(this.cupomProduto).subscribe( cupomSalvado => 
    { this.cupomProdutos.push(cupomSalvado) 
      console.log(cupomSalvado);
    
    })
    
    
    console.log("Teste", cupomProduto);
  }

  /*

  */

}
