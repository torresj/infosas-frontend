import { Injectable } from '@angular/core';
import Staff from "../models/staff";

@Injectable({
  providedIn: 'root'
})
export class StateService {
    staffs: Staff[] = [];
    name = '';
    surname = '';
    type = '';
    dni = '';
}
