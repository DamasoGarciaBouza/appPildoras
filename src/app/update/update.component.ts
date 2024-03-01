import { Component } from '@angular/core';
import { Worker } from '../worker.model';
import { WorkerServiceService } from '../worker-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent {

  constructor(private wServ:WorkerServiceService,
              private actRoute:ActivatedRoute, 
              private router:Router){};

  title = "";

  workers:Worker[]=[];

  nameInput:string = "";
  cargoInput:string = "";
  salarioInput:number= 0;   

  id:number = 0;
  action:number = 0;


  changeTitle(){
    if(this.action == 1){
      this.title = "Actualizar empleado";
    }
    else if(this.action == 2){
      this.title = "Eliminar empleado";   
    }
    else{
      this.title = "Crear nuevo";
    }
  }  

  writeWorkerToInputs(){

    this.wServ.getWorkers().subscribe(
      myWorkers=>{
        this.workers = Object.values(myWorkers);
        this.nameInput = this.workers[this.id].nombre;          
        this.cargoInput = this.workers[this.id].cargo;  
        this.salarioInput = this.workers[this.id].salario;                  
      }
    );  

    this.wServ.getWorker(this.id)

  }

  //crud
  createWorker(){
    let myWorker = new Worker(this.nameInput,this.cargoInput,this.salarioInput);
    this.workers.push(myWorker);
    console.log(this.workers);
    
    this.wServ.createWorker(myWorker);

    this.goBack();
  }

  deleteWorker(){
    console.log("delete worker");
    this.wServ.deleteWorker(this.id);
    this.goBack();
  }

  updateWorker(){
    let myWorker = new Worker(this.nameInput,this.cargoInput,this.salarioInput);    

    
    this.wServ.updateWorker(myWorker,this.id);    
    
    
    this.goBack();
  }

  //navegation
  runAction(){
    if(this.action == 1){//update
      this.updateWorker();
    }
    else if(this.action == 2){//delete
      this.deleteWorker();
    }
    else if(this.action == 3){//create new
      this.createWorker();
    }
    else{
      console.log("Error no action number");      
    }
  }

  goBack(){
    //alert("go back");

    setTimeout(() => 
{
    this.router.navigate(['/']);
},
200);
    

    //this.router.navigate(['']).then(() => {window.location.reload();});    

  }

  ngOnInit():void{
    this.action = this.actRoute.snapshot.params['action'];
    console.log(this.actRoute.snapshot);
    this.id = this.actRoute.snapshot.queryParams['id'];    

    this.changeTitle();

    if(this.action == 1 || this.action == 2){
      this.writeWorkerToInputs();
    }        
  }
}
