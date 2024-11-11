import { useState } from "react";
import PetCard from "./PetCard";

interface Props {
  onSelectItem: (item: string) => void;
}

function PetCollection({ onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const animals = [
    {
      id: 1,
      name: "Sparky",
      imageUrl: "D1.jpg",
    },
    {
      id: 2,
      name: "Snowy",
      imageUrl: "D2.jpg",
    },
    {
      id: 3,
      name: "Yappy",
      imageUrl: "D3.jpg",
    },
  ];

  return (
    <>
      {animals.map((dog) => (
        <PetCard key={dog.name} name={dog.name} imageUrl={dog.imageUrl} />
      ))}
    </>
  );
}

export default PetCollection;
