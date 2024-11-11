import PetCard from "./components/PetCard";
import PetCollection from "./components/PetCollection";

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <PetCollection onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
