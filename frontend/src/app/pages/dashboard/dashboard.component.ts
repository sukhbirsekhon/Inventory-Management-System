import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import Inventory from 'src/app/models/inventory';
import Product from 'src/app/models/product';
import User from 'src/app/models/user';
import Alert from 'src/app/models/alert';
import { AlertService } from 'src/services/alert.service';
import { InventoryService } from 'src/services/inventory.service';
import { ProductService } from 'src/services/product.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  inventories: Inventory[] = [];
  products: Product[] = [];
  users: User[] = [];
  alerts: Alert[] = [];
  inventoryId: string;

  constructor(private productService: ProductService,
    private inventoryService: InventoryService,
    private userService: UserService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.inventoryService.getInventories()
    .subscribe((inventories) => this.inventories = inventories as Inventory[]);

    this.productService.getProducts()
    .subscribe((products) => this.products = products as Product[]);

    // this.route.params.subscribe((params: Params) => {
    //   const inventoryId = "61c276086a705debc62ec37c";
    //   if (!inventoryId) return;
    //   this.productService.getProducts(inventoryId)
    //       .subscribe((products) => this.products = products as Product[]);
    // });

    this.userService.getUsers()
    .subscribe((users) => this.users = users as User[]);

    this.alertService.getAlerts()
    .subscribe((alerts) => this.alerts = alerts as Alert[]);
    }

}
