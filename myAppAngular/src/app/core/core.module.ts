import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { UiModule } from '../ui/ui.module';
import { LoginModule } from '../login/login.module';
import { MangasModule } from '../mangas/mangas.module';
import { AnimesModule } from '../animes/animes.module';
import { ProfilModule } from '../profil/profil.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports :[TemplatesModule, UiModule, LoginModule, MangasModule, AnimesModule, ProfilModule]
})
export class CoreModule { }
