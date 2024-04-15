import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSucceedComponent } from './mail-succeed.component';

describe('MailSucceedComponent', () => {
  let component: MailSucceedComponent;
  let fixture: ComponentFixture<MailSucceedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailSucceedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MailSucceedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
