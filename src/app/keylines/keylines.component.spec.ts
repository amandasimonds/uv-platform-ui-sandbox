import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeylinesComponent } from './keylines.component';

describe('KeylinesComponent', () => {
  let component: KeylinesComponent;
  let fixture: ComponentFixture<KeylinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeylinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeylinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
