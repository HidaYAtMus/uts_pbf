import React from "react";
import PropTypes from "prop-types";

import "../css/ContactItem.css";

const ContactItem = ({ name, phone, email, onClickDelete }) => (
  <div className="ContactItem">
    <p className="ContactItem__name">{name}</p>
    <p className="ContactItem__phone">{phone}</p>
    <p className="ContactItem__email">{email}</p>

    <button
      type="button"
      className="ContactItem__button"
      onClick={onClickDelete}
    >
      Delete
    </button>
  </div>
);

ContactItem.propTypes = {  
  name: PropTypes.string,
  phone: PropTypes.number,
  email: PropTypes.string,
  onClickDelete: PropTypes.func
};

// ContactItem.defaultProps = {
//   name: "Anonymous",
//   email: "null",
//   phone: "+62 xx xxx xxx xxx",
//   onClickDelete: () => {}
// };

export default ContactItem;