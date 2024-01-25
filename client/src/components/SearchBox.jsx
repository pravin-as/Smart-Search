import React from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ModelMenu from "./ModelMenu";

const SearchBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: "24%",
        padding: "5px",
        backgroundColor: "#303133",
        borderRadius: "25px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        marginTop: "50px",
        width: "50%",
        border: "2px solid #E96D64",
      }}
    >
      <TextField
        id="search-field"
        variant="outlined"
        fullWidth
        placeholder="Ask anything. What are you stuck on?"
        sx={{ marginBottom: "16px" }}
        InputProps={{
          sx: {
            color: "#E8EAEC",

            "& input": {
              "&::placeholder": {
                color: "white",
              },
              caretColor: "white",
              color: "white",
            },

            "&.Mui-focused": {
              fieldset: {
                borderColor: "transparent !important",
              },
            },
          },
        }}
      />
      <Box sx={{ display: "flex", gap: "16px", color: "#E8EAEC" }}>
        <IconButton sx={{ color: "#E8EAEC", marginLeft: '900%' }}>
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SearchBox;
