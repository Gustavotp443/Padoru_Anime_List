import React from "react";
import { FavoriteContext } from "../../common/context/favoriteProvider";
import { FVBTWrapper, Heart } from "./FVButton.styles";

const FavoriteButton = ({ id, animeName, image }: any) => {
  const [clicked, setClicked] = React.useState<boolean>(false);

  const { favorites, setFavorites } = React.useContext(FavoriteContext);

  const AnimeObject = {
    id: id,
    animeName: animeName,
    image: image
  };

  React.useEffect(() => {
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].id === AnimeObject.id) {
        setClicked(true);
        return;
      }
    }
    setClicked(false);
  }, [AnimeObject.id, favorites]);


  function addFavorites() {
    const favoritesClone = [...favorites];
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].id === AnimeObject.id) {
        favoritesClone.splice(favorites[i], 1);
        setFavorites(favoritesClone);
        return;
      }
    }
    favoritesClone.push(AnimeObject);
    setFavorites(favoritesClone);
  }

  return (
    <FVBTWrapper>
      <h2>Adicionar aos favoritos </h2>
      <Heart onClick={addFavorites} color={clicked} />
    </FVBTWrapper>
  );
};

export default FavoriteButton;
