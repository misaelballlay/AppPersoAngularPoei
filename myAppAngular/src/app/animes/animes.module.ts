import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimesRoutingModule } from './animes-routing.module';
import { PageListMangasComponent } from './pages/page-list-mangas/page-list-mangas.component';
import { PageListAnimesComponent } from './pages/page-list-animes/page-list-animes.component';
import { PageAnimeComponent } from './pages/page-anime/page-anime.component';


@NgModule({
  declarations: [
    PageListMangasComponent,
    PageListAnimesComponent,
    PageAnimeComponent
  ],
  imports: [
    CommonModule,
    AnimesRoutingModule
  ]
})
export class AnimesModule { }
