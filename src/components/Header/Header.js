import React from "react";
import "./Header.css";
import { createTheme, TextField, ThemeProvider } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
// import { debounce } from "lodash";

const categories = [
  { value: "English", label: "en" },
  { value: "Hindi", label: "hi" },
  { value: "Spanish", label: "es" },
  { value: "French", label: "fr" },
  { value: "Japanese", label: "ja" },
  { value: "Russian", label: "ru" },
  { value: "German", label: "de" },
  { value: "Italian", label: "it" },
  { value: "Korean", label: "ko" },
  { value: "Brazilian Portuguese", label: "pt-BR" },
  { value: "Arabic", label: "ar" },
  { value: "Turkish", label: "tr" },
];

const Header = ({
  setCategory,
  category,
  setWord,
  word,
  setMeanings,
  LightTheme,
}) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: LightTheme ? "#282c34" : "#fff",
      },
      type: LightTheme ? "light" : "dark",
    },
  });

  const handleChange = (e) => {
    setCategory(e.target.value);
    setWord("");
    setMeanings([]);
  };

  // const handleText = debounce((text) => {
  //   setWord(text);
  // }, 1500);
  return (
    <div className="header">
      <span className="title" style={{ marginTop: "20px" }}>
        {" "}
        {word ? word : "meaning of"}
      </span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a Word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e)}
            className="select"
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
