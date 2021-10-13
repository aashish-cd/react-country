import React, { useState } from 'react';
// import * as https from 'https';
import './list.css';
import country from './data.json';

const List = () => {
  // const [loading, setLoading] = useState(false);
  const [newData, setNewData] = useState([]);
  const [name, setName] = useState('nep');
  const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   // setLoading(true);
  //   const response = await axios.get(``);
  //   // console.log(response.data);
  //   setNewData(response.data);
  //   setData(response.data);
  //   // console.log(data);
  //   // setLoading(false);
  // };

  //handle search name
  const handleName = (e) => {
    e.preventDefault();
    setData(country);
    console.log(data);
    setName(e.target.value);
    setNewData(
      data.filter((ss) =>
        ss.name.official.toLowerCase().includes(name.toLowerCase())
      )
    );
    console.log(newData);
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);

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

      <div className='container'>
        {newData.map((ss, index) => {
          return (
            <div class='single'>
              <div class='image-container'>
                <img class='flag' src={ss.flags.svg} alt='nepal' />
              </div>
              <div class='list-container'>
                <h2>{ss.name.common}</h2>
                <p>{ss.capital}</p>
                <p> {ss.independent ? 'independent' : 'dependent'}</p>
                <p>Unmember : {ss.unMember ? 'yes' : 'no'}</p>
                <p>
                  Currency: {ss.currencies?.name}
                  symbol: {ss.currencies?.symbol}
                </p>
                <p>region subregion</p>
                <p>languages[]</p>
                <p>{ss.landlocked ? 'landlocked' : 'not a landlocked'}</p>
                <p>Area: {ss.area}</p>
                <p>
                  <a href={ss.maps.googleMaps}>Google Map</a>{' '}
                  <a href={ss.maps.openStreetMaps}>Open street Map</a>
                </p>
                <p>Population: {ss.population}</p>
                <p>Timezones: {ss.timezones}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default List;
