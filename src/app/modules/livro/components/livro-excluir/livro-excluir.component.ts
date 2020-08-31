import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LivroService } from 'src/app/modules/livro.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-livro-excluir',
  templateUrl: './livro-excluir.component.html',
  styleUrls: ['./livro-excluir.component.css']
})
export class LivroExcluirComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private mdDialogRef: MatDialogRef<LivroExcluirComponent>,
    private livroService: LivroService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  cancelar() {
    this.mdDialogRef.close();
  }

  excluir() {
    this.livroService.excluir(this.data.id)
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

}
