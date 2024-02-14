import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../servicies/characters.service';
import {
  Character,
  CharactersResponse,
} from '../interfaces/character.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent implements OnInit {
  public charactersAll: Character[] = [];
  public charactersByFamily: Character[] = [];

  constructor(private charactersService: CharactersService) {}
  ngOnInit(): void {
    this.getAllCharacters();
  }

  private getAllCharacters() {
    this.charactersService
      .getAllCharacters()
      .subscribe((responese: CharactersResponse) => {
        console.log(responese);

        this.charactersAll = responese.data;
        this.charactersByFamily = responese.data;
      });
  }

  public getCharacterByFamily(family: string) {
    this.charactersByFamily = this.charactersService.getCharacterByFamily(
      this.charactersAll,
      family
    );
  }
}
