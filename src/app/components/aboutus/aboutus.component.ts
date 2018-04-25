import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  public companynewslist: any;
  public jieshaolist: any;

  constructor() { }

  ngOnInit() {
    this.companynewslist = [
      {
        text : '[2017/12/20] 邀请函 | 十天之后的广州教育展，你想看的我们都有~',
      },
      {
        text : '[2017/12/19] 12月，与您相约73届中国教育装备展',
      },
      {
        text : ' [2017/12/01] 从幼儿园虐童事件来看，校园安防建设要如何做？',
      },
      {
        text : ' [2017/11/01] 重磅：星网物联蝉联中国安防十大',
      },
      {
        text : ' [2017/10/20] 广州星海青少年宫安全升级项目分享',
      },
      {
        text : '[2017/10/13] 透明厨房：服务福州市中小学校食堂安全管理机制',
      },
      {
        text : '[2017/09/29] 停车场支付玩出新花样：“车空付”来了~！！',
      },
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
