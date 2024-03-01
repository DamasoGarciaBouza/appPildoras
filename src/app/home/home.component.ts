import { Component } from '@angular/core';
import { Worker } from '../worker.model';
import { WorkerServiceService } from '../worker-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor(private workerServ:WorkerServiceService){};

  title = "Inicio";

  workers:Worker[]=[];

  ngOnInit():void{

    console.log("Home component start");


    this.workerServ.getWorkers().subscribe(
      myWorkers=>{
        if(myWorkers!=undefined){
          this.workers = Object.values(myWorkers); 
        }
      }
      
    );
    

  }

}
