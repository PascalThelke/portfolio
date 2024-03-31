import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharkieComponent } from './sharkie.component';

describe('SharkieComponent', () => {
  let component: SharkieComponent;
  let fixture: ComponentFixture<SharkieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharkieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharkieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
