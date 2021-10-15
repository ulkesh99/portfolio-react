import React from 'react';


const Contacts = () => {
return (
<div className="contacts">
    <div className="text-center">
        <h1>contact me</h1>
        <p>Please fill out the form and describe your project needs and I'll contact you as soon as possible.</p>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-xs-12">
                <input type="text" id="name" className="form-control" placeholder="Enter Name" name="name" />

                <input type="email" id="email" className="form-control" placeholder="Enter Your Email-id"
                    email="email" />
                
             
                    <input type="text"
                        id="subject"
                        className="form-control"
                        placeholder="Subject"
                        subject="subject"
                    />
                                    </div>

                    <div className="col-md-6 col-xs-12">
                    <textarea className="form-control"
                        id="description"
                        type="text"
                        description = "description"
                        placeholder="Description here"
                    ></textarea>
                    <button className="contact-btn" type="submit">Contact Me</button>
                </div>
        </div>
    </div>
</div>

)
}

export default Contacts