import { useEffect, useState } from "react";
import { useFetchSearchResult } from "../hooks/useFetchSearchResult";
import { StoryCard } from "../components/UI/Cards/StoryCard";

export const Search = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState(null);
  const { result, loading } = useFetchSearchResult(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input.trim());
  };

  return (
    <div className="flex flex-col p-10 gap-4">
      <h1 className="font-extrabold">Search stories</h1>
      <form
        action="submit"
        method="post"
        onSubmit={handleSubmit}
        className="flex flex-row gap-2"
      >
        <input
          className="border rounded-md"
          type="search"
          value={input}
          name="input"
          id=""
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="">Go</button>
      </form>
      {loading && <p>Loading ...</p>}
      {result &&
        result.map((story) => (
          <StoryCard key={story.id} story={story} showDate={true}></StoryCard>
        ))}
    </div>
  );
};
