import { Component } from '@angular/core';
import { PostService } from './post.service';
import { details, foo} from './post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lst: details[]|any;
  lst1:details | any;
  url:any;

  constructor(private apiservice:PostService) {}

  ngOnInit() {}

  send_details(value: any){
    this.url = value.name;
    this.apiservice.geturl(this.url);
   
    this.apiservice.getDetails()
    .subscribe
    (
      data=>
      {
        this.lst = data;
        this.lst1 = data;
        console.log(data);
        if (this.lst1.Message ==='No records found'){
          alert('Error:No records found');
        }
      }
    );
  }
  validatepin(y: { PostOffice: null; Message: any; }){
    if (y.PostOffice === null){
      return('No Records Found');
    }
    else {
      return(y.Message);
    }
  }
}
