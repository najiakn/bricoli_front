import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeService } from 'src/app/models/TypeService';
import { TypeServiceService } from 'src/app/Services/type-service.service';

@Component({
  selector: 'app-liste-type-service',
  templateUrl: './liste-type-service.component.html',
  styleUrls: ['./liste-type-service.component.css']
})
export class ListeTypeServiceComponent implements OnInit {
  newTypeName: string = '';
  serviceTypes: TypeService[] = [];
  private apiUrl = 'http://localhost:8083/api/typeServices'; // Adjust this URL as needed
  typemodel: TypeService[] = [];
  errorMessage: string = '';



  constructor(private typeserviceservice: TypeServiceService,
              private router: Router ) {}

  ngOnInit() {
    this.loadTypeService();
  }





  loadTypeService(): void {
    this.typeserviceservice.allTypeServices().subscribe(
      (data: TypeService[]) => {
        this.serviceTypes = data;
        console.log(data);

      },
      (error: any) => {
        console.error('Erreur lors de la récupération des projets', error);
        this.errorMessage = 'Une erreur est survenue lors du chargement des projets.';
      }
    );
  }
            

}



