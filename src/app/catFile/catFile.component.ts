import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CatDataService } from '../service/data/cat-data.service';
import { Cat } from '../cats/cats.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cat',
  templateUrl: './catFile.component.html',
  styleUrls: ['./catFile.component.css']
})

export class CatFileComponent implements OnInit {
  
    // Variable to store shortLink from api response 
    shortLink: string = ""; 
    loading: boolean = false; // Flag variable 
    file: any; // Variable to store file 
  
    // Inject service 
    constructor(
      private catservice : CatDataService,
      private route : ActivatedRoute,
      private router : Router
    ) { }
  
    ngOnInit(): void { 
    } 
  
    // On file Select 
    onChange(event:any) { 
      this.file = event.target.files[0]; 
    } 

    onUpload() { 
      this.loading = !this.loading; 
      console.log(this.file); 
      this.catservice.createCatFile(this.file).subscribe( 
          (event: any) => { 
              if (typeof (event) === 'object') { 
                  this.loading = false; // Flag variable  
                  this.file = ''; 
                  this.router.navigate(['']);
              } 
          } 
      ); 
  } 
  
  back(){
    this.router.navigate(['']);
  }
    
} 
  