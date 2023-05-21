import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {

  title = new FormControl('');
  url = new FormControl('');
  category = new FormControl('');

  catNames = ["Category A","Category B","Category C"];

  checkChange(){
    console.log(this.title.value);
    console.log(this.url.value);
    console.log(this.category.value);
  }
  exit(){
    this.title.setValue('');
    this.url.setValue('');
    this.category.setValue('');

  }
  
  
}
