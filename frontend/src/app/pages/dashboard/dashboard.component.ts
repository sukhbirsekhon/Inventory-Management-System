import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import Inventory from 'src/app/models/inventory';
import Product from 'src/app/models/product';
import User from 'src/app/models/user';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  inventories: Inventory[] = [];
  products: Product[] = [];
  users: User[] = [];
  inventoryId: string;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.productService.getInventories()
    .subscribe((inventories) => this.inventories = inventories as Inventory[]);

    this.route.params.subscribe((params: Params) => {
      const inventoryId = "61c276086a705debc62ec37c";
      if (!inventoryId) return;
      this.productService.getProducts(inventoryId)
          .subscribe((products) => this.products = products as Product[]);
    });

    this.productService.getUsers()
    .subscribe((users) => this.users = users as User[]);

    }

}
