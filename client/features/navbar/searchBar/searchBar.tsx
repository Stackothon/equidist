import * as React from "react";
import { useNavigate } from "react-router-dom";
import { FormControl, TextField } from "@mui/material";
import { getPlaceAsync } from "../../mapApp/mapAppSlice";
import { useAppDispatch } from "../../../app/store";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    event.preventDefault();
    if (event.keyCode == 13) {
      navigate("/home");
      dispatch(getPlaceAsync(event.target.value));
      event.target.value = "";
    }
  };

  return (
    <FormControl>
      <TextField
        required
        id="search-field"
        label="Enter Location"
        size="small"
        onKeyUp={handleKeyPress}
      ></TextField>
    </FormControl>
  );
};

export default SearchBar;
