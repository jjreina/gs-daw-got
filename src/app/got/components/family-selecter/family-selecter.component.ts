import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-family-selecter',
  templateUrl: './family-selecter.component.html',
  styleUrl: './family-selecter.component.css',
})
export class FamilySelecterComponent {
  @Output()
  public familyEvent: EventEmitter<string> = new EventEmitter<string>();

  public emitFamily(family: string): void {
    this.familyEvent.emit(family);
  }
}
