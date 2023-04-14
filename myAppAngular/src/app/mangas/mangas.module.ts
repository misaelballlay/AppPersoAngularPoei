import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangasRoutingModule } from './mangas-routing.module';
import { PageMangaComponent } from './pages/page-manga/page-manga.component';
import { PageListMangasComponent } from './pages/page-list-mangas/page-list-mangas.component';


@NgModule({
  declarations: [
    PageMangaComponent,
    PageListMangasComponent
  ],
  imports: [
    CommonModule,
    MangasRoutingModule
  ]
})
export class MangasModule { }
