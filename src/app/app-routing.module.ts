import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivroListarComponent } from './modules/livro/components/livro-listar/livro-listar.component';

const routes: Routes = [
  { path: 'livro', component: LivroListarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
