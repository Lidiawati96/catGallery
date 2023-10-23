import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatDataService } from '../service/data/cat-data.service';
import { Cat } from '../cats/cats.component';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  id : any
  cat: any;
  constructor(
    private catservice : CatDataService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    this.cat = new Cat(this.id,'');
  }

  saveCat(){
    console.log(this.id);
      this.catservice.createCat(this.cat)
      .subscribe(
          data => {
            this.router.navigate([''])
          }
      )
  }

    back(){
      this.router.navigate(['']);
    }
}
