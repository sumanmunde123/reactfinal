import React, { useState } from "react";
import { UpdateDetails } from "../Redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
export const AddCity = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [population, setPopulation] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    // alert("Country Added Successfully");
    const details = {
      country_name: country,
      city_name: city,
      population: population,
    };
    dispatch(UpdateDetails(details));
  };

  return (
    <div style={{
      margin:"100px",
      marginRight:"250px"
    }}>
    <TextField label="Enter Country Name" color="secondary" focused value={country}
        onChange={(e) => {
          setCountry(e.target.value);
        }} />
     
      <br />
      <br />
      <TextField label="Enter City Name" color="success" focused  value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
         />
      <br />
      <br />
      <TextField label="Total Population" color="warning" focused  value={population}
        onChange={(e) => {
          setPopulation(e.target.value);
        }}
         />
     
      <br />
      <br />
      
      <Button onClick={handleSubmit} variant="contained" >
  Add Now
</Button>
    </div>
  );
};

