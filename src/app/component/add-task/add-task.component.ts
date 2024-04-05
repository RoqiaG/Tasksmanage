import { Component ,OnInit} from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Task } from '../../interfaces/task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {
  taskId: any;
  task:any;
 constructor(public taskservice: TasksService,private router:Router,private route:ActivatedRoute){}
 ngOnInit(): void {
  this.taskId=this.route.snapshot.paramMap.get('id');
  this.task=this.taskservice.tasks[this.taskId];
 }

 toggleLabel() {
  this.taskservice.toggleLabel(this.taskId)
} 
 saveTask(title:any,description:any,dueDate:any,completed:any){
   this.taskservice.saveTask(title.value,description.value,dueDate.value,completed.value);
   this.router.navigate(['/']);
   this.taskservice.storeTasks();
  }
}
