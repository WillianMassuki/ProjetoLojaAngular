import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarCupomComponent } from './cupom/cadastrar-cupom/cadastrar-cupom.component';
import { ListarCupomComponent } from './cupom/listar-cupom/listar-cupom.component';
import { CadastroCupomProdutoComponent } from './cupomProduto/cadastro-cupom-produto/cadastro-cupom-produto.component';
import { ListarCupomProdutoComponent } from './cupomProduto/listar-cupom-produto/listar-cupom-produto.component';
import { CadastroEnderecoComponent } from './endereco/cadastro-endereco/cadastro-endereco.component';
import { ListarEnderecoComponent } from './endereco/listar-endereco/listar-endereco.component';
import { IncluirPagamentoComponent } from './formaPagamento/incluir-pagamento/incluir-pagamento.component';
import { ListarFormaPagamentoComponent } from './formaPagamento/listar-forma-pagamento/listar-forma-pagamento.component';
import { CadastroItemComponent } from './item/cadastro-item/cadastro-item.component';
import { ListarItemComponent } from './item/listar-item/listar-item.component';
import { CadastroPedidosComponent } from './pedido/cadastro-pedidos/cadastro-pedidos.component';
import { ListaPedidosComponent } from './pedido/lista-pedidos/lista-pedidos.component';
import { CadastroProdutosComponent } from './produto/cadastro-produtos/cadastro-produtos.component';
import { ListarProdutosComponent } from './produto/listar-produtos/listar-produtos.component';
import { CadastroVendaComponent } from './venda/cadastro-venda/cadastro-venda.component';
import { ListarVendaComponent } from './venda/listar-venda/listar-venda.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarCupomComponent,
    ListarCupomComponent,
    CadastroCupomProdutoComponent,
    ListarCupomProdutoComponent,
    CadastroEnderecoComponent,
    ListarEnderecoComponent,
    IncluirPagamentoComponent,
    ListarFormaPagamentoComponent,
    CadastroItemComponent,
    ListarItemComponent,
    CadastroPedidosComponent,
    ListaPedidosComponent,
    CadastroProdutosComponent,
    ListarProdutosComponent,
    CadastroVendaComponent,
    ListarVendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
