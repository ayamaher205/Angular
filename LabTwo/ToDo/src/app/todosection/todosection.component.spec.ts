import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosectionComponent } from './todosection.component';

describe('TodosectionComponent', () => {
  let component: TodosectionComponent;
  let fixture: ComponentFixture<TodosectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodosectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
