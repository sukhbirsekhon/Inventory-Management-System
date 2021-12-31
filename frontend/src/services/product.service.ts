import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import Inventory from '../app/models/inventory';
import Product from '../app/models/product';
import User from '../app/models/user';
import Alert from '../app/models/alert';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private webService: WebService) { }

  getProducts() {
    return this.webService.get(`products`);
  }

  getProductsByInventoryId(inventoryId: string) {
    return this.webService.get(`inventories/${inventoryId}/products`);
  }

  createProduct(inventoryId: string, productName: string, productBrand: string, productDesc: string,
    productSizeUnit: string, productSize: string, productFavorite: boolean, productUniqueId: string, productImage: string) {
    return this.webService.post(`inventories/${inventoryId}/products`, { productName, productBrand, productDesc,
      productSizeUnit, productSize, productFavorite, productUniqueId, productImage });
  }

  findProductById(inventoryId: string, productId: string) {
    return this.webService.get(`inventories/${inventoryId}/product/${productId}`);
  }

  updateProduct(inventoryId: string, productId: string, product: Product) {
    return this.webService.patch(`inventories/${inventoryId}/product/${productId}`, product)
  }

  deleteProduct(inventoryId: string, productId: string) {
    return this.webService.delete(`inventories/${inventoryId}/product/${productId}`);
  }
}
