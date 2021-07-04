import React from 'react'
import user from "../assets/user.png";
import {Link} from 'react-router-dom';

const ContactDetails = (props) => {
  const {name,email,contact} =props.location.state.detail;
  return (
    <>
      <div className='row ' style={{ margin: "2rem" }}>
        <div className='col s6 offset-s3'>
          <div
            className='card hoverable horizontal'
            style={{ backgroundColor: "#ee6e73", borderRadius: "25px" }}
          >
            <div className='card-image'>
              <img
                src={user}
                alt=''
                style={{ width: "100%", margin: "1rem" }}
              />
            </div>
            <div className='card-stacked'>
              <div
                className='card-content'
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span className='card-title' style={{ fontWeight: "400" }}>
                  Name : {name}
                </span>
                <span className='card-title' style={{ fontWeight: "400" }}>
                  Email : {email}
                </span>
                <span className='card-title' style={{ fontWeight: "400" }}>
                  Contact : {contact}
                </span>
              </div>
              <div className='card-action center-align'>
                <Link to='/'>
                  <button className='btn waves-effect waves-light'>
                    Back To List
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDetails
