import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productclassdata: any;
  constructor() { }

  ngOnInit() {
    this.productclassdata = [
      {
        id: 1,
        src: '201406031635117710.jpg',
        child: [
          {
            title: '模拟摄像机',
            path: '/products'
          },
          {
            title: '网络摄像机',
            path: '/products'
          }
        ]

      },
      {
        id: 2,
        src: '201406031636064727.jpg',
        child: [
          {
            title: '安防专用交换机',
            path: '/products'
          },
          {
            title: '光纤收发器',
            path: '/products'
          }
        ]

      },
      {
        id: 3,
        src: '201406031636195475.jpg',
        child: [
          {
            title: '网络硬盘录像机',
            path: '/products'
          },
          {
            title: '安防专用IPSAN',
            path: '/products'
          },
          {
            title: '数字硬盘录像机',
            path: '/products'
          }
        ]

      },
      {
        id: 4,
        src: '201406031659588002.jpg',
        child: [
          {
            title: '高清视频解码器',
            path: '/products'
          },
          {
            title: '网络矩阵',
            path: '/products'
          },
          {
            title: '数字矩阵',
            path: '/products'
          },
          {
            title: '显示与控制',
            path: '/products'
          },
        ]

      },
      {
        id: 5,
        src: '201603290923371861.jpg',
        child: [
          {
            title: '管理平台',
            path: '/products'
          },
          {
            title: '平台软件',
            path: '/products'
          },
          {
            title: '智能多维主机',
            path: '/products'
          },
          {
            title: '智能分控',
            path: '/products'
          },
        ]

      },
      {
        id: 6,
        src: '201601041127464394.jpg',
        child: [
          {
            title: '环境感知设备',
            path: '/products'
          },
          {
            title: '多媒体辅助工具',
            path: '/products'
          }
        ]

      },
      {
        id: 7,
        src: '201505260926123155.jpg',
        child: [
          {
            title: '出入口管理系统',
            path: '/products'
          },
          {
            title: '节能管理系统',
            path: '/products'
          },
          {
            title: '智慧管理系统',
            path: '/products'
          },
          {
            title: '智能多目标跟踪系统',
            path: '/products'
          },
          {
            title: '智能可视对讲系统',
            path: '/products'
          },
        ]

      },
      {
        id: 8,
        src: '201711241212352691.jpg',
        child: [
          {
            title: '易昌云终端系列',
            path: '/products'
          },
          {
            title: '知屏系列',
            path: '/products'
          },
          {
            title: '物联智电系统',
            path: '/products'
          }
        ]

      },
    ];
  }

}
