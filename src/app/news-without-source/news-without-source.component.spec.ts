import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsWithoutSourceComponent } from './news-without-source.component';

describe('NewsWithoutSourceComponent', () => {
  let component: NewsWithoutSourceComponent;
  let fixture: ComponentFixture<NewsWithoutSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsWithoutSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsWithoutSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
