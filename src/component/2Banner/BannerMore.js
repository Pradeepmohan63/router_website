import React from 'react';
import { useParams , useSearchParams } from 'react-router-dom';

function BannerMore(){
  // const {id} = useParams();
  const [search , setSearch] = useSearchParams();

  const showActive = search.get('filter')==='active';
  
  return (
    <div>
      <h1>Use Search Params</h1>
      <button onClick={()=>setSearch({filter:'active'})}>Active</button>
      <button onClick={()=>setSearch({})}>All</button>

      {/* <p>product : {id}</p> */}
      {
        showActive ? <h2>Showing Active users</h2> : <h2>Showing All Users</h2>
      }
    </div>
  )
}

export default BannerMore