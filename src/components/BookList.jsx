import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/AppReducer/action.js";
import styled from "styled-components";
import Filter from "./Filter.jsx";
import {useLocation,useSearchParams,Link} from "react-router-dom";
const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.AppReducer.books);
 const location=useLocation();
 const [searchParams] = useSearchParams();
const gddd=searchParams.get("sort")

  useEffect(() => {
    if (books?.length === 0 || location.search) {
      const getTodoParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort:"release_year",
          _order:gddd
        },
      };
      dispatch(getBooks(getTodoParams))

    }
  }, [books?.length, dispatch, gddd, location.search, searchParams]);

  return (
    <div>
    
      <ListWrapper>
        <div>
          <Filter />
        </div>

        <ListInnerBox>
          {books &&
            books?.map((el) => (
             <Link to={`/books/${el.id}`} key={el.id}>
              <SmallWrapperBox >
                <Image src={el.cover_photo} alt="Books" />
                <TextWrapper>
                <p>{el.book_name}</p>
                <p>{el.category}</p>
                <p>{el.release_year}</p></TextWrapper> 
              </SmallWrapperBox></Link>
            ))}
        </ListInnerBox>
      </ListWrapper>
    </div>
  );
};

export default BookList;

const ListWrapper = styled.div`
  display: flex;
  width:95%;
  margin: auto;
  gap: 5%;
`;
const ListInnerBox = styled.div`
  display: grid;
  width:100%;
  grid-template-columns:repeat(auto-fit,minmax(200px,max-content));
  grid-gap:25px;
  cursor:pointer;
  
`;

const Image = styled.img`
  width: 100%;
`;
const SmallWrapperBox=styled.div`
box-shadow: 1px 1px 5px 1px grey;
border-radius: 12px;
overflow: hidden;
`

const TextWrapper=styled.div`
padding:5px;
text-align:start;
`
