import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common'; 

import Task from '../types/task';
import { TaskService } from '../services/task.service';
import { RouterLink } from '@angular/router';
import { TaskFormComponent } from './task-form/task-form.component';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  providers:[DatePipe]
})
export class TasksComponent {
  tasks: Task[] = [];
  taskService = inject(TaskService);
  totalRecords: number = 0;
  datePipe = inject(DatePipe);
  

  constructor(private dialogRef: MatDialog) {}

  openDialog() {
    this.dialogRef.open(TaskFormComponent);
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe((result) => {
      this.tasks = result;
      this.totalRecords=this.tasks.length;
      console.log(this.tasks);
    });
  }

  delete(id: string) {
    const ok = confirm('Are you sure want to delete Task ?');
    if (ok) {
      this.taskService.deleteTask(id).subscribe((result) => {
        alert('Task deleted Sucessfully');
        this.tasks = this.tasks.filter((u) => u._id !== id);
        this.totalRecords=this.tasks.length;
      });
    }
  }
  
}
