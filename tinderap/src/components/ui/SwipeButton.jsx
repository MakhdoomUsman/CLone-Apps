import React from "react";
import Container from "../container/Container";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";
const SwipeButton = () => {
  return (
    <div className="fixed bottom-[10vh] w-full flex justify-center">
      <Container>
        <div className="flex justify-evenly w-full  items-center">
          <IconButton className="swipeButtons__repeat all-side-shadow  ">
            <ReplayIcon fontSize="large" />
          </IconButton>
          <IconButton className="swipeButtons__ all-side-shadow   ">
            <CloseIcon fontSize="large" />
          </IconButton>
          <IconButton className="swipeButtons__ all-side-shadow   ">
            <StarRateIcon fontSize="large" />
          </IconButton>
          <IconButton className="swipeButtons__ all-side-shadow   ">
            <FavoriteIcon fontSize="large" />
          </IconButton>
          <IconButton className="swipeButtons__ all-side-shadow   ">
            <FlashOnIcon fontSize="large" />
          </IconButton>
        </div>
      </Container>
    </div>
  );
};

export default SwipeButton;
