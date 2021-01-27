import { Component, OnInit } from '@angular/core';
import { Menu } from '../dataview/menu';
import { MENUS } from '../dataview/menus'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  menus: Menu[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menus = MENUS;
  }

}
