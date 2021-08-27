import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const DeleteContact = (props) => {
  // console.log(props)
  const location = useLocation
  // const {id,name,email} = props.location.state.contact

  console.log('location: ', location.pathname)

  return (
    <div>
      <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mb-3">
            <div className="card-body">
              <div className="card-title" style={{ display: "flex" }} >
              
                <h5>Are You Sure to Delete ?</h5>
              
              </div>
              
              <button className="btn btn-danger my-3" 
              // onClick={() => props.deleteContactAlert(id)}
              >Delete</button>
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default DeleteContact
