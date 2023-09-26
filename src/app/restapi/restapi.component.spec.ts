import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestapiComponent } from './restapi.component';

describe('RestapiComponent', () => {
  let component: RestapiComponent;
  let fixture: ComponentFixture<RestapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestapiComponent]
    });
    fixture = TestBed.createComponent(RestapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
