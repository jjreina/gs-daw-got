import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterComponent } from './components/character/character.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MainPageComponent,
    CharactersListComponent,
    CharacterComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [MainPageComponent],
})
export class GotModule {}
