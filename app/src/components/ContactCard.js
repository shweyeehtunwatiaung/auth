import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import user from '../images/logo192.png'
import { MdDelete, MdEdit } from 'react-icons/md'

const ContactCard = (props) => {
  const history = useHistory()
  const { id, name, email } = props.contact

  const deleteContactPage =(id)=>{
    props.clickHandler(id)
  }

  const handleDelete = () => {
    history.push({
      pathname: `/delete/${id}`,
      contact: props.contact,
      // deleteContactPage: deleteContactPage
    })
  }

  return (
    <div className="card mb-3">
      <div className="card-body card-decoration" >
        <div className="card-decoration" >
          <img className="users" src={user} alt="User" />
          <div className="contact-data">
            <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
              <h5 className="text-header">{name}</h5>
            </Link>
            <p className="card-text"> {email} </p>
          </div>
        </div>

        <div className="action">
          <Link to={{ pathname: `/edit/`, state: { contact: props.contact } }}>
            <MdEdit className="edit-icon"  />
          </Link>

          <MdDelete className="delete-icon"
            onClick={handleDelete} 
          />
 
          {/* <Link to={{ pathname: `/delete/${id}`, state: { contact: props.contact } }}>
            <MdDelete className="delete-icon"
            deleteContactAlert={deleteContactPage} />
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default ContactCard
