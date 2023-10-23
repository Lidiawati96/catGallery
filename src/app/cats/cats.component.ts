import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatDataService } from '../service/data/cat-data.service';

export class Cat{
  constructor(
    public id : number,
    public url : string,
  )
  {}
}

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  cats: any[] =[];
  total : any = 0;
  message : string = "";
    
  constructor(private catservice: CatDataService,
    private router : Router) { }

  ngOnInit(): void {
    this.catservice.retrieveAllCats().subscribe(
      response => {
        console.log(response);
        this.cats = response;
      }
    );
    this.catservice.getTotalKucing().subscribe(
      response => {
        console.log(response);
        this.total = response;
      }
    );
  }

  deleteCat(id:number){
    console.log(id);
    this.catservice.deleteCat(id).subscribe(
      response => {
        console.log(id);
        this.message = `Delete Cat successful!`;
        this.ngOnInit();
      }
    );
  }
    
  addCat(){
    this.router.navigate(['cats']);
  }

  addCatFile(){
    this.router.navigate(['catFile']);
  }

}
