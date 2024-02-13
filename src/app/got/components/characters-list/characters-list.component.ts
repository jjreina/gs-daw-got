import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css',
})
export class CharactersListComponent {
  @Input()
  public characters!: Character[];
}
