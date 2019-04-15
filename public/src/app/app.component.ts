import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks;
  taskId: String;
  task;
  newTask: any;
  editTask: any;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.newTask= {title: "", description: ""}
    this.editTask= {_id: "", title:"", description: ""}
    this.taskId= "";
    this.getTasksFromService();
  
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("Got out data!", data)
      this.tasks= data;
    });
  }
  getTaskFromService() {
    let obs = this._httpService.getTask(this.taskId);
    obs.subscribe(data => {
      this.task = data;
    });
    this.taskId = "";
  }
  
  onNewTaskKey(event: any) {
    this.taskId = event.target.value;
  }

  onNewTaskSubmit() {
    let obs = this._httpService.createTask(this.newTask);
    obs.subscribe(data => {
      console.log('Task created.', data);
      this.getTasksFromService();
    });
    this.newTask = { title: "", description: "" }
  }

  onEditTask(id, title, description) {
    this.editTask._id = id;
    this.editTask.title = title;
    this.editTask.description = description; 
  }

  onEditTaskSubmit() {
    let obs = this._httpService.editTask(this.editTask);
    obs.subscribe(data => {
      console.log('Task edited.', data);
      this.getTasksFromService();
    })
    this.editTask = { _id: "", title: "", description: "" };
  }

  onDeleteTask(id) {
    let obs = this._httpService.deleteTask(id);
    obs.subscribe(data => {
      console.log('Task deleted.', data);
      this.getTasksFromService();
    })
  }


}