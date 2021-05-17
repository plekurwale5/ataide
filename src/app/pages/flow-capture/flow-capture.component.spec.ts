import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowCaptureComponent } from './flow-capture.component';

describe('FlowCaptureComponent', () => {
  let component: FlowCaptureComponent;
  let fixture: ComponentFixture<FlowCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowCaptureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
