import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
const Filter = () => {
  const [params, setSearchParams] = useSearchParams();
  const urlLast = params.getAll("category");
  const [category, setCategory] = useState(urlLast || []);
  const urlLast1 = params.get("sort");
  const [sort, setSort] = useState(urlLast1 || "");
  const handleSort = (e) => {
    setSort(e.target.value);
  };
  const handleCheckbox = (e) => {
    const option = e.target.value;
    let newCategory = [...category];

    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };
  useEffect(() => {
    const setParmas = {
      category,
      sort,
    };
    setSearchParams(setParmas);
  }, [category, setSearchParams, sort]);

  return (
    <div>
      Filter
      <InputWrapper>
        <input
          type="checkbox"
          value="Novel"
          id="Novel"
          checked={category.includes("Novel")}
          onChange={handleCheckbox}
        />
        <label htmlFor="Novel">Novel</label>
      </InputWrapper>
      <InputWrapper>
        <input
          type="checkbox"
          value="Science_Fiction"
          id="Science_Fiction"
          checked={category.includes("Science_Fiction")}
          onChange={handleCheckbox}
        />
        <label htmlFor="Science_Fiction">Science_Fiction</label>
      </InputWrapper>
      <InputWrapper>
        <input
          type="checkbox"
          value="Motivational"
          id="Motivational"
          checked={category.includes("Motivational")}
          onChange={handleCheckbox}
        />
        <label htmlFor="Motivational">Motivational</label>
      </InputWrapper>
      <InputWrapper>
        <input
          type="checkbox"
          value="Thriller"
          id="Thriller"
          checked={category.includes("Thriller")}
          onChange={handleCheckbox}
        />
        <label htmlFor="Thriller">Thriller</label>
      </InputWrapper>
      <br />
      Sort
      <div onChange={handleSort}>
        <InputWrapper>
          <input
            type="radio"
            id="asc"
            value="asc"
            defaultChecked={sort === "asc"}
            name="radioBtn"
          />
          <label htmlFor="asc">Ascending</label>
        </InputWrapper>
        <InputWrapper>
          <input
            type="radio"
            id="Dec"
            value="desc"
            name="radioBtn"
            defaultChecked={sort === "desc"}
          />
          <label htmlFor="Dec">Descending</label>
        </InputWrapper>
      </div>
    </div>
  );
};

export default Filter;

const InputWrapper = styled.div`
  display: flex;
  padding-top: 5px;
`;
