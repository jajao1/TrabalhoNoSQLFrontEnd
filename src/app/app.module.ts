import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovoAlunoComponent } from './components/novo-aluno/novo-aluno.component';
import { AlunosComponent } from './components/alunos/alunos.component';
import { EditAlunoComponent } from './components/edit-aluno/edit-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    NovoAlunoComponent,
    AlunosComponent,
    EditAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
