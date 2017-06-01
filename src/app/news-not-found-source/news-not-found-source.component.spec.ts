import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsNotFoundSourceComponent } from './news-not-found-source.component';

describe('NewsNotFoundSourceComponent', () => {
  let component: NewsNotFoundSourceComponent;
  let fixture: ComponentFixture<NewsNotFoundSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsNotFoundSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsNotFoundSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
