import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './components/alunos/alunos.component';
import { NovoAlunoComponent } from './components/novo-aluno/novo-aluno.component';

const routes: Routes = [
  {
    path : 'novo',
    component: NovoAlunoComponent
  },
  {
    path : '',
    component: AlunosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
