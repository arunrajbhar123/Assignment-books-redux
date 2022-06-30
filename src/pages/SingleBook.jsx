import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../Redux/AppReducer/action.js";
import styled from "styled-components";
const SingleBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.AppReducer.books);
  const [currentBook, setCurrentBook] = useState({});
  useEffect(() => {
    if (books?.length === 0) {
      dispatch(getBooks());
    }
  }, [books?.length, dispatch, id]);

  useEffect(() => {
    if (id) {
      const temp = books?.find((book) => book.id === Number(id));
      temp && setCurrentBook(temp);
    }
  }, [books, id]);
 
  return (
    <div>
      <MainBoxWrapper>
        <Image src={currentBook.cover_photo} alt="books" />
        <TextWrapper>
          <p>{currentBook.book_name}</p>
          <p> {currentBook.release_year}</p>
          <p>{currentBook.category}</p>
          <p>{currentBook.author}</p>
          <button>
            <Link to={`/books/${currentBook.id}/edit`} state={{from:currentBook}}>Edit</Link>
          </button>
        </TextWrapper>
      </MainBoxWrapper>
    </div>
  );
};

export default SingleBook;

const MainBoxWrapper = styled.div`
  width: 320px;
  margin: auto;
`;

const Image = styled.img`
  width: 320px;
`;
const TextWrapper = styled.div`
  padding: 5px;
  text-align: start;
`;
