import { Component } from '@angular/core';
// import { HttpEvent, HttpEventType } from '@angular/common/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
              public authService: AuthService) {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
    this.dataStorageService.storeShoppingList()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
    this.dataStorageService.getShoppingList();
  }

  onLogout() {
    this.authService.logout();
  }
}