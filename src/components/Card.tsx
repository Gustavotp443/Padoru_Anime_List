import React from "react";
import { CardContainer } from "./Card.style";
import { AnimeResp } from "../types/Types";

const Card = ({ anime }: { anime: AnimeResp }) => {
  return (
    <>
      <CardContainer style={{
        backgroundImage: `url(${anime.attributes.posterImage.large})`
      }}>
        <p>{anime.attributes.canonicalTitle}</p>
      </CardContainer>

    </>
  );
};

export default React.memo(Card);
