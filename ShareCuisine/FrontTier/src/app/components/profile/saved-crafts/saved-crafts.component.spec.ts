import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCraftsComponent } from './saved-crafts.component';

describe('SavedCraftsComponent', () => {
  let component: SavedCraftsComponent;
  let fixture: ComponentFixture<SavedCraftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedCraftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
