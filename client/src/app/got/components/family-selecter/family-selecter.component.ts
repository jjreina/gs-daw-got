import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../interfaces/button.interfaces';

@Component({
  selector: 'app-family-selecter',
  templateUrl: './family-selecter.component.html',
  styleUrl: './family-selecter.component.css',
})
export class FamilySelecterComponent {
  @Output()
  public familyEvent: EventEmitter<string> = new EventEmitter<string>();

  public houses: Button[] = [
    { name: 'House Targaryen', color: 'btn-primary' },
    { name: 'House Stark', color: 'btn-secondary' },
    { name: 'House Baratheon', color: 'btn-success' },
    { name: 'House Lannister', color: 'btn-danger' },
    { name: 'House Greyjoy', color: 'btn-warning' },
    { name: 'All House', color: 'btn-info' },
  ];

  public emitFamily(family: string): void {
    this.familyEvent.emit(family);
  }
}
