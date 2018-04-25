import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'Rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public linkdata: any;
  constructor( private http: Http ) { }

  ngOnInit() {
    this.http.get('assets/data.json')
    .subscribe(data  => {
      this.linkdata = data.json().footerlinkdata;
    }, err => {
      console.log(err);
    }

    );
  }

}
