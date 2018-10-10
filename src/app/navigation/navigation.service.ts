import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from './navigation.model';

@Injectable()
export class NavigationService {
  menuData: BehaviorSubject<MenuItem[]> = new BehaviorSubject([]);
}
