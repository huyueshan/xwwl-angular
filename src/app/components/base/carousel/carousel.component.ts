import { Component, OnInit, OnDestroy } from '@angular/core';

import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('flyInOut', [
      // todo: 设定两组图片动画开始状态样式
      state('in', style({transform: 'translateX(-100%)'})),
      state('out', style({transform: 'translateX(0)'})),
      state('rin', style({transform: 'translateX(100%)'})),
      state('rout', style({transform: 'translateX(0)'})),
      // todo:设定两组图片动画完成后状态样式
      transition('* => in', [
        style({transform: 'translateX(0)'}),
        animate(400)
      ]),
      transition('* => out', [
        style({transform: 'translateX(100%)'}),
        animate(400)
       ]),
      transition('* => rin', [
        style({transform: 'translateX(0)'}),
        animate(400)
      ]),
      transition('* => rout', [
        style({transform: 'translateX(-100%)'}),
        animate(400)
       ])
    ])
  ]
})
export class CarouselComponent implements OnInit, OnDestroy {
  public state: string;
  public secontstate: string;
  private img_list; prev_img_index; current_img_index = 0;  next_img_index;
  private frist_img_name: string;
  private secontstate_img_name: string;
  public interval;
  private disable = true;
  private severse = false;

  constructor() {
    this.state = 'in';
    this.secontstate = 'out';
  }

  ngOnInit() {
    // todo: 轮播图片数据加载
    this.img_list = [
      {
        name: '201703131741583641'
      },
      {
        name: '201703131741431143'
      },
      {
        name: '201712190957078905'
      },
      {
        name: '201605091611361897'
      }
    ];
    this.runIntV();
  }

  // 组件销毁前清除定时器！   //解决了路由跳转计时器仍然工作的问题！！
  // **************************************************************
  ngOnDestroy() {
    this.clearInv();
  }

// 获取下一张显示的图片下标
  get_next_index(i) {
    let I;
    if (this.severse) {
      I = i !== null ? i : this.current_img_index - 1;
      this.next_img_index = I < 0 ? this.img_list.length - 1 : I;
    } else {
      I = i !== null ? i : this.current_img_index + 1;
      this.next_img_index = I >= this.img_list.length ? 0 : I;
    }
  }

  // 将下一张将要显示的图片添加到页面中，
  // 添加到将要进入页面的div容器中。
  get_img_name() {
      if (this.state === 'rout' || this.state === 'out') {
        this.frist_img_name = `../../../assets/images/${this.img_list[this.next_img_index].name}.jpg` ;
      } else {
        this.secontstate_img_name = `../../../assets/images/${this.img_list[this.next_img_index].name}.jpg` ;
      }
  }
  goto(n) {
    this.prev_img_index = this.current_img_index;
    this.get_next_index(n);
    this.current_img_index = this.next_img_index;
    this.get_img_name();

      // console.log(n,this.current_img_index, this.state,this.secontstate);
  }
  // 获取两个div容器动画方式函数
get_state() {
    if (this.severse) {
      this.state = this.state === 'rin' ? 'rout' : this.state === 'in' ? 'rout' : 'rin';
      this.secontstate = this.secontstate === 'rin' ? 'rout' : this.secontstate === 'in' ? 'rout' : 'rin';
    } else {
      this.state = this.state === 'in' ? 'out' : this.state === 'rin' ? 'out' : 'in';
      this.secontstate = this.secontstate === 'in' ? 'out' : this.secontstate === 'rin' ? 'out' : 'in';
    }
}

  toggleState(n) {
    if (!this.disable) {return; }
    this.get_state();
    this.goto(n);
    this.disable = false;
    // TODO： 在动画时间内阻止新的动画形成
    setTimeout(() => {
      this.disable = true;
    }, 400 );
  }
// 反向动画
  runSeverse(n) {
    this.severse = true;
    this.toggleState(n);
    this.severse = false;
  }

  runIntV() {
    this.interval = setInterval( () => {
      this.toggleState(null);
    }, 3500 );
  }


  clearInv() {
    clearInterval(this.interval);
  }

// 数 字小图标事件函数
  iconfn(i) {
    if (i === this.current_img_index) {return; }
    if (i > this.current_img_index) {
      this.toggleState(i);
    } else {
      this.runSeverse(i);
    }
  }



}

