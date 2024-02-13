import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css',
})
export class CharacterComponent {
  @Input()
  public character!: Character;
}
