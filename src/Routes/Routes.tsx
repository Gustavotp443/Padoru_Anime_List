import { Routes, Route } from "react-router-dom";
import { FavoriteProvider } from "../common/context/favoriteProvider";
import NotFound from "../pages/error/NotFound";
import Favorites from "../pages/favorites";
import Home from "../pages/home/Index";
import Main from "../pages/main";
import AnimePage from "../pages/main/anime/[animeid]";

const Routering = ({ theme }: any) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home theme={theme} />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/anime/:id" element={
          <FavoriteProvider>
            <AnimePage />
          </FavoriteProvider>
        } />
        <Route path="/fav" element={
          <FavoriteProvider>
            <Favorites />
          </FavoriteProvider>
        } />
      </Routes>
    </>
  );
};

export default Routering;
