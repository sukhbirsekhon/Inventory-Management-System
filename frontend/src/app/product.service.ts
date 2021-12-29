import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private webService: WebService) { }

  getUsers() {
    return this.webService.get('users');
  }

  createUsers(username: string, email: string, password: string) {
    return this.webService.post('users', { username, email, password });
  }

  findUserById(userId: string) {
    return this.webService.get(`users/${userId}`);
  }

  getInventories() {
    return this.webService.get('inventories');
  }

  createInventory(inventoryName: string, inventoryDesc: string) {
    return this.webService.post('inventories', { inventoryName, inventoryDesc });
  }

  findInventoryById(inventoryId: string) {
    return this.webService.get(`inventories/${inventoryId}`);
  }

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
}
