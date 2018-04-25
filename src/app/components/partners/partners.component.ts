import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  public imgfullsrc: string;
  public imgfullwidth: string;
  public newslist: any;
  public jieshaolist: any;
  constructor() {
    this.imgfullsrc = '/assets/images/banner_partners.jpg';
    this.imgfullwidth = '960px';
  }

  ngOnInit() {
    this.newslist = [

      {
        text: '[2012/06/19] 星网锐捷安防科技亮相第十届6-18科技盛宴',
      },
      {
        text: '[2012/03/26] 星网锐捷安防产品亮相福建省电子信息产品推介会',
      }
    ];

    this.jieshaolist = [
      {
        name: '公司介绍',
        url: ''
      },
      {
        name: '企业文化',
        url: ''
      },
      {
        name: '公司荣誉',
        url: ''
      },
      {
        name: '公司视频',
        url: ''
      },
      {
        name: '光辉时刻',
        url: ''
      },
    ];


  }

}
