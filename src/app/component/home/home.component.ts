import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces/task';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  taskId: any;
  task:any;
  constructor(private route:ActivatedRoute,public taskservice: TasksService) {}

  ngOnInit(): void {
    this.taskId=this.route.snapshot.paramMap.get('id');
    this.task=this.taskservice.tasks[this.taskId];
  }
  deleteTask(i:number){
    this.taskservice.deleteTask(i);
  }
  
  toggleLabel(taskId: number) {
    this.taskservice.toggleLabel(taskId);
    this.taskservice.storeTasks();
  }
}
