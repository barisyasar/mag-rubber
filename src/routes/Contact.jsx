import React from 'react'
import Layout from '../components/Layout'
import "../assets/css/components/Contact/style.css";


function Contact() {
  return (
    <Layout>
      <div classNameName="container-fluid">
        <div className="contact-section">
          <div className="row">
            <div className="col-8">
              <img src="/images/about-1.png" />
            </div>
            <div className="col-4">
              <form>
               
                <div className="form-group">
                  <label className='label-text' for="exampleFormControlSelect1">Tell us about your issue so we can help you
more quickly.</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="row">
              <div className="col-6"> <div className="form-group">
                  <label className='label-text' for="exampleFormControlSelect2">
                    First Name
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    cols="2"
                    id="exampleFormControlInput1"
                  />
                </div></div>
               <div className="col-6"> <div className="form-group">
                  <label className='label-text' for="exampleFormControlSelect2">
                   Last Name
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    cols="2"
                    id="exampleFormControlInput1"
                  />
                </div></div>
              </div>
              <div className="form-group">
                  <label className='label-text' for="exampleFormControlSelect2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    cols="2"
                    id="exampleFormControlInput1"
                  />
                </div>
              <div className="form-group">
                  <label className='label-text' for="exampleFormControlSelect2">
                    Phone Number
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    cols="2"
                    id="exampleFormControlInput1"
                  />
                </div>
               <div className="form-group">
                  <label className='label-text' for="exampleFormControlTextarea1">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                  ></textarea>
                </div>
               
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
