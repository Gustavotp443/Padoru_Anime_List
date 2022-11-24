import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../../components/Loading';
import api from '../../../services/api';
import { AnimePageContainer, TopWrapper, AnimeBanner, Title, AnimeBannerWrapper, DetailedScore, Score, Sinopsis, MoreDetails, MoreDetailsText, MoreDetailsWrapper } from './animeid.styles';



const AnimePage: React.FC = () => {


  const [anime, setAnime] = useState<any>([])
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [animeImage, setAnimeImage] = useState<any>([])
  const [details, setDetails] = useState<boolean>(false);




  async function getData() {
    setLoading(true)
    try {
      const response = await api.get(`/anime/${id}`)
      const { data } = response.data
      const { attributes } = data
      const { posterImage } = attributes

      setAnime(attributes)
      setAnimeImage(posterImage)

    } catch (err) {
      alert("Erro de carregamento:" + err)
    }
    setLoading(false)
  }

  useEffect(() => {
    getData();

  }, [])

  useEffect(() => {
    console.log(anime)
  }, [id, anime])

  function MoreDetailsClick() {
    setDetails(!details)
  }

  return (
    <AnimePageContainer>
      {loading && <Loading />}
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
      <MoreDetailsWrapper>
        <MoreDetailsText onClick={MoreDetailsClick}>More details</MoreDetailsText>
        <MoreDetails display={details}>
          <p>Episodes: {anime.episodeCount}</p>
          <p>Released: {anime.startDate}</p>
          <p>End: {anime.endDate}</p>
          <p>Show type: <span>{anime.showType}</span></p>
          <p>Status: {anime.status}</p>
          <p>Age Rating: {anime.ageRatingGuide}</p>
        </MoreDetails>
      </MoreDetailsWrapper>
    </AnimePageContainer >
  )

}

export default AnimePage;
