'use client';
import { useState } from 'react';
import React from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('Sending')
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
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
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
        <div class="mb-6">
          <label for="name" class="block mb-2 text-sm font-medium text-stone-100">
            Name
          </label>
          <input type="name" id="name" class="shadow-sm bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5" placeholder="Jane Doe" required onChange={(e)=>{setName(e.target.value)}} name='name'></input>
        </div>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-stone-100 dark:text-white">
            Email
          </label>
          <input type="email" id="email" class="shadow-sm bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 " placeholder="Jane@gmail.com" required onChange={(e)=>{setEmail(e.target.value)}} name='email'></input>
        </div>
        <div class="mb-6">
          <label for="message" class="block mb-2 text-sm font-medium text-stone-100">
            Your message
          </label>
          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-stone-900 bg-stone-50 rounded-lg border border-stone-300 focus:ring-brand-500 focus:border-brand-500" placeholder="Leave a message..." onChange={(e)=>{setMessage(e.target.value)}} name='message'></textarea>
        </div>
        <button type="submit" onClick={(e)=>{handleSubmit(e)}} class="text-white bg-brand-700 hover:bg-brand-800 focus:ring-4 focus:outline-none focus:ring-brand-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Send message
        </button>
      </form>
    </>
  );
};

export default ContactPage;
