import React,{ useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";


const Contacts = () => {
const [successmessage, setSuccessMessage] = useState("");
const { register, handleSubmit, formState: { errors } } = useForm();

const serviceID = "service_ID";
const templateID = "template_ID";
const userID = "user_v5dwfkECFDlhBybGUv2gl";

const onSubmit = (data, r) => {
sendEmail(
serviceID,
templateID,
{
name: data.name,
email: data.email,
subject: data.subject,
description: data.description
},
userID
)
r.target.reset();
}

const sendEmail = (serviceID, templateID, variables, userID) => {


emailjs.send(serviceID, templateID, variables, userID)
.then(() => {
setSuccessMessage("Form sent successfully! I 'll contact you as soon as possible.")
}).catch(err => console.error(`Something went wrong ${err}`));
};



return (
<div id="contacts" className="contacts">
    <div className="text-center">
        <h1>contact me</h1>
            <p>Please fill out the form and describe your project needs and I'll contact you as soon as possible.</p>
            <span className="success-message">{ successmessage }</span>
    </div>
    <div className="container">
        <form onSubmit={handleSubmit(onSubmit )}>
            <div className="row">
                <div className="col-md-6 col-xs-12">
                    <input type="text" className="form-control" placeholder="Name" name="name"  {...register("name", { required: "Please enter your name" , maxLength: {
                        value: 20, message: "Please enter a name with fewer than 20 characters" , }, })} />
                    <span className="error-message">
                        {errors.name && errors.name.message}
                    </span>

                    <input type="email" id="email" className="form-control" placeholder="Enter Your Email-id"
                            name="email" {...register("email", {
                                required: "Please enter your email-id", pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid Email"
                                }
                            })} />
                    <span className="error-message">
                        {errors.email && errors.email.message}
                    </span>
                        


                        <input type="text" id="subject" className="form-control" placeholder="Subject" name="subject"  {...register("subject", {
                            required: "Please enter subject"
                        })} />
                     <span className="error-message">
                        {errors.subject && errors.subject.message}
                    </span>
                        
                </div>

                <div className="col-md-6 col-xs-12">
                    <textarea className="form-control" id="description" type="text" name="description"
                        placeholder="Description here"{...register("description", {
                            required: "Please enter description" , maxLength: {value: 200, message: "Max-limit reached."}
                        })} ></textarea>
                        <span className="error-message">
                        {errors.description && errors.description.message}
                    </span>
                    <button className="contact-btn" type="submit">Contact Me</button>
                </div>
            </div>
        </form>
    </div>

</div>

)
}

export default Contacts