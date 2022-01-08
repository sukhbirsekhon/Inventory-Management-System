import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import Inventory from 'src/app/models/inventory';
import Product from 'src/app/models/product';
import User from 'src/app/models/user';
import Alert from 'src/app/models/alert';
import { AlertService } from 'src/services/alert.service';
import { InventoryService } from 'src/services/inventory.service';
import { ProductService } from 'src/services/product.service';
import { UserService } from 'src/services/user.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';
import { __values } from 'tslib';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  inventories: Inventory[] = [];
  inventoryIds: Inventory[] = [];
  products: Product[] = [];
  products2: Product[] = [];
  products3: Product[] = [];
  products4: Product[] = [];
  users: User[] = [];
  alerts: Alert[] = [];
  inventoryId: string;

  constructor(private productService: ProductService,
    private inventoryService: InventoryService,
    private userService: UserService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
    private observer: BreakpointObserver) { }

  ngOnInit(): void {
    this.inventoryService.getInventories()
    .subscribe((inventories) => this.inventories = inventories as Inventory[]);

    this.productService.getProducts()
    .subscribe((products) => this.products = products as Product[]);


    // this.route.params.subscribe((params: Params) => {
    //   const inventoryId = "61c53da9e6af94689606a08b";
    //   if (!inventoryId) return;
    //   this.productService.getProductsByInventoryId(inventoryId)
    //       .subscribe((products2) => this.products2 = products2 as Product[]);
    // });

    this.userService.getUsers()
    .subscribe((users) => this.users = users as User[]);

    this.alertService.getAlerts()
    .subscribe((alerts) => this.alerts = alerts as Alert[]);
  }

 /**
  * name
  */
 getSortedProducts() {
  this.products3 = []

  return new Promise(resolve => {
    this.inventories.forEach( async (value) => {
      this.products2 = []
      await this.productService.getProductsByInventoryId(value._id).forEach((vv) => {
        this.products2= vv as Product[];
        this.products3.push.apply(this.products3, this.products2)
      })
      resolve(this.products3)
    })
  })
 }


 async yoyo() {
   console.log(this.products3);
  // this.getSortedProducts().then((some) => console.log(some)).catch(() => {
  //   console.log('something didnt work')});
 }

  ngAfterViewInit() {
    this.observer
    .observe(['(max-width: 800px)'])
    .pipe(delay(1))
    .subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

}
