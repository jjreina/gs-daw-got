import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../got/interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private url: string = 'https://game-of-thrones1.p.rapidapi.com/Characters';
  private options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6185a78aa2mshb04ae8991085691p1d093bjsnae8623070f4a',
      'X-RapidAPI-Host': 'game-of-thrones1.p.rapidapi.com',
    },
  };

  constructor(public http: HttpClient) {}

  public getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.url, this.options);
  }
}
