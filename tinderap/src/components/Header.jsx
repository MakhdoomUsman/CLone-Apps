import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import Container from "./container/Container";
import ForumIcon from "@mui/icons-material/Forum";
const Header = () => {
  return (
    <div>
      <Container>
        <div className="z-50 flex justify-between items-center my-5 ">
          <IconButton>
            <PersonIcon fontSize="large" className="mr-5" />
          </IconButton>

          <img src="/tinder.png" alt="log" className="w-10" />
          <IconButton>
            <ForumIcon fontSize="large" className="ml-5" />
          </IconButton>
        </div>
      </Container>
    </div>
  );
};

export default Header;
