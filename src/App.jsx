import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState([]);
  return (
    <div className="flex flex-col gap-[20px] items-center justify-center h-[100vh] w-full font-bricolage">
      <h1 className="text-3xl font-medium">Chips Input</h1>

      <input
        placeholder="Enter Chips and Press Enter"
        className="border rounded-md py-[5px] px-[10px] w-[300px] placeholder:text-center"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && input !== "") {
            setChips([...chips, { id: "", name: input }]);
            setInput("");
          }
        }}
      />

      {chips?.length > 0 &&
        chips?.map((chip) => <div key={chip?.id}>{chip?.name}</div>)}
    </div>
  );
}

export default App;
