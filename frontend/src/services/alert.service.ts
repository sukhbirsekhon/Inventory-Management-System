import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import Alert from '../app/models/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private webService: WebService) { }

  getAlerts() {
    return this.webService.get(`alerts`);
  }

  createAlert(inventoryId: string, productId: string, lowQuantity: string, highQuantity: string,
    lowQuantityPercentage: string, highQuantityPercentage: string) {
      return this.webService.post(`alerts/inventories/${inventoryId}/products/${productId}`, { lowQuantity, highQuantity,
        lowQuantityPercentage, highQuantityPercentage });
  }

  getAlertsByProductId(productId: string) {
    return this.webService.get(`alert/products/${productId}`);
  }

  getAlertsByInventoryId(inventoryId: string) {
    return this.webService.get(`alerts/inventories/${inventoryId}`);
  }

  updateAlert(productId: string, alert: Alert) {
    return this.webService.patch(`alerts/product/${productId}`, alert)
  }

  deleteAlert(productId: string) {
    return this.webService.delete(`alerts/products/${productId}`);
  }
}
