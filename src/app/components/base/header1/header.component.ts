import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'Rxjs';
// import 'Rxjs/Rx';


@Component({
  selector: 'app-header1',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tabLinks: any;
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('assets/data.json')
      .subscribe(data => {
        this.tabLinks = data.json();
      }, err => {
        console.log(err);
        console.log('请求失败');
      });
  }

  onClick() {
    console.log( '点击了！');
  }
}
