import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){

}
getTasks() {
  return this._http.get('/tasks');
}

getTask(id) {
  return this._http.get('/tasks/' + id);
}

createTask(task) {
  return this._http.post('/tasks', task);
}

editTask(editTask) {
  return this._http.put(`/tasks/${editTask._id}`, editTask);
}

deleteTask(id) {
  return this._http.delete('/tasks/' + id);
}
}


