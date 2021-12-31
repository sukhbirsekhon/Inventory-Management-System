import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import User from '../app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
}
