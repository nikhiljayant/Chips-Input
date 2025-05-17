import { useEffect, useState } from "react";
// Dependency
import { v4 as uuidv4 } from "uuid";
// Component
import Chip from "./Chip";

const ChipsInput = () => {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState(
    localStorage.getItem("chips")
      ? JSON.parse(localStorage.getItem("chips"))
      : []
  );

  useEffect(() => {
    if (chips?.length > 0) {
      localStorage.setItem("chips", JSON.stringify(chips));
    }
  }, [chips]);

  const handleDeleteChip = (id) => {
    const newChips = chips.filter((chip) => chip.id !== id);
    setChips(newChips);
  };

  return (
    <div className="flex flex-col gap-[20px] items-center justify-center h-[100vh] w-full font-bricolage">
      <h1 className="text-3xl font-medium">Chips Input</h1>

      <input
        placeholder="Enter Chip and Press Enter"
        className="border rounded-md py-[5px] px-[10px] w-[300px] placeholder:text-center"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && input !== "") {
            setChips([...chips, { id: uuidv4(), name: input }]);
            setInput("");
          }
        }}
      />

      {chips?.length > 0 && (
        <div className="flex flex-wrap gap-[20px] max-w-[50%] max-h-[300px] overflow-y-auto">
          {chips?.map((chip) => (
            <Chip
              chip={chip}
              handleDeleteChip={() => handleDeleteChip(chip?.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChipsInput;
