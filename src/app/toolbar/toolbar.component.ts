import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MENUS } from '../menus'

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
