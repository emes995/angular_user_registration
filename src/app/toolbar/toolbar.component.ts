import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Menu } from '../menu';
import { MENUS } from '../menus'
>>>>>>> 7a9b848930d8dfbdd86ce47fc21af81a113d7169

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
=======
  menus: Menu[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menus = MENUS;
>>>>>>> 7a9b848930d8dfbdd86ce47fc21af81a113d7169
  }

}
