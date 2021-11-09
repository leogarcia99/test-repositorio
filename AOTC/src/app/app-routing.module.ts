import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RegistrateComponent } from './componentes/registrate/registrate.component';
import { ShoppingComponent } from './componentes/shopping/shopping.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'login', component: IniciarSesionComponent},
  {path: 'Resgistrarse', component: RegistrateComponent},
  {path: 'mi_carrito', component: ShoppingComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
