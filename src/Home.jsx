import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const [data, setData] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://cruduserserver.onrender.com/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err));



  }, [])


  const handleDelete = (id) => {
    const confirm = window.confirm("would you like to delete?");
    if (confirm) {
      axios.delete('https://cruduserserver.onrender.com/users/' + id)
        .then(res => {
          location.reload();
        }).catch(err => console.log(err));
    }
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-info vh-100'>
      <h1 className='fw-bolder fs-3 '>USER DETAILS LIST</h1>
      <div className='w-75 rounded bg-primary  border shadow p-4'>
        <div className="d-flex justify-content-end">
          <Link to="/create" className='btn btn-success '>Add +</Link>
        </div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d, i) => (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <td>
                    <Link to={`/read/${d.id}`} className="btn btn-sm btn-info me-2">Read</Link>
                    <Link to={`/update/${d.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                    <button onClick={e => handleDelete(d.id)} className="btn btn-sm btn-danger me-2">Delete</button>
                  </td>

                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )

}

export default Home