import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  // cats = ["catA","catB","catC"];
  categories = {"catA":[{"name":"name","url":"url"}],"catB":[{"name":"b","url":"url"}]};
  catA = [];
  tmp = ""; 
  constructor(){
    console.log();
  }
  
}
