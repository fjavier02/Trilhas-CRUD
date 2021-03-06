import { Injectable } from '@angular/core';
import { Task } from '../models/Taks';

const TaskList = [
  {
  "id": 1,
  "title": "Pedra Bonita",
  "description": "A Pedra Bonita está situada no Parque Nacional da Tijuca, entre a praia de São Conrado e a Barra da Tijuca."
  },
  {
  "id": 2,
  "title": "Pedra da Gávea",
  "description": "Temida por muitos e amada por outros. Há quem nunca tenha chegado ao topo por medo de enfrentar a “carrasqueira”."
  },
  {
  "id": 3,
  "title": "Morro da Urca",
  "description": "A trilha para o topo do Morro alterna subidas íngremes e trechos mais planos."
  }
]

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask(){
    return TaskList;
  }

  getOneTask(_id) {
    return TaskList.find(task => task.id === _id)
  }

  addTask(task: Task){
    TaskList.push(task);
  }

  editTask(newTaskEdit){
    const index = TaskList.findIndex(task => task.id === newTaskEdit.id)

    TaskList[index] = newTaskEdit;
  }

  deleteTask(_id){
    TaskList.splice(_id, 1);
  }
}
