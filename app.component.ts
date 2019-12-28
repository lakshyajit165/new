import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'springmongo';
  errMessage: string;
  b:Book=new Book();
  b_array:Array<Book>= [];
  bookForm: FormGroup;

bookform: FormGroup;

id:FormControl;
name: FormControl;
description: FormControl;

submitMessage: string;


constructor(private bookService: BookService) {

}
ngOnInit() {
  this.bookService.getDetails().subscribe(
    data=>{
      console.log(data);
      // this.b_array = data;
    },
    error=>
    {
       this.errMessage=error.message;
    }
  );

  this.id =  new FormControl(),
  this.name =  new FormControl(),
  this.description =  new FormControl(),
  
  
  this.bookform = new FormGroup({
    id:this.id,
    name: this.name,
    description: this.description,
    
  });
}
submit() {
  console.log(this.bookform.value);

  this.b.id = this.id.value;
  this.b.name=this.name.value;
  this.b.description=this.description.value;
  
  this.bookService.addDetails(this.b).subscribe(
    data=>{
          console.log(data);
          console.log(this.b);
          // this.b_array.push(data); 
    },
    error=>
    {
      this.errMessage=error.message;
    }
  );
  // this.b = new Book();
  
}

}


