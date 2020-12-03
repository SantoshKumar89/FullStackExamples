import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCraftsComponent } from './my-crafts.component';

describe('MyCraftsComponent', () => {
  let component: MyCraftsComponent;
  let fixture: ComponentFixture<MyCraftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCraftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
