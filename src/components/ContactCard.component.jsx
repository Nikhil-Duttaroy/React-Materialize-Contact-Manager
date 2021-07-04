import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  return (
    <tbody>
      <tr>
        <td>
          <Link
            to={{
              pathname: `contact/${props.contact.id}`,
              state: { detail: props.contact },
            }}
            style={{ display: "flex", justifyContent: "center" }}
            className='red-text'
          >
            <i className='material-icons' style={{ marginRight: "5px" }}>
              person
            </i>
            <span style={{ fontSize: "1.2rem" }}>{props.contact.name}</span>
          </Link>
        </td>

        <td>
          {" "}
          <Link
            to={{
              pathname: `contact/${props.contact.id}`,
              state: { detail: props.contact },
            }}
            className='red-text'
          >
            <span style={{ fontSize: "1.2rem" }}>{props.contact.email}</span>
          </Link>
        </td>

        <td>
          {" "}
          <Link
            to={{
              pathname: `contact/${props.contact.id}`,
              state: { detail: props.contact },
            }}
            className='red-text'
          >
            <span style={{ fontSize: "1.2rem" }}>{props.contact.contact}</span>
          </Link>
        </td>

        <td onClick={() => props.clickHandler(props.contact.id)}>
          <i className='material-icons red-text' style={{ cursor: "pointer" }}>
            delete
          </i>
        </td>
      </tr>
    </tbody>
  );
};

export default ContactCard;
