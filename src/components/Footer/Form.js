import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    letter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className=' mx-auto bg-white p-6 rounded-md shadow-md  sections form-fw'>
      <h4 className=" text-2xl lg:text-3xl"> احجز إستشارة الان</h4>

      <div className='form-f'>
        <h6 className='font-semibold mb-6 text-form'>
          سنكون سعداء بتواصلك معنا
        </h6>
        <form onSubmit={handleSubmit}>
          <div className='mb-8'>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='الاسم'
              value={formData.name}
              onChange={handleChange}
              className='form-input mt-1 block w-full'
              required
            />
          </div>
          <div className='mb-8'>
            <input
              type='text'
              id='number'
              placeholder='رقم الجوال'
              name='number'
              value={formData.number}
              onChange={handleChange}
              className='form-input mt-1 block w-full'
              required
            />
          </div>
          <div className='mb-8'>
            <input
              type='email'
              id='email'
              placeholder='البريد الكتروني'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='form-input mt-1 block w-full'
              required
            />
          </div>
          <div className='mb-8'>
            <label htmlFor='letter' className='block text-gray-700 text-right'>
              الرسالة:
            </label>
            <div
              id='letter'
              name='letter'
              contentEditable
              className='form-textarea mt-1 block w-full border rounded-md px-3 py-2 h-28 bg-white letter-form form-textarea  text-right overflow-hidden '
              onInput={handleChange}
              required>
              {formData.letter}
            </div>
          </div>
          <button
            type='submit'
            className=' bg-white hover:bg-slate-300 text-black font-bold py-2 px-6 rounded-full m-auto'>
            إرسال
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
