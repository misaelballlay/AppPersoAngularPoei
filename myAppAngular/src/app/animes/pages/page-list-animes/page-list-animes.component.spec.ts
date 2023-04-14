import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListAnimesComponent } from './page-list-animes.component';

describe('PageListAnimesComponent', () => {
  let component: PageListAnimesComponent;
  let fixture: ComponentFixture<PageListAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListAnimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
