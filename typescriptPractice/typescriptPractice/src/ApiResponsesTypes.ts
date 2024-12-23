export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

export interface Pet {
  pets: Array<Pet>;
  id: number;
  name: string;
  animal: Animal;
  description: string;
  breed: string;
  images: string[];
  city: string;
  state: string;
  location?: string;
}

export interface PetApiResposes {
  numbeOfResult: number;
  startInex: number;
  endIndex: number;
  hasNext: boolean;
  pets: Pet[];
}

export interface BreedListApiResponse {
  animal: Animal;
  breed: string[];
}
