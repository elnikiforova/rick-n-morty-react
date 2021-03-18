import React, { useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useRMScroll from '../useRMScroll';
import { setCharAC } from '../redux/actions';
import CharCard from '../components/CharCard';

export default function FirstPage() {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, chars } = useRMScroll(pageNumber);
  const observer = useRef();
  const history = useHistory();
  const dispatch = useDispatch();

  const lastCharRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPageNumber((prev) => prev + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading]);

  const redirectHandler = (char) => {
    dispatch(setCharAC(char));
    const path = '/details';
    history.push(path);
  };

  return (
    <div className="cards-wrapper">
      {chars.map((el, index) => {
        if (chars.length === index + 1) {
          return (
            <div
              className="card"
              key={el.id}
              ref={lastCharRef}
              onClick={() => redirectHandler(el)}>
              <CharCard title={el.name} image={el.image} />
            </div>
          );
        }
        return (
          <div
            className="card"
            key={el.id}
            onClick={() => redirectHandler(el)}>
            <CharCard title={el.name} image={el.image} />
          </div>
        );
      })}
      {loading && 'loading'}
      {error && 'error'}
    </div>
  );
}
