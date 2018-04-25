import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public newslist: string[];
  public tongdaolist: any;
  public tuijian_list;
  public tongdao: any = 'kuaisu tongdao';
  constructor() {
      this.newslist = [
          '海西巾帼迎盛会，星网锐捷获殊荣',
          '盐城教育逢盛事、星网创新领潮流',
          '工信部赛迪研究院莅临星网锐捷开展“中国2025”专题调研',
          '福建日报头版头条：星网锐捷创新之核揭秘',
          '关于“星云安全服务平台”升级的通告',
          '星网安防：构建可视、可感、可控的透明厨房',
          '星网安防面向全国诚征销售事业合作伙伴',
          '金秋收获季：星网2+1'
      ];
      this.tuijian_list = [
        {
            'id' : 1,
            'src' : 'assets/images/201408151216305579.jpg',
        },
        {
            'id' : 2,
            'src' : 'assets/images/201604280903126338.jpg',
        },
        {
            'id' : 3,
            'src' : 'assets/images/201604251500378279.jpg',
        }
      ];
      this.tongdaolist = [
        {
            'label': '软件下载',
            'value': '软件下载'
        },
        {
            'label': '技术文档中心',
            'value': '技术文档中心'
        },
        {
            'label': '常见问题',
            'value': '常见问题'
        },
        {
            'label': '全国服务网点',
            'value': '全国服务网点'
        }
      ];
   }

  ngOnInit() {
  }

  click() {
      console.log('click me!');
  }
}
