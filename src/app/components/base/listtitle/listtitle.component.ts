import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listtitle',
  templateUrl: './listtitle.component.html',
  styleUrls: ['./listtitle.component.css']
})
export class ListtitleComponent implements OnInit {
  @Input() title: string;
  @Input() isrighthide?: boolean;
  @Input() href?: string;
  constructor() { }

  ngOnInit() {
  }

}
