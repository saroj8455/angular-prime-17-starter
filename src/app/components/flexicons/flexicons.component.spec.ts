import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexiconsComponent } from './flexicons.component';

describe('FlexiconsComponent', () => {
  let component: FlexiconsComponent;
  let fixture: ComponentFixture<FlexiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexiconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
