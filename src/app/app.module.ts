import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';
import { WorkerServiceService } from './worker-service.service';
import { FirebaseService } from './firebase.service';
import { HttpClientModule } from '@angular/common/http';



const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'update', component:UpdateComponent},
  {path:'update/:action', component:UpdateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule    
  ],
  providers: [WorkerServiceService,FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
