import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksGenreComponent } from './books-genre.component';

describe('BooksGenreComponent', () => {
  let component: BooksGenreComponent;
  let fixture: ComponentFixture<BooksGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksGenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
