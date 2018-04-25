import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imgfull',
  templateUrl: './imgfull.component.html',
  styleUrls: ['./imgfull.component.css']
})
export class ImgfullComponent implements OnInit {
  @Input() src: string;
  @Input() width: string;
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
