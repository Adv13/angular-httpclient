import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  items: any;
  loaded: boolean;
  constructor(
    private ItemsService: ItemsService) {
    this.loaded = false;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.loaded = false;
    this.ItemsService.getItems('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        items => {
          this.items = items;
          this.loaded = true;
        });
  }

  resetUsers(): void {
    this.items = null;
    this.loaded = true;
  }

}