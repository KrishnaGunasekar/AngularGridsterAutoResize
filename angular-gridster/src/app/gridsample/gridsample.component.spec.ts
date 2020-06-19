import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsampleComponent } from './gridsample.component';

describe('GridsampleComponent', () => {
  let component: GridsampleComponent;
  let fixture: ComponentFixture<GridsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
