import { useState } from "react";

interface Props {
  onChange: (text: string) => void;
}

const SearchBox = ({ onChange }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="input"
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && searchTerm) onChange(searchTerm);
        }}
      />
    </div>
  );
};

export default SearchBox;
