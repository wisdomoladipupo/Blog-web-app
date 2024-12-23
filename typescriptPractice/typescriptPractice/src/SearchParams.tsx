import {
  useContext,
  useDeferredValue,
  useMemo,
  useState,
  useTransition,
} from "react";
import { useQuery } from "@tanstack/react-query";
import Results from "./Results";
import AdoptedPetContext from "./AdoptedPetContext";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";
import { Animal } from "./ApiResponsesTypes";
const ANIMALS: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "" as Animal,
    breed: "",
  });
  const [adoptedPet] = useContext(AdoptedPetContext);
  const [animal, updateAnimal] = useState("" as Animal);
  const [breeds] = useBreedList(animal);

  const [isPending, startTransition] = useTransition();

  const results = useQuery({
    queryKey: ["search",requestParams],
    queryFn: () => fetchSearch,
  });
  const pets = results?.data?.pets ?? [];
  const deferredPets = useDeferredValue(pets);

  const renderedPets = useMemo(
    () => <Results pets={deferredPets} />,
    [deferredPets]
  );

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const obj = {
            animal: formData.get("animal")?.toString() ?? "",
            breed: formData.get("breed")?.toString() ?? "",
            location: formData.get("location")?.toString() ?? "",
          };
          startTransition(() => setRequestParams(obj));
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input
            id="location"
            name="location"
            value={requestParams.location}
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            value={animal}
            onChange={(e) => {
              updateAnimal(e.target.value as Animal);
              setRequestParams({
                ...requestParams,
                animal: e.target.value as Animal,
              });
            }}
            onBlur={(e) => {
              updateAnimal(e.target.value as Animal);
              setRequestParams({
                ...requestParams,
                animal: e.target.value as Animal,
              });
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={requestParams.breed}
            name="breed"
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        {isPending ? (
          <div className="mini loading-pane">
            <h2 className="loader">🌀</h2>
          </div>
        ) : (
          <button>Submit</button>
        )}
      </form>
      {renderedPets}
    </div>
  );
};

export default SearchParams;
