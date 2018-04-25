import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Menu } from './menu';

import { MenudataserverService } from './menudataserver.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menudataurl: string = 'assets/menudata.json';
  public tabLinks;
  public searchvalue: string;
  public currentitem: string;

  constructor(
    private menudata: MenudataserverService
  ) {  }

  ngOnInit() {
    this.getmenudata();

  }

  getmenudata(){
    this.menudata.getMenus(this.menudataurl).subscribe(data => {
      this.tabLinks = data;
      console.log(this.tabLinks);
    },err => console.log('出错了！'));
  }
  onClick(item) {
    console.log('点击了搜素');
    this.currentitem = item;
  }
  onSearch(event: string): void {
    console.log(event);
  }

}
