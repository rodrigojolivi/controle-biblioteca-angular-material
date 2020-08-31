import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/modules/material.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LivroListarComponent } from './modules/livro/components/livro-listar/livro-listar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { LivroAdicionarComponent } from './modules/livro/components/livro-adicionar/livro-adicionar.component';
import { LivroEditarComponent } from './modules/livro/components/livro-editar/livro-editar.component';
import { LivroExcluirComponent } from './modules/livro/components/livro-excluir/livro-excluir.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LivroListarComponent,
    LivroAdicionarComponent,
    LivroEditarComponent,
    LivroExcluirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' }, },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ]
})
export class AppModule { }
