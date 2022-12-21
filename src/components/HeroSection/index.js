import React from "react";

import { HeroContainer, HeroBg, Video } from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <Video loop autoPlay>
          <source src="src\components\videos\Video12.mp4" type="video/mp4" />
        </Video>
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
