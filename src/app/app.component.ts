import { Component, OnInit } from '@angular/core';
import { CidadeService } from './cidade.service';

interface Cidade {
  id: number,
  nome: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app-cadastro';

  cidades: Cidade[] = [];

  constructor(private cidadeService: CidadeService){

  }

  ngOnInit(): void{
    this.consultar();
  }

  consultar(){
    this.cidadeService.consultar()
        .then(dados => {
          this.cidades = dados;
        })
  }

  adicionar(nome: string) {
    this.cidadeService.adicionar({ nome })
      .then(cidade => {
        alert(`Cidade "${cidade.nome}" adicionada com código ${cidade.id}!`);
        this.consultar();
      })

  }

  excluir(id: number) {
    this.cidadeService.excluir(id)
      .then(() => {
        alert('Cidade excluida com sucesso!');
        this.consultar();
      })
  }

  atualizar(cidade: any) {
    alert(JSON.stringify(cidade));
  }
}
