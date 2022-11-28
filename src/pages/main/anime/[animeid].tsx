import React, { memo, useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import ComebackButton from "../../../components/BackButton";
import FavoriteButton from "../../../components/Favorite";
import Loading from "../../../components/Loading";
import api from "../../../services/api";
import { AnimePageContainer, TopWrapper, AnimeBanner, Title, AnimeBannerWrapper, DetailedScore, Score, Sinopsis, MoreDetails, MoreDetailsText, Favorite, BottomWrapper, MFwrapper } from "./animeid.styles";



const AnimePage: React.FC = () => {


  const [anime, setAnime] = useState<any>([]);
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [animeImage, setAnimeImage] = useState<any>([]);
  const [details, setDetails] = useState<boolean>(false);




  const getData = useCallback(async function () {
    setLoading(true);
    try {
      const response = await api.get(`/anime/${id}`);
      const { data } = response.data;
      const { attributes } = data;
      const { posterImage } = attributes;

      setAnime(attributes);
      setAnimeImage(posterImage);

    } catch (err) {
      alert("Erro de carregamento:" + err);
    }
    setLoading(false);
  }, [id]);


  useEffect(() => {
    getData();

  }, [getData]);




  function MoreDetailsClick() {
    setDetails(!details);
  }

  return (
    <AnimePageContainer>
      {loading && <Loading />}
      <ComebackButton />
      <Title>{anime.canonicalTitle}</Title>
      <TopWrapper>
        <AnimeBannerWrapper>
          <AnimeBanner src={animeImage.large} />
        </AnimeBannerWrapper>
        <DetailedScore>
          <ul>
            <li><Score>
              <p><span>Score</span>{parseInt(anime.averageRating) / 10}</p>
            </Score></li>
            <li><p>Popularity #{anime.popularityRank}</p></li>
            <li><p>Ranked #{anime.ratingRank}</p></li>
          </ul>
          <Sinopsis>
            <h1>Sinopsis</h1>
            <p>{anime.synopsis}</p>
          </Sinopsis>
        </DetailedScore>
      </TopWrapper>
      <BottomWrapper>
        <MFwrapper>
          <MoreDetailsText onClick={MoreDetailsClick}>More details</MoreDetailsText>
          <Favorite>
            <FavoriteButton id={id} image={animeImage.large} animeName={anime.canonicalTitle} />
          </Favorite>
        </MFwrapper>
        <MoreDetails display={details}>
          <p>Episodes: {anime.episodeCount}</p>
          <p>Released: {anime.startDate}</p>
          <p>End: {anime.endDate}</p>
          <p>Show type: <span>{anime.showType}</span></p>
          <p>Status: {anime.status}</p>
          <p>Age Rating: {anime.ageRatingGuide}</p>
        </MoreDetails>
      </BottomWrapper>
    </AnimePageContainer >
  );

};

export default memo(AnimePage);
