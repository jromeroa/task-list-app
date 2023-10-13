import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from './task-form.component';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskFormComponent],
      imports: [FormsModule], 
    });
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
  });

  // Checks if the component can be created
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Verifies that the form elements are rendered correctly
  it('should render the form', () => {
    const titleInputElement = fixture.nativeElement.querySelector('#title');
    const descriptionInputElement = fixture.nativeElement.querySelector('#description');
    const addButton = fixture.nativeElement.querySelector('button');

    expect(titleInputElement).toBeTruthy();
    expect(descriptionInputElement).toBeTruthy();
    expect(addButton).toBeTruthy();
  });

  // Checks if the addTask function is triggered when the form is submitted.
  it('should trigger addTask function on form submission', () => {
    // Set a Spy on the addTask function
    spyOn(component, 'addTask'); 

    // Selects the form element in your component's template
    const form = fixture.nativeElement.querySelector('form');
    // Simulates a form submission event.
    form.dispatchEvent(new Event('ngSubmit'));
    // Manually triggers change detection
    fixture.detectChanges();
    // Expectation checks whether the addTask method has been called.
    expect(component.addTask).toHaveBeenCalled();
  });
});
