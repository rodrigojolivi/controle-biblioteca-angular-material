import { Component, OnInit, Inject } from '@angular/core';
import { LivroService } from 'src/app/modules/livro.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutorService } from 'src/app/modules/autor/autor.service';
import { CategoriaService } from 'src/app/modules/categoria/categoria.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-livro-editar',
  templateUrl: './livro-editar.component.html',
  styleUrls: ['./livro-editar.component.css']
})
export class LivroEditarComponent implements OnInit {

  form: FormGroup;
  livro: any;
  autores: any[];
  categorias: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private livroService: LivroService,
    private autorService: AutorService,
    private categoriaService: CategoriaService,
    private fb: FormBuilder,
    private mdDialogRef: MatDialogRef<LivroEditarComponent>,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obterLivro(this.data.id);
    this.editarForm();
    this.listarAutores();
    this.listarCategorias();
  }

  editarForm() {
    this.form = this.fb.group({
      id: [''],
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      disponivel: [''],
      idAutor: ['', Validators.required],
      idCategoria: ['', Validators.required],
      autor: [null],
      categoria: [null],
    });
  }

  listarAutores() {
    this.autorService.listar().subscribe(result => {
      this.autores = result['data'];
    });
  }

  listarCategorias() {
    this.categoriaService.listar().subscribe(result => {
      this.categorias = result['data'];
    });
  }

  obterLivro(id: string) {
    this.livroService.obter(id).subscribe(result => {
      this.livro = result['data'];
      this.form.setValue(this.livro);
    });
  }

  salvar() {
    this.livroService.atualizar(this.form.value)
      .subscribe((res: any) => {
        this.toastr.success('Cadastro efetuado com sucesso!', 'Sucesso!');
        this.mdDialogRef.close();
        location.reload();
        console.log(res);
      }, (err: any) => {
        this.toastr.error('Ocorreu um erro!', 'Erro');;
        console.log(err);
      });
  }

  cancelar(){
    this.mdDialogRef.close();
  }

}
