import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Character,
  CharactersResponse,
} from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private url: string = 'http://localhost:3000/characters';

  constructor(public http: HttpClient) {}

  public getAllCharacters(): Observable<CharactersResponse> {
    // return this.http.get<Character[]>(this.url, this.options);
    return this.http.get<CharactersResponse>(this.url);
  }

  public getCharacterByFamily(characters: Character[], family: string) {
    return family === 'All House'
      ? characters
      : characters.filter((character) => character.family.includes(family));
  }
}
