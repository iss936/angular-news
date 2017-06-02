import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionManagerComponent } from './collection-manager.component';

describe('CollectionManagerComponent', () => {
  let component: CollectionManagerComponent;
  let fixture: ComponentFixture<CollectionManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
