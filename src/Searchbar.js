import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Searchbar = () => {
  const [myOptions, setMyOptions] = useState([]);

  const getDataFromAPI = () => {
    console.log("Options Fetched from API");

    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.data);
        const employeeNames = res.data.map(
          (employee) => employee.employee_name
        );
        setMyOptions(employeeNames);
      })
      .catch((error) => {
        console.error("Error fetching options:", error);
      });
  };

  return (
    <div style={{ marginLeft: "40%", marginTop: "60px" }}>
      <h3>hello enter your query!</h3>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={getDataFromAPI}
            variant="outlined"
            label="Search Box"
          />
        )}
      />
    </div>
  );
};

export default Searchbar;
