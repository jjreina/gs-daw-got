export interface CharactersResponse {
  total_count: number;
  info: string;
  data: Character[];
}

export interface Character {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  family: string;
  image: string;
  imageUrl: string;
}
