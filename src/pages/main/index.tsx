import React, { memo } from "react";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import SearchBar from "../../components/SearchBar";
import { CardWrapper, MainContainer, SearchContainer } from "./main.styles";
import { useState, useEffect } from "react";
import api from "../../services/api";
import Loading from "../../components/Loading";
import AnimeNotFound from "../../components/AnimeNotFound";
import { Link } from "react-router-dom";
import { AnimeResp } from "../../types/Types";
import useDebounce from "../../hooks/useDebounce";


const Main = () => {
  const [search, setSearch] = useState<string | null>("");
  const [animeData, setAnimeData] = useState<AnimeResp[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [limit,] = useState<number>(20);
  const [total, setTotal] = useState<number>();

  const debouncedSearch = useDebounce(search, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

  };

  const nextOffset = () => {
    setOffset(offset + 20);
  };
  const prevOffset = () => {
    setOffset(offset - 20);
  };



  useEffect(() => {
    async function getAllAnimes() {
      setLoading(true);
      try {
        let response;
        // eslint-disable-next-line no-lone-blocks
        { debouncedSearch ? response = await api.get(`/anime?filter[text]=${debouncedSearch}&page[limit]=${limit}&page[offset]=${offset}`) : response = await api.get(`/anime?page[limit]=${limit}&page[offset]=${offset}`); }
        const { data, meta } = response.data;
        setAnimeData(data);
        setTotal(parseInt(meta.count));
      } catch (err) {
        alert("Erro de carregamento:" + err);
      }
      setLoading(false);
    }
    getAllAnimes();
  }, [debouncedSearch, offset, total, limit]);

  return (
    <MainContainer>
      <>
        <SearchContainer>
          <SearchBar
            name="search"
            type="text"
            placeholder="Find what you want..."
            onChange={handleChange}
          />
        </SearchContainer>
        {loading && <Loading />}
        <CardWrapper>
          {animeData.map((anime: any) => (
            <li key={anime.id}>
              <Link to={`/anime/${anime.id}`}>
                <Card anime={anime} />
              </Link>
            </li>
          )
          )}
        </CardWrapper>
        {animeData.length <= 0 && loading === false &&
          <AnimeNotFound />
        }
        {animeData.length > 0 &&
          <>
            <Pagination eventNext={nextOffset} eventPrev={prevOffset} limit={limit} offset={offset} total={total} />
          </>
        }
      </>
    </MainContainer >
  );
};

export default memo(Main);
