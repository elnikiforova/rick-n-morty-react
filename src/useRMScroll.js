import { useEffect, useState } from 'react';
import axios from 'axios';
import { getRandomArray, base } from './utils';

export default function useRMScroll(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [chars, setChars] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const nums = getRandomArray(671, 4);
    const query = `character/${nums}`;

    axios.get(`${base}${query}`)
      .then((res) => {
        setChars((prevChars) => [...prevChars, ...res.data]);
        setLoading(false);
      }).catch((e) => {
        setError(true);
      });
  }, [pageNumber]);

  return { loading, error, chars };
}
