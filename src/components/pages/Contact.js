import React, { useState } from 'react';

const Contact = ()=>{

  const [data, setData] = useState({
    fullName:"",
    phone:"",
    email:"", 
    msg:""
  });

  const formSubmit = (event)=>{
    event.preventDefault();
    alert(`I am ${data.fullName}, my mobile no. is +92${data.phone}, my email is ${data.email} and I want ${data.msg}`);
    setData({
      fullName:"",
      phone:"",
      email:"", 
      msg:""
    });
  }

  const inputEvent=(event)=>{
    const {name, value} = event.target;

    setData((preVal)=>{
      return{ 
            ...preVal,
            [name]:value,
      };
    });
  };

  return(
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us </h1>
      </div>
      <div className="container contact_div my-2">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
               <label  className="form-label">Full name</label>
               <input type="text" className="form-control" placeholder="Enter your full name"
               name="fullName"
               onChange={inputEvent} value={data.fullName}/>
              </div>
              <div className="mb-3">
               <label  className="form-label">Mobile</label>
               <input type="phone" className="form-control" placeholder="mobile" name="phone"
               onChange={inputEvent} value={data.phone}/>
              </div>
              <div className="mb-3">
               <label  className="form-label">Email address</label>
               <input type="email" className="form-control" placeholder="name@example.com" name="email"
               onChange={inputEvent} value={data.email}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="3" name="msg" onChange={inputEvent} value={data.msg}></textarea>
              </div>
              <div className="col-10">
                  <button type="submit" className="btn btn-outline-primary">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
