// import { useEffect, useState } from 'react';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';
import { requestArticles } from '../../reducers/hackerNewsReducer.js';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';






export default function HackerNews() {
  // const [articles, setArticles] = useState([]);// we use useSelector instead of this local states
  // const [loading, setLoading] = useState(true);

    const articles = useSelector((state) => {
      console.log(state);
      return state.hackerNews.articles
    });

    const loading = useSelector((state) => {
      return state.hackerNews.loading
    });

    const dispatch = useDispatch();
    

    useEffect(() => {
      dispatch(requestArticles);
    }, [])

    
  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);
  return (
    <div className="news-container">
      <img className='logo' src="../../assets/hackerNews.jpeg" alt="" />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
