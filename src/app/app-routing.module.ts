import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSignInUpModule } from 'src/components/sign-in-up/home-sign-in-up.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomeSignInUpModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
