import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfiloComponent } from './portfilo.component';

describe('PortfiloComponent', () => {
  let component: PortfiloComponent;
  let fixture: ComponentFixture<PortfiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfiloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
