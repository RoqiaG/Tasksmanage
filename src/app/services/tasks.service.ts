import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks:Task[] =[]

  constructor() {
    if (typeof localStorage !== 'undefined') {
      let storedtasks = localStorage.getItem('tasks');
      if (storedtasks) {
          this.tasks = JSON.parse(storedtasks);
      }
  }
  }
  deleteTask(i:number){
    this.tasks.splice(i,1);
    this.storeTasks();
  }
  
  saveTask(title:any,description:any,dueDate:any,completed:any){
    this.tasks.push({
      title,
      description,
      dueDate,
      completed
    })
    this.storeTasks();
  }

  editTasks(id:any, item:any)
  {
    this.tasks[id]=item;
    this.storeTasks();
  }

  toggleLabel(taskId: number) {
    const task = this.tasks[taskId];
    task.completed ==task.completed;
    this.storeTasks();
  }

 storeTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
}
