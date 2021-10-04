import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('nep');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();

    return () => {};
  }, [name]);
  const fetchData = async () => {
    // setLoading(true);
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`
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

  if (loading) {
    return (
      <div>
        <h2>Loading... </h2>
        <div className='underline'></div>
      </div>
    );
  }

  return (
    <section className='section'>
      <form>
        <input type='text' value={name} onChange={(e) => handleName(e)} />
      </form>
      <div className='container'>
        {data.map((ss, index) => {
          return <h1 key='index'>{ss.name.common}</h1>;
        })}
      </div>
    </section>
  );
}

export default App;
