import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {
  public solutions_left_data: any;
  public solutions_right_data: any;
  public imgfullsrc: string;
  public imgfullwidth: string;

  constructor() {
    this.imgfullsrc = '/assets/images/banner_solutions.jpg';
    this.imgfullwidth = '960px';
  }

  ngOnInit() {
    this.solutions_left_data = [
      {
        id: 1,
        title: '特色解决方案',
        contentlist: [
          {
            text: '智能安防',
          },
          {
            text: '绿色节能',
          },
          {
            text: '车辆出入口管理系统',
          },
          {
            text: '食品安全监管',
          },
        ]
      },
      {
        id: 2,
        title: '行业解决方案',
        contentlist: [
          {
            text: '教育',
          },
          {
            text: '医疗',
          },
          {
            text: '商铺',
          },
          {
            text: '综合行业',
          },
        ]
      },
      {
        id: 3,
        title: '成功案例',
        contentlist: [
          {
            text: '普教案例',
          },
          {
            text: '高校案例',
          },
          {
            text: '医疗案例',
          },
          {
            text: '园区案例',
          },
          {
            text: '综合案例',
          },
        ]
      },
      {
        id: 4,
        title: '荣誉客户',
        contentlist: []
      }
    ];

    this.solutions_right_data = [
      {
        id: 1,
        title: '特色解决方案',
        src: 'solutions_3.jpg',
        contentlist: [
          {
            text: 'SUPER 3代车辆出入口管理...',
          },
          {
            text: '解密：众校园一起热追的透明厨房...',
          },
          {
            text: '透明厨房联网视频监控解决方案',
          },
          {
            text: '切片引擎“开启高效检索时代！',
          },
          {
            text: '星网安防“透明厨房“、助力校园...',
          },
          {
            text: '星网安防虚拟集控监控解决方案',
          },
        ],

      },
      {
        id: 2,
        title: '行业解决方案',
        src: 'solutions_2.jpg',
        contentlist: [
          {
            text: '知屏系列',
          },
          {
            text: '99%的高校都在用的解决方案',
          },
          {
            text: '智慧普教综合安防立体解决方案',
          },
          {
            text: '智慧高校综合安防立体解决方案',
          },
          {
            text: '现代养老院综合安防解决方案',
          },
          {
            text: '平安校园综合安防解决方案讲解视...',
          },
        ],

      },
      {
        id: 3,
        title: '成功案例',
        src: 'solutions_1.jpg',
        contentlist: [
          {
            text: '盐城高级职业学校智慧校园升级项...',
          },
          {
            text: '新疆生产兵团第二中学',
          },
          {
            text: '福州格致中学',
          },
          {
            text: '盐城市艺术高级中学（盐城四中）',
          },
          {
            text: '深圳第二高级中学',
          },
          {
            text: '广州怡宝饮料工厂平安建设项目',
          },
        ],

      }
    ];
  }

}
