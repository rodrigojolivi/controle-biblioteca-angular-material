import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LivroAdicionarComponent } from '../livro-adicionar/livro-adicionar.component';
import { LivroEditarComponent } from '../livro-editar/livro-editar.component';
import { LivroExcluirComponent } from '../livro-excluir/livro-excluir.component';
import { LivroService } from 'src/app/modules/livro.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-livro-listar',
  templateUrl: './livro-listar.component.html',
  styleUrls: ['./livro-listar.component.css']
})
export class LivroListarComponent implements OnInit {

  displayedColumns: string[] = ['titulo', 'descricao', 'idAutor', 'idCategoria', 'disponivel', 'acoes'];
  livros: any = null;
  adicionarForm: FormGroup;

  constructor(
    public dialog: MatDialog,
    private livroService: LivroService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.livroService.listar().subscribe(result => {
      this.livros = result['data'];
    });
  }

  adicionar() {
    this.dialog.open(LivroAdicionarComponent);
  }

  editar(id: string) {
    
    this.dialog.open(LivroEditarComponent, {
      data: { id: id }
    });
  }

  excluir(id: string) {
    this.dialog.open(LivroExcluirComponent, {
      data: { id: id }
    });
  }

}
