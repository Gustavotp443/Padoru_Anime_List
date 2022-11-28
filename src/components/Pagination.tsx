import { PaginationButton, PaginationContainer } from "./Pagination.styles";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
const Pagination = ({ eventNext, eventPrev, limit, offset, total }: any) => {

  const pages = Math.ceil(total / limit);
  const current = offset ? (offset / limit) + 1 : 1;



  return (
    <PaginationContainer>
      <div>
        <PaginationButton onClick={eventPrev} disabled={current === 1}><AiFillCaretLeft /></PaginationButton>
        <div>{`${current} de ${pages}`}</div>
        <PaginationButton onClick={eventNext} disabled={current === pages}><AiFillCaretRight /></PaginationButton>
      </div>
    </PaginationContainer>
  );
};

export default Pagination;
