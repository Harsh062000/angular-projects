import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TrimTextPipe } from './cutom-pipe/trim-text-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, TrimTextPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  trimeText = signal('this is angular with typescript');
  myStr = signal('this is a angular with TS lectures for practice');
  amount = signal(192749348);
  protected readonly title = signal('todo-app');
  tasks = signal([{ id: 0, task: 'Learn Angular basics', completed: false }]);

  taskInput = signal('');

  addTask() {
    if (this.taskInput()) {
      this.tasks.update((item) => [
        ...item,
        { id: item.length, task: this.taskInput(), completed: false },
      ]);
      this.taskInput.set('');
    }
  }

  deleteTask(id: number) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id != id));
  }
}
