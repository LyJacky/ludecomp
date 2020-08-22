import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuDecompositionComponent } from './lu-decomposition.component';

describe('LuDecompositionComponent', () => {
  let component: LuDecompositionComponent;
  let fixture: ComponentFixture<LuDecompositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuDecompositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuDecompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
