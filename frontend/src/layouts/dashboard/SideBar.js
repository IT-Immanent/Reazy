import React from "react";
import { Button, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { LogoutUser } from "../../redux/slices/auth";
const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Stack p={3} spacing={3}>
        Sidebar----------------------
        <Button
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
