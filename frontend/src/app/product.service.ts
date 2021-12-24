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

  createInventory(inventoryName: string, inventoryDesc: string) {
    return this.webService.post('inventories', { inventoryName, inventoryDesc });
  }

  findInventoryById(inventoryId: string) {
    return this.webService.get(`inventories/${inventoryId}`);
  }

  getProducts(inventoryId: string) {
    return this.webService.get(`inventories/${inventoryId}/products`);
  }

  createProduct(inventoryId: string, productName: string, productBrand: string, productDesc: string,
    productSizeUnit: string, productSize: string, productFavorite: boolean, productUniqueId: string) {
    return this.webService.post(`inventories/${inventoryId}/products`, { productName, productBrand, productDesc,
      productSizeUnit, productSize, productFavorite, productUniqueId });
  }
}
