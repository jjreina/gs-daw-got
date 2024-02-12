import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../servicies/characters.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent implements OnInit {
  public characters: Character[] = [];
  constructor(private charactersService: CharactersService) {}
  ngOnInit(): void {
    this.getAllCharacters();
    console.log('Golaa' + this.characters);
  }

  private getAllCharacters() {
    this.charactersService
      .getAllCharacters()
      .subscribe((responese: Character[]) => {
        this.characters = responese;
      });
  }
}
