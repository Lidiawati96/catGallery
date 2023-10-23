import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, CAT_JPA_API_URL } from 'src/app/app.constants';
import { Cat } from 'src/app/cats/cats.component';

@Injectable({
  providedIn: 'root'
})
export class CatDataService {

  constructor(
    private http:HttpClient
  ) { }

  
  retrieveAllCats(){
    return this.http.get<any[]>(`${CAT_JPA_API_URL}/cats`);
  }

  getTotalKucing(){
    return this.http.get<any[]>(`${CAT_JPA_API_URL}/getTotalKucing`);
  }

  deleteCat(id:number){
    console.log(`Delete ${id}`);
    return this.http.delete(`${CAT_JPA_API_URL}/cats/${id}`);
  }

  updateCat(id:number,cat : Cat){
    console.log(`update ${id}`);
    return this.http.put(`${CAT_JPA_API_URL}/cats/${id}`,cat);
  }

  createCat(cat : Cat){
    console.log(`Save`);
    return this.http.post(`${CAT_JPA_API_URL}/insertCats`,cat);
  }

  retrieveCat(id:number){
    console.log(`Cat ${id}`);
    return this.http.get<any>(`${CAT_JPA_API_URL}/cats/${id}`);
  }

    // Returns an observable 
  createCatFile(file:any):Observable<any> { 
  
    const formData = new FormData();  
      
    formData.append("filesUpload", file, file.name); 
      
    return this.http.post(`${CAT_JPA_API_URL}/UploadCats`,formData);
  } 
}
