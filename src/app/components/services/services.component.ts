import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public filecenter: any;
  public whycenter: any;
  public servecenter: any;
  constructor() { }

  ngOnInit() {
    this.servecenter = [
      {
        imgsrc: '/assets/images/ico_s5.jpg',
        link: 'javascript:;',
        title: '全方位技术支持',
        text: '服务政策'
      },
      {
        imgsrc: '/assets/images/ico_s4.jpg',
        link: 'javascript:;',
        title: '服务网点',
        text: '各地区平台联系方式'
      },
      {
        imgsrc: '/assets/images/ico_s1.jpg',
        link: 'javascript:;',
        title: '软件下载',
        text: '升级新版本，体验新功能。更加便利您的查询和下载。'
      },
      {
        imgsrc: '/assets/images/ico_s3.jpg',
        link: 'javascript:;',
        title: '星网安防云服务平台',
        text: '星网安防云服务平台'
      },
      {
        imgsrc: '/assets/images/ico_s2.jpg',
        link: 'javascript:;',
        title: '看安防',
        text: '安防科技介绍视频'
      },
    ];
    this.whycenter = [
      {
        id: 1,
        href: 'javascript:;',
        text: '旧星云平台切换至新星云平台操作指南'
      },
      {
        id: 2,
        href: 'javascript:;',
        text: '旧星云平台切换至新星云平台操作指南'
      },
      {
        id: 3,
        href: 'javascript:;',
        text: 'IPC+嵌入式NVR+网络版软件管理平台+数字矩阵常见问题'
      },
      {
        id: 4,
        href: 'javascript:;',
        text: '软件管理平台常见问题'
      },
      {
        id: 5,
        href: 'javascript:;',
        text: '模拟摄像机常见问题'
      },
      {
        id: 6,
        href: 'javascript:;',
        text: '数字硬盘录像机常见问题'
      },
    ],

    this.filecenter = [
      {
        id: 1,
        href: 'javascript:;',
        text: 'FTP服务器使用说明'
      },
      {
        id: 2,
        href: 'javascript:;',
        text: ' 关注平安校园的升级改造--高教行业安防应用浅析'
      },
      {
        id: 3,
        href: 'javascript:;',
        text: '野外监控，让无“限”成为可能--星网安防野外监控方案简介'
      },
      {
        id: 4,
        href: 'javascript:;',
        text: ' 突破、创新、发展--从园区监控解决方案看网络监控的优势'
      },
      {
        id: 1,
        href: 'javascript:;',
        text: '创新另辟蹊径'
      },
    ];
  }

}
