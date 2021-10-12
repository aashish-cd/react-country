import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import * as https from 'https';
import './list.css';

const List = () => {
  // const [loading, setLoading] = useState(false);
  const [newData, setNewData] = useState([]);
  const [name, setName] = useState('nep');
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // setLoading(true);
    const response = await axios.get(`https://restcountries.com/v3.1/all`);
    // console.log(response.data);
    setNewData(response.data);
    setData(response.data);
    // console.log(data);
    // setLoading(false);
  };

  //handle search name
  const handleName = (e) => {
    e.preventDefault();

    setName(e.target.value);
    setNewData(
      data.filter((ss) =>
        ss.name.official.toLowerCase().includes(name.toLowerCase())
      )
    );
    console.log(newData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className='section'>
      <form>
        <input
          className='form-input fixed-top'
          type='text'
          value={name}
          onChange={(e) => handleName(e)}
          placeholder='Search for Country'
        />
      </form>

      <div>
        {newData.map((ss, index) => {
          return (
            <article className='card' key={index}>
              <picture className='thumbnail'>
                <img className='category__01' src={ss.flags.png} alt='' />
              </picture>
              <div className='card-content'>
                <p className='category category__01'>{ss.name.common}</p>
                {/* <h2>{ss.name.common}</h2> */}
                <br />
                <h2>{ss.name.official}</h2>
                <br />
                <p>{}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default List;
