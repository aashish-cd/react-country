import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as https from 'https';
import './list.css';

const List = () => {
  // const [loading, setLoading] = useState(false);
  const [name, setName] = useState('nep');
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // setLoading(true);
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`,
      {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      }
    );
    // console.log(response.data);
    setData(response.data);
    console.log(data);
    // setLoading(false);
  };

  //handle search name
  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  useEffect(() => {
    fetchData();
    return () => {};
  });

  return (
    <section className='section'>
      <form>
        <input
          className='form-input'
          type='text'
          value={name}
          onChange={(e) => handleName(e)}
          placeholder='Search for Country'
        />
      </form>
      {/* <div className='container'>
        {data.map((ss, index) => {
          return <h1 key={index}>{ss.name.common}</h1>;
        })}
      </div> */}
      <div className='container displey-flex flex-row bg-light'>
        {data.map((ss, index) => {
          return (
            <article className='card'>
              <picture className='thumbnail'>
                <img className='category__01' src={ss.flags.png} alt='' />
              </picture>
              <div className='card-content'>
                <p className='category category__01'>{ss.name.common}</p>
                {/* <h2>{ss.name.common}</h2> */}
                <p>
                  TUX re-inventing the wheel, and move the needle. Feature creep
                  dogpile that but diversify kpis but market-facing.
                </p>
              </div>
              <footer>
                <div className='post-meta'>
                  <span className='timestamp'>
                    <i className='fa fa-clock-o'></i> 6 mins ago
                  </span>
                  <span className='comments'>
                    <i className='fa fa-comments'></i>
                    <a href='#'> 14 comments</a>
                  </span>
                </div>
              </footer>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default List;
