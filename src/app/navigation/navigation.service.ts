import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuCategory } from './navigation.model';

@Injectable()
export class NavigationService {
  menuCategories: BehaviorSubject<MenuCategory[]> = new BehaviorSubject([]);
}
