import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftTitleComponent } from './craft-title.component';

describe('CraftTitleComponent', () => {
  let component: CraftTitleComponent;
  let fixture: ComponentFixture<CraftTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
