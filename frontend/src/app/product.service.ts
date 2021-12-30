import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import Inventory from './models/inventory';
import Product from './models/product';
import User from './models/user';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private webService: WebService) { }

  // USERS
  getUsers() {
    return this.webService.get('users');
  }

  createUsers(username: string, email: string, password: string) {
    return this.webService.post('users', { username, email, password });
  }

  findUserById(userId: string) {
    return this.webService.get(`users/${userId}`);
  }

  // INVENTORY
  getInventories() {
    return this.webService.get('inventories');
  }

  createInventory(inventoryName: string, inventoryDesc: string) {
    return this.webService.post('inventories', { inventoryName, inventoryDesc });
  }

  findInventoryById(inventoryId: string) {
    return this.webService.get(`inventories/${inventoryId}`);
  }

  updateInventory(inventoryId: string, inventory: Inventory) {
    return this.webService.patch(`inventories/${inventoryId}`, inventory)
  }

  // PRODUCT
  getProducts() {
    return this.webService.get(`products`);
  }

  getProductsByInventoryId(inventoryId: string) {
    return this.webService.get(`inventories/${inventoryId}/products`);
  }

  createProduct(inventoryId: string, productName: string, productBrand: string, productDesc: string,
    productSizeUnit: string, productSize: string, productFavorite: boolean, productUniqueId: string) {
    return this.webService.post(`inventories/${inventoryId}/products`, { productName, productBrand, productDesc,
      productSizeUnit, productSize, productFavorite, productUniqueId });
  }

  findProductById(inventoryId: string, productId: string) {
    return this.webService.get(`inventories/${inventoryId}/product/${productId}`);
  }

  updateProduct(inventoryId: string, productId: string, product: Product) {
    return this.webService.patch(`inventories/${inventoryId}/product/${productId}`, product)
  }
}
