import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Worker } from './worker.model';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService { 

  workers:Worker[]=[
    //new Worker("FirebaseServiceTest1","Rank1",1141),  
  ];

  constructor(private httpClient:HttpClient) { }

  configUrl = 'https://pruebas1-2fe66-default-rtdb.europe-west1.firebasedatabase.app/datos.json';

  getWorkersDdbb() {
    return this.httpClient.get(this.configUrl);
  }

  writeWorkersDdbb(workersNew:Worker[]) {
    console.log("write workers to DDBB");
    this.workers = workersNew;
    this.httpClient.put(this.configUrl,this.workers).subscribe(
      error=>console.log(error),
      response=>console.log("Guardado empleado" + response)
    );
  }

}
