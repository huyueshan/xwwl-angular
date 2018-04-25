import { Component, OnInit } from '@angular/core';

// import { ActivatedRoute } from '@angular/router';
// import { Http } from '@angular/http';
import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observer } from 'rxjs';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  public productslist: any;
  public productdata: any = {};
  public productdatatietle: string;
  public productdatatext: string;
  public productdataimgsrc: string;
  public tabs: any;
  public productid: string = '111';
  public productselectdata: any;

  constructor(
    private route: ActivatedRoute,
    // private http: Http,
    private http: HttpClient,
    private products: ProductService,
    private router: Router
  ) {
    // this.productdata={};
  }

  getroutparam() {
    this.route.params.subscribe(data => this.productid = data.id);
  }
  getproductdata() {
    let url = `assets/productdata/${this.productid}.json`;
    this.products.getproducts(url)
      .subscribe(data => {
        this.productdata = data;
        this.productdatatietle = this.productdata.title;
        this.productdatatext = this.productdata.text;
        this.productdataimgsrc = this.productdata.imgsrc;
      }, err => {
        console.log(err);
        console.log('请求失败');
      });
  }

  productselect(id) {
    this.router.navigate(['/productpage', id]);
    this.productid = id.toString();
    this.getproductdata();
    console.log(this.productdata);

  }

  ngOnInit() {
    this.getroutparam();
    this.getproductdata();

    this.productselectdata = [
      {
        "id": 222,
        "title": "222",
        "url": "/productpage/222",
        "age": "22"
      },
      {
        "id": 111,
        "title": "产品详情",
        "url": "/productpage/111",
        "age": "22"
      },
      {
        "id": 222,
        "title": "产品中心",
        "url": "/products",
        "age": "26"
      },
      {
        "id": 111,
        "title": "解决方案",
        "url": "/solutions",
        "age": "27"
      },
      {
        "id": 222,
        "title": "合作伙伴",
        "url": "/partners",
        "age": "27"
      },
      {
        "id": 111,
        "title": "服务与支持",
        "url": "/services",
        "age": "27"
      },
      {
        "id": 222,
        "title": "关于我们",
        "url": "/aboutus",
        "age": "27"
      }
    ];

    this.productslist = [
      {
        id: 1,
        type: '摄像机产品',
        list: [
          '模拟半球摄像机',
          '模拟一体化摄像机',
          '模拟球型摄像机',
          '专用模拟摄像机',
          '网络枪式摄像机',
          '网络半球摄像机',
          '网络一体化摄像机',
          '网络球型摄像机',
          '一体化云台摄像机',
          '专用摄像机',
        ],
      },
      {
        id: 2,
        type: '传输类产品',
        list: [
          '安防专用交换机',
          '光纤收发器',
        ],
      },
      {
        id: 3,
        type: '存储类产品',
        list: [
          '网络硬盘录像机',
          '安防专用IPSAN',
          '数字硬盘录像机',
        ],
      },
      {
        id: 4,
        type: '解码与显示',
        list: [
          '高清视频解码器',
          '网络矩阵',
          '数字矩阵',
          '显示与控制',
        ],
      },
      {
        id: 5,
        type: '管理平台与分控',
        list: [
          '管理平台',
          '平台软件',
          '智能多维主机',
          '智能分控',
        ],
      },
      {
        id: 6,
        type: '周边智能设备',
        list: [
          '环境感知设备',
          '多媒体辅助工具',
        ],
      },
      {
        id: 7,
        type: '综合安防单元',
        list: [
          '出入口管理系统',
          '节能管理系统',
          '智慧管理系统',
          '智能多目标跟踪系统',
          '智能可视对讲系统',
        ],
      },
      {
        id: 8,
        type: '教育信息化应用',
        list: [
          '易昌云终端系列',
          '知屏系列',
          '物联智电系统',
        ],
      },
    ];
  }

  _tabChange(e) {
    console.log(e.index);
  }

}
