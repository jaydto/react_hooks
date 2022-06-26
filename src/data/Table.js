import React from 'react'

const Table = () => {
  return (
    <div >
           <h1 class="display-3 bg-dark text-center">Books in store</h1>
      <table class="table table-striped">
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
    <tr>
      <th scope="row">1</th>
      <td>Author Leah</td>
      <td>Apple</td>
      <td>25$</td>
      <td><button type="submit" className="btn btn-success">book</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jack</td>
      <td>Arizona</td>
      <td> 10$</td>
      <td><button type="submit" className="btn btn-success">book</button></td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>The dots</td>
      <td>Exclusive</td>
      <td><button type="submit" className="btn btn-success">book</button></td>

    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Table