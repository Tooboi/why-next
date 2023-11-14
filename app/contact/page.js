'use client';
import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('\u001b[36mSending...')
  let data = {
      name,
      email,
      message
    }
  fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('\u001b[35mResponse received')
      if (res.status === 200) {
        console.log('\u001b[32mResponse succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setBody('')
      }
    })
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Contact Me</h1>
      {/* <p className='mb-5'>Health Coaching for you</p>
        <p>ACE Certified Health Coach</p> */}
      <form>
        <div className="mb-6">
          <label for="name" className="block mb-2 text-sm font-medium text-stone-100">
            Name
          </label>
          <input type="name" id="name" className="shadow-sm bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5" placeholder="Jane Doe" required onChange={(e)=>{setName(e.target.value)}} name='name'></input>
        </div>
        <div className="mb-6">
          <label for="email" className="block mb-2 text-sm font-medium text-stone-100 dark:text-white">
            Email
          </label>
          <input type="email" id="email" className="shadow-sm bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 " placeholder="Jane@gmail.com" required onChange={(e)=>{setEmail(e.target.value)}} name='email'></input>
        </div>
        <div className="mb-6">
          <label for="message" className="block mb-2 text-sm font-medium text-stone-100">
            Your message
          </label>
          <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-stone-900 bg-stone-50 rounded-lg border border-stone-300 focus:ring-brand-500 focus:border-brand-500" placeholder="Leave a message..." onChange={(e)=>{setMessage(e.target.value)}} name='message'></textarea>
        </div>
        <button type="submit" onClick={(e)=>{handleSubmit(e)}} className="text-white bg-brand-700 hover:bg-brand-800 focus:ring-4 focus:outline-none focus:ring-brand-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Send message
        </button>
      </form>
    </>
  );
};

export default ContactPage;
