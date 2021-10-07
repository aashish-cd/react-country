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
            <div className='row bg-light' key={index}>
              <div className='col-3 col-md-12 bg-dark'>
                <h1>{ss.name.common}</h1>
                <p>{ss.name.official}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default List;
