import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import Inventory from '../app/models/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

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

  updateInventory(inventoryId: string, inventory: Inventory) {
    return this.webService.patch(`inventories/${inventoryId}`, inventory);
  }

  deleteInventory(inventoryId: string){
    return this.webService.delete(`inventories/${inventoryId}`);
  }
}
