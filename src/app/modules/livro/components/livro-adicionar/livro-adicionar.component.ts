import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutorService } from 'src/app/modules/autor/autor.service';
import { CategoriaService } from 'src/app/modules/categoria/categoria.service';
import { LivroService } from 'src/app/modules/livro.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-livro-adicionar',
  templateUrl: './livro-adicionar.component.html',
  styleUrls: ['./livro-adicionar.component.css']
})
export class LivroAdicionarComponent {

  form: FormGroup;
  livros: any[];
  autores: any[];
  categorias: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: any,
    private fb: FormBuilder,
    private livroService: LivroService,
    private autorService: AutorService,
    private categoriaService: CategoriaService,
    private mdDialogRef: MatDialogRef<LivroAdicionarComponent>,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.adicionarForm();
    this.listarAutores();
    this.listarCategorias();
  }

  adicionarForm() {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      disponivel: false,
      idAutor: ['', Validators.required],
      idCategoria: ['', Validators.required],
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

  salvar() {
    this.livroService.adicionar(this.form.value)
      .subscribe((res: any) => {      
        this.toastr.success('Cadastro efetuado com sucesso!', 'Sucesso');
        this.mdDialogRef.close();
         location.reload();       
         console.log(res);
      }, (err: any) => {
        this.toastr.error('Ocorreu um erro!', 'Erro');
        console.log(err);
      });
  }

  cancelar(){
    this.mdDialogRef.close();
  }
}