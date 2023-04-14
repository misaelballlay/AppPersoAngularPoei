import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { PageProfilComponent } from './pages/page-profil/page-profil.component';
import { PageEditProfilComponent } from './pages/page-edit-profil/page-edit-profil.component';


@NgModule({
  declarations: [
    PageProfilComponent,
    PageEditProfilComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule
  ]
})
export class ProfilModule { }
