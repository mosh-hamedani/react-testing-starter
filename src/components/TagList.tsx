import delay from "delay";
import { useEffect, useState } from "react";

const TagList = () => {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      await delay(500);
      setTags(["tag1", "tag2", "tag3"]);
    };
    fetchTags();
  });

  return (
    <ul>
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
};

export default TagList;
