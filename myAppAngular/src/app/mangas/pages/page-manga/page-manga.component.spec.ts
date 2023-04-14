import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMangaComponent } from './page-manga.component';

describe('PageMangaComponent', () => {
  let component: PageMangaComponent;
  let fixture: ComponentFixture<PageMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMangaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
