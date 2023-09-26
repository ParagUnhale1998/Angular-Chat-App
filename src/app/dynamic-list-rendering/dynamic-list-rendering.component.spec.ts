import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicListRenderingComponent } from './dynamic-list-rendering.component';

describe('DynamicListRenderingComponent', () => {
  let component: DynamicListRenderingComponent;
  let fixture: ComponentFixture<DynamicListRenderingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicListRenderingComponent]
    });
    fixture = TestBed.createComponent(DynamicListRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
