import { Button, Link, Stack } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
const CreateManual = () => {
  return (
    <>
      <div className="Listings">
        <div className="heading_section">
          <Button variant="outlined" component={RouterLink} to="/add_address">
            Create Manually
          </Button>
        </div>
      </div>
      {/* <Stack justifyContent={'center'} alignContent={'center'}>
      <Button variant="outlined" component={RouterLink} to="/add_address">Create Manually</Button>
      </Stack> */}
    </>
  );
};

export default CreateManual;
