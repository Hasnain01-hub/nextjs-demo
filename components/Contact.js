import React, { useRef, useState } from "react";
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    name: "",
    email: "",
    message: "",
}

export default () => {

    const [formState, setFormState] = useState(initialState);
    const { name, email, message } = formState;
    const form = useRef();

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.NEXT_EMAIL_SERVICE_ID,
                process.env.NEXT_EMAIL_TEMPLATE_ID,
                form.current,
                process.env.NEXT_EMAIL_PUBLIC_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                    toast.success('Message Sent Sucessfully!!')
                    setFormState(initialState);
                },
                (error) => {
                    console.log(error.text);
                    toast.error(error.text);
                }
            );
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative pt-20"
        >
            <div className="max-w-screen-xl mx-auto py-20 lg:py-24">
                <div className="p-10 sm:p-12 md:p-16 bg-primarycolor text-gray-100 rounded-lg relative">
                    <div tw="mx-auto max-w-4xl">
                        <h2 className="text-3xl sm:text-4xl font-bold">Contact Us</h2>
                        <form ref={form} className="mt-4" onSubmit={(e) => handleSubmit(e)}>
                            <div className="flex flex-col sm:flex-row justify-between">
                                <div className="sm:w-5/12 flex flex-col">
                                    <div className="relative py-5 mt-6">
                                        <label className="absolute top-0 left-0 tracking-wide font-semibold text-sm" htmlFor="name-input">Your Name</label>
                                        <input className="w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 hocus:border-pink-400 focus:outline-none transition duration-200" id="name-input" type="text" name="name" value={name} onChange={(e) => handleChange(e)} placeholder="E.g. Ace International" />
                                    </div>
                                    <div className="relative py-5 mt-6">
                                        <label className="absolute top-0 left-0 tracking-wide font-semibold text-sm" htmlFor="email-input">Your Email Address</label>
                                        <input className="w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 hocus:border-pink-400 focus:outline-none transition duration-200" id="email-input" type="email" name="email" value={email} onChange={(e) => handleChange(e)} placeholder="E.g. ace@mail.com" />
                                    </div>
                                </div>
                                <div className="sm:w-5/12 flex flex-col">
                                    <div className="relative py-5 mt-6" tw="flex-1">
                                        <label className="absolute top-0 left-0 tracking-wide font-semibold text-sm" htmlFor="name-input">Your Message</label>
                                        <textarea className="h-24 sm:h-full resize-none w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 hocus:border-pink-400 focus:outline-none transition duration-200" id="message-input" name="message" value={message} onChange={(e) => handleChange(e)} placeholder="E.g. Details about your message" />
                                    </div>
                                </div>
                            </div>

                            <button className="w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primarycolor rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl" type="submit" value="Submit">Submit</button>
                        </form>
                    </div>
                    {/* <SvgDotPattern1 /> */}
                </div>
            </div>
        </motion.div>
    );
};
