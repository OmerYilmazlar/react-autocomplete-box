import React, { useState } from "react";

export default function AutoCompleteText() {
  const [items, setItems] = useState(["dog", "cat", "giraffe", "snake"]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const suggestionHandler = (e) => {
    const value = e.target.value;

    if (value.length >= 0) {
      const regex = new RegExp(`^${value}`, "i");
      const suggestion = items.sort().filter((x) => regex.test(x));
      setSuggestions(suggestion);
      setText(value)
    }

    if (value.length === 0) {
      setSuggestions([]);
    }
  };

  const selectSuggestion = (value) => {
    setText(value);
    setSuggestions([]);
    document.getElementById("input-field").focus()
  };

  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    } else {
      return (
        <ul>
          {suggestions.map((item) => (
            <li onClick={() => selectSuggestion(item)}>{item}</li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div>
      <input
      id='input-field'
        type="text"
        onChange={(suggestionHandler)}
        value={text}
        autoFocus
      ></input>
      {renderSuggestions()}
    </div>
  );
}
