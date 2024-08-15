import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  {
    path: 'room',
    component: RoomsComponent
  },

  {
    path: 'signin', component: AuthenticationComponent
  },
  {
    path: 'crud', component: CrudComponent
  }
] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
