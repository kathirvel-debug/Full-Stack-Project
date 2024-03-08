import '../App.css'
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { homeSelector, searchAsync } from '../Redux/homeReducer';
import Filter from './Filter'
import Cards from './cards'
import { storeApi } from '../Redux/homeReducer'
import { fetchStart, fetchError, fetchSuccess } from '../Redux/homeReducer';
function Home() {
  const { isLoading, error, comments } = useSelector(homeSelector);
  const [input, setInput] = useState('')
  const disptach = useDispatch();
  const handelchange = (event) => {
    setInput(event.target.value);
  }
  useEffect(() => {
    disptach(fetchStart())
    disptach(storeApi())
  }, []);

  useEffect(() => {
    disptach(searchAsync(input))
  }, [input,disptach])

  return (
    <>
      {/* <!-- search --> */}
      <div className="search">
        <input type="text" placeholder="...search" value={input} onChange={handelchange} />
        <button>Search</button>
      </div>
      <div className="container">

        <Filter />
        {error?<h1>"No product found"</h1>:
        <div className="cardsmodule">
          {comments.map((x) => {

            return (
              
              <Cards
                name={x.name}
                price={x.price}
                key={x._id}
                id={x._id}
                img={x.image} // Pass the converted image src
              />
            );
          })}
        </div>
        }
      </div>
    </>
  )
}

export default Home