import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionNotFoundComponent } from './collection-not-found.component';

describe('CollectionNotFoundComponent', () => {
  let component: CollectionNotFoundComponent;
  let fixture: ComponentFixture<CollectionNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
