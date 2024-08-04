import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import Task from '../../types/task';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent {
  formBuilder = inject(FormBuilder);
  taskForm: FormGroup = this.formBuilder.group({
    user: ['', [Validators.required]],
    status: ['', [Validators.required]],
    dueDate: [''],
    priority: ['', [Validators.required]],
    description: [''],
  });

  taskService = inject(TaskService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  editTaskId!: string;
  ngOnInit() {
    this.editTaskId = this.route.snapshot.params['id'];
    if (this.editTaskId) {
      this.taskService.getTask(this.editTaskId).subscribe((result) => {
        this.taskForm.patchValue(result);
      });
    }
  }
  addTask() {
    if (this.taskForm.invalid) {
      alert('please provide all field with valid data');
      return;
    }
    const model: Task = this.taskForm.value;
    this.taskService.addTask(model).subscribe({
      next: (result) => {
        alert('Task added successfully');
        console.log('Navigating to home page');
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        console.error('Error adding task:', error);
      },
    });
  }
  updateTask() {
    if (this.taskForm.invalid) {
      alert('please provide all field with valid data');
      return;
    }
    const model: Task = this.taskForm.value;
    this.taskService.updateTask(this.editTaskId, model).subscribe((result) => {
      alert('Task Edited Sucessfully');
      this.router.navigateByUrl('/');
    });
  }

  cancel(){
    this.router.navigateByUrl('/');
  }
}
