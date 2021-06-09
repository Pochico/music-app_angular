import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSongComponent } from './src/app/pages/homescreen/popular-song-component/popular-song/popular-song.component';

describe('PopularSongComponent', () => {
  let component: PopularSongComponent;
  let fixture: ComponentFixture<PopularSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
