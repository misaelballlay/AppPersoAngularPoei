import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListMangasComponent } from './page-list-mangas.component';

describe('PageListMangasComponent', () => {
  let component: PageListMangasComponent;
  let fixture: ComponentFixture<PageListMangasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListMangasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListMangasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
