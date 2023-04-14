import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAnimeComponent } from './page-anime.component';

describe('PageAnimeComponent', () => {
  let component: PageAnimeComponent;
  let fixture: ComponentFixture<PageAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAnimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
