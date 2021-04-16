import React, { Component } from "react";

import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-header margin">
          <h1>U can contact us :</h1>
        </div>
        <div className="contact-telephone margin">
          <h4>
            Telephone:<span className="spacing"></span> +398 071 999 999 ,
            <span className="spacing"></span> +389 075 999 999
          </h4>
        </div>
        <div className="contact-adress margin">
          <h4>
            Adress:<span className="spacing"></span> Bul.AVNOJ number 999/9
          </h4>
        </div>
        <div className="contact-email margin">
          <h4>
            E-mail:<span className="spacing"></span>
            sheffparadise@gmail.com
          </h4>
        </div>
      </div>
    );
  }
}
export default Contact;
