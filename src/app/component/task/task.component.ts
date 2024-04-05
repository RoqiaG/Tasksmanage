import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  taskId: any;
  task:any;
  constructor(private route:ActivatedRoute,private tasksservice: TasksService,private router:Router){}
  ngOnInit(): void {
    this.taskId=this.route.snapshot.paramMap.get('id');
    this.task=this.tasksservice.tasks[this.taskId];
  }

  editTasks(){
    this.tasksservice.editTasks(this.taskId,this.task);
    this.router.navigate(['/']);
  
  }
  deleteTask(){
    this.tasksservice.deleteTask(this.taskId);
    this.router.navigate(['/']);
  }
  toggleLabel() {
    this.tasksservice.toggleLabel(this.taskId);
  }
}
