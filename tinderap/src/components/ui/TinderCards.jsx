import React, { useState } from "react";
import Container from "../container/Container";
import TinderCard from "react-tinder-card";
const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://source.unsplash.com/random/1920x1080/?wallpaper,landscape",
    },
    {
      name: "Elon Musk",
      url: "https://source.unsplash.com/random/1920x1080/?wallpaper,landscape",
    },
    {
      name: "Elon Musk",
      url: "https://source.unsplash.com/random/1920x1080/?wallpaper,landscape",
    },
  ]);
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + "left to screen");
  };
  return (
    <div className=" ">
      <Container>
        <div className="flex justify-center mt-[10vh]">
          {people.map((data) => (
            <TinderCard
              className="absolute "
              key={data.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, data.name)}
              onCardLeftScreen={() => outOfFrame(data.name)}
            >
              <div
                className="relative w-[600px] p-5 max-w-[85vw] h-[60vh] shadow-[50px] rounded-3xl "
                style={{ backgroundImage: `url(${data.url})` }}
              >
                <h1 className="text-xl font-bold absolute bottom-5 left-10">
                  {data.name}
                </h1>
              </div>
            </TinderCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TinderCards;
