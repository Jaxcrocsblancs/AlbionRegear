import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegearComponent } from './regear.component';

describe('RegearComponent', () => {
  let component: RegearComponent;
  let fixture: ComponentFixture<RegearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
