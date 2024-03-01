import { Injectable } from '@angular/core';
import { Worker } from './worker.model';
import { FirebaseService } from './firebase.service';


@Injectable({
  providedIn: 'root'
})
export class WorkerServiceService {

  constructor(private fireServ:FirebaseService) { }

  //workers:Worker[]=[new Worker("TestWorker1","Rank1",1111)];

  //tenemos que usarlo si no devolvemos el observable
  workers:Worker[]=[];

  getWorkers(){
    console.log(this.fireServ.getWorkersDdbb());
    return this.fireServ.getWorkersDdbb();
   
  }

  getWorker(id:number){
    this.fireServ.getWorkersDdbb().subscribe(
      workers=>{
        this.workers=Object.values(workers);
        return this.workers;
      }
    )
  }

  createWorker(myWorker:Worker){
    this.fireServ.getWorkersDdbb().subscribe(
      workers=>{
        this.workers=Object.values(workers);
        this.workers.push(myWorker);
        this.fireServ.writeWorkersDdbb(this.workers);        
      }
    )
  }

  updateWorker(myWorker:Worker,id:number){
    this.fireServ.getWorkersDdbb().subscribe(
      workers=>{
        this.workers=Object.values(workers);
        this.workers[id] = myWorker;
        this.fireServ.writeWorkersDdbb(this.workers);        
      }
    )
  
  }

  deleteWorker(id:number){
    this.workers.splice(id,1);
    this.fireServ.writeWorkersDdbb(this.workers);       
  }

  ngOnInit():void{

  }



}
