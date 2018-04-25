import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';


@Component({
  selector: 'app-productcontent',
  templateUrl: './productcontent.component.html',
  styleUrls: ['./productcontent.component.css']
})
export class ProductcontentComponent implements OnInit {
  public productdata: object = {};
  public productid: any;


  constructor(
    private route: ActivatedRoute,
    private http: Http
  ) { }

  ngOnInit() {
    this.getroutparam();
    this.getproductdata(this.productid);

  }
  // 获取路由参数
  getroutparam() {
    this.route.params.subscribe(data => this.productid = data.id);
    console.log(this.productid);
  }
  //  获取数据
  getproductdata(id) {
    let url = `assets/productdata/${id}.json`;
    this.http.get(url)
      .subscribe(data => {
        this.productdata = data.json();
        // console.log(typeof this.productdata.tabs);
      }, err => {
        console.log(err);
        console.log('请求失败');
      });
    console.log(url);
  }
  //tab选项更新时触发
  _tabChange(e) {
    console.log(e.index);
  }


}
