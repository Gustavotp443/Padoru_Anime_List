import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/error/NotFound";
import Home from "../pages/home/Index";
import Main from "../pages/main";

const Routering = ({ theme }: any) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home theme={theme} />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </>
  )
}

export default Routering
