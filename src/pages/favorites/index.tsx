import React from "react";
import { Link } from "react-router-dom";
import { FavoriteContext } from "../../common/context/favoriteProvider";
import { FavoriteContainer, GoToItem, Image, ImageWrapper, Text } from "./favoritePage.styles";
import { AiOutlineRight } from "react-icons/ai";
const Favorites = () => {
  const { favorites } = React.useContext(FavoriteContext);


  return (
    <FavoriteContainer>
      <ul>{favorites.sort().map((favorite: any) => (
        <li key={favorite.id}>
          <ImageWrapper>
            <Image src={favorite.image} alt={favorite.name} />
          </ImageWrapper>
          <Text>{`#${favorite.id} - ${favorite.animeName}`}</Text>
          <GoToItem>
            <Link to={`/anime/${favorite.id}`}><AiOutlineRight /></Link>
          </GoToItem>
        </li>
      ))}</ul>
    </FavoriteContainer >
  );
};

export default React.memo(Favorites);
