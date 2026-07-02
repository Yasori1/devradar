import { useState } from "react";

interface Props {
  onSearch: (username: string) => void;
  loading: boolean;
}

export default function SearchBar({ onSearch, loading }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="GitHub kullanıcı adı ara... (örn: torvalds)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
        disabled={loading}
      />
      <button type="submit" disabled={loading} className="search-btn">
        {loading ? "Aranıyor..." : "Ara 🔍"}
      </button>
    </form>
  );
}