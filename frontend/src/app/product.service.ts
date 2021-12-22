import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private webService: WebService) { }

  getInventories() {
    return this.webService.get('inventories');
  }

  createInventory(inventoryName: string) {
    return this.webService.post('inventories', { inventoryName });
  }

  getProducts(inventoryId: string) {
    return this.webService.get(`inventories/${inventoryId}/products`);
  }

  createProduct(inventoryId: string, productName: string) {
    return this.webService.post(`inventories/${inventoryId}/products`, { productName });
  }
}
