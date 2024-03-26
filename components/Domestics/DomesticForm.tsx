"use client"
import { useState } from 'react';
import { HiOutlineUser, HiOutlineMail, HiOutlinePhone, HiOutlineCalendar, HiOutlineUsers, HiOutlineChip } from 'react-icons/hi';

const DomesticForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    phone: '',
    dob: '',
    adults: '',
    kids: '',
    description:''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="w-full max-w-md flex flex-col mx-auto p-4 md:p-0">
        <h2 className='uppercase text-black text-2xl font-bold'>Book this tour</h2>
        <div className="mb-4 ">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
        <div className="relative">
          
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="input-with-icon pl-8 rounded border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
          />
          <HiOutlineUser className="absolute top-3 left-3 text-gray-500" />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="input-with-icon pl-8 rounded border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full" // Added left padding to create space for the icon
          />
          <HiOutlineMail className="absolute top-3 left-3 text-gray-500" />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="confirmEmail" className="block text-gray-700 font-bold mb-2">Confirm Email</label>
        <div className="relative">
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleChange}
            placeholder="Confirm your email"
            className="input-with-icon pl-8 rounded border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
          />
          <HiOutlineMail className="absolute top-3 left-3 text-gray-500" />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
        <div className="relative">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="input-with-icon pl-8 rounded border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
          />
          <HiOutlinePhone className="absolute top-3 left-3 text-gray-500" />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">Date of Birth</label>
        <div className="relative ">
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            placeholder="DD-MM-YY"
            className="input-with-icon pl-8 rounded border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full "
          />
          <HiOutlineCalendar className="absolute top-3 left-3 text-gray-500" />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="adults" className="block text-gray-700 font-bold mb-2">Number of Adults</label>
        <div className="relative">
          <input
            type="number"
            id="adults"
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            placeholder="Enter number of adults"
            className="input-with-icon pl-8 rounded border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
          />
          <HiOutlineUsers className="absolute top-3 left-3 text-gray-500" />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="kids" className="block text-gray-700 font-bold mb-2">Number of Kids</label>
        <div className="relative">
          <input
            type="number"
            id="kids"
            name="kids"
            value={formData.kids}
            onChange={handleChange}
            placeholder="Enter number of kids"
            className="input-with-icon pl-8 rounded border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
          />
          <HiOutlineChip className="absolute top-3 left-3 text-gray-500" />
        </div>
      </div>
      <div className="mb-4  ">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter your description"
          className=" h-32 resize-none rounded border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full "
        />
      </div>
        <div className="flex justify-center flex-col gap-6 items-center">
            <button className="bg-secon text-white px-4 py-2 rounded hover:bg-blue-600 w-[15rem] lg:w-[18rem]">CHECK AVAILABILTY</button>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 w-[15rem] lg:w-[18rem]">BOOK NOW</button>
            </div>
      


    </div>
  );
};

export default DomesticForm;
