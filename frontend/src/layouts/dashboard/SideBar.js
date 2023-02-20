import React from "react";
import { Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../../redux/slices/auth";
const Sidebar = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  
  return (
    <>
      <Stack p={3} spacing={3}>
        Sidebar----------------------
        <Button
          variant="outlined"
          onClick={() => {
            dispatch(LogoutUser());
          }}
        >
          Logout User
        </Button>
      </Stack>
    </>
  );
};

export default Sidebar;
