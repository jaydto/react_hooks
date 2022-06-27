import React,{useState,useEffect} from 'react'

const Table = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/data",{
    headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
  "Cache-Control":"cache"}})
    .then((response)=>response.json())
    .then((data)=>{
      setData(data);
    })
    .catch((err)=>{
      console.log(err.message)
    })
  },[])
  return (
    <div >
           <><h1 className="display-3 bg-dark text-center">Books in store</h1><table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Author</th>
              <th scope="col">Book</th>
              <th scope="col">price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
      {data.map((item, index)=>( 

            <tr key={index}>
              <th scope="row" >{item.id}</th>
              <td>{item.name}</td>
              <td>{item.book}</td>
              <td>{item.price}</td>
              <td><button type="submit" className="btn btn-success">book</button></td>
            </tr>
      
      ))}
          </tbody>
        </table></>

    </div>
  )
}


export default Table