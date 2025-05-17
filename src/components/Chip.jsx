// Icon
import { IoIosClose } from "react-icons/io";

const Chip = ({ chip, handleDeleteChip }) => {
  return (
    <div
      key={chip?.id}
      className="capitalize flex gap-[10px] items-center border rounded-full py-[3px] px-[10px]"
    >
      {chip?.name}
      <IoIosClose
        className="text-[22px] cursor-pointer"
        onClick={handleDeleteChip}
      />
    </div>
  );
};

export default Chip;
