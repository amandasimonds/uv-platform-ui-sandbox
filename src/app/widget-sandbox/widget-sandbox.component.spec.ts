import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSandboxComponent } from './widget-sandbox.component';

describe('WidgetSandboxComponent', () => {
  let component: WidgetSandboxComponent;
  let fixture: ComponentFixture<WidgetSandboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetSandboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
