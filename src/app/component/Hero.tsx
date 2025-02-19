"use client"
import Link from 'next/link';
import React from 'react';





 export default async function HeroSection({}:{params:{allDetailPage:string}}){
  return (
    <div className="relative bg-gray-100 h-[670vh] mt-8 ">
      <div className=' items-center justify-center p-5 font-bold'>
        <p className='flex items-center justify-center'>Hello Nike App </p>
        
        <p className='flex items-center justify-center'>Download the app to access everything Nike. Get Your Great</p>
     
      </div>
      {/* Hero Section Container */}
      <div className="container mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center">

      {/* Image Section */}
    <div className="w-full md:w-2/2 flex justify-center items-center -mt-9">
      <img
        src="/1st shoe image.png" // Replace with your image source
        alt="Hero Image"
        className="w-full max-w-8xl h-auto object-cover rounded-lg shadow-lg ml-4 "
      />
    </div>
     </div>
     <div className='flex items-center justify-center font-bold text-lg'>
     <h1>First Look</h1>
     </div>
     <div className='flex items-center justify-center text-6xl font-bold'>
      <h1>Nike Air Max Pulse</h1>
     </div>
     <div className='flex items-center justify-center mt-5 text-sm'>
      <p>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse<br></br>
      —designed to push you past your limits and help you go to the max.</p>
     </div>
        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center md:justify-start translate-x-96 ml-40">
        <button className="px-6 py-3 bg-black text-white rounded-full shadow-lg hover:bg-blue-800 transition-all">
        Notify Me
        </button>
        <button className="px-6 py-3 bg-black text-white rounded-full shadow-lg hover:bg-blue-800 transition-all">
        Shop Air Max
        </button>
      </div>

      <div className='flex items-center justify-between mt-14 font-bold '>
        <p className='ml-40'>Best of Air Max</p>
        <p className='mr-72'>Shop</p>
         </div>
         <div className=' ml-96 pl-96 translate-x-80 -mt-8'>
         <img src='/right arow.png'alt='logo'className='bg-white rounded-full outline w-9 h-9'></img>
         <div className='ml-20 -mt-9'>
         <img src='/left arrow.png'alt='logo'className='bg-white rounded-full outline w-9 h-9'></img>
         </div>
         </div>
  <div className=" grid grid-cols-1 sm:grid-cols-3 gap-1 fle items-center justify-center ml-24  ">
    <img
      src="/Image 1.png"
      alt="Image 1"
      className="ml-8 w-full max-w-[300px] h-auto bg-gray-100 "
    />
    <img
      src="/Image 1.png"
      alt="Image 2" 
      className="ml-5 w-full max-w-[300px] h-auto bg-gray-300"
    />
    <img
      src="/Image 3.png"
      alt="Image 3"
      className="w-full max-w-[300px] h-auto bg-gray-300"
    />
  </div>

<div className='flex items-center justify-start ml-40  font-bold'>
  <p>Nike Air Max Pulse<br></br>
  <span className='text-gray-400'>Women's Shoes<br></br></span></p>
 <h1 className='ml-10 -mt-5 '> ₹ 13 995</h1>
</div>

<div className='flex items-center justify-center -mt-12  font-bold'>
  <p>Nike Air Max Pulse<br></br>
  <span className='text-gray-400'>Men's Shoes<br></br></span></p>
 <h1 className='ml-10 -mt-5 '> ₹ 13 995</h1>
</div>

<div className='flex items-center justify-center translate-x-96 ml-5 -mt-44 font-bold'>
  <p className='mt-32'>Nike Air Max Pulse<br></br>
  <span className='text-gray-400'>Men's Shoes<br></br></span></p>
 <h1 className='ml-10 mt-20 pt-5 '> ₹ 13 995</h1>
</div>

<div className='ml-40 mt-9 font-bold'>
 <h1>Featured</h1>
</div>

<div className="flex items-center justify-center  mt-5 ">
  <img
    src="/runing man.png"
    alt="Running Man"
    className="w-[1072px] h-auto"
  />
</div>
<div className='mt-14 flex items-center justify-center text-5xl font-bold'>
<h1>STEP INTO WHAT FEELS GOOD </h1>
</div>
<div className='text-sm flex items-center justify-center mt-5'>
<h1 >Cause everyone should know the feeling of running in that perfect pair.</h1>
</div>


<div className='flex items-center justify-center mt-6'>

<button className="  px-6 py-3 bg-black text-white rounded-full shadow-lg hover:bg-blue-800 transition-all">
         <Link href="./allDetailPage" >Find Your Store</Link> 
</button>
        </div>

        <div className='ml-44 font-bold mt-10'>
          <h1>Gear Up</h1>
        </div>
        <div className='flex items-center justify-center mr-60'>
         
          <div className='translate-x-44'>
           <h1>Shop Men's</h1>
          </div>
          <div className='translate-x-44 ml-10   w-10 h-10 mt-5'>
          <img src='/right arow.png'alt='logo'></img>
          </div>
          <div className='translate-x-44 ml-10  w-10 h-10 mt-5 '>
          <img src='/left arrow.png'alt='logo'></img>
          </div>

          <div className='flex items-center justify-center translate-x-80'>
           <h1 >Shop Women's</h1>
          </div>
          <div className='translate-x-80 ml-5   w-9 h-9 mt-5'>
          <img src='/right arow.png'alt='logo'></img>
          </div>
          <div className='translate-x-80 ml-5  w-10 h-10 mt-5 '>
          <img src='/left arrow.png'alt='logo'></img>
          </div>
          </div>
          <div className="flex flex-col items-center justify-center p-5">
  {/* Grid for Images */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
    {/* Image 1 */}
    <div className="flex flex-col items-center ml-10 ">
      <img
        src="/man suit.png"
        alt="Man Suit"
        className="w-[250px] h-auto object-contain rounded-lg shadow-lg ml-64"
      />
      <p className="mt-2 text-center text-[12px] font-bold translate-x-24 ml-2">Nike Dri-FIT ADV TechKnit Ultra</p>
      <p className=' ml-32 text-sm text-nowrap'><span className='text-gray-400'>Men's Short-Sleeve<br></br></span> <span className='text-gray-400'>Running Top</span></p>
       <p className='-mt-16 translate-x-60 -ml-5 text-sm font-bold'>₹ 3 895</p>
    </div>

    {/* Image 2 */}
    <div className="flex flex-col items-center ml-10">
      <img
        src="/man short.png"
        alt="Man Short"
        className="w-[250px] h-auto object-contain rounded-lg shadow-lg ml-32"
      />
      </div>
      <div className="flex flex-col items-center justify-center mt-16">
      <div className="flex justify-center items-center min-h-screen -translate-x-7">
  <div className="flex flex-col items-center justify-center -ml-16 -mt-2">
    <p className="text-center text-[12px] font-bold -translate-x-72 ml-24  -mt-96  text-nowrap">Men's 18cm (approx.) 2-</p>
    <p className="text-center text-sm -translate-x-72">
      <span className="text-gray-400  pl-24 ">in-1 Versatile Shorts</span>
      <br />
      <span className="text-gray-400 ml-16">Running Top</span>
    </p>
    <p className="text-center text-sm font-bold -ml-44 -mt-16">₹ 2 495 </p>

      <div>
</div>
</div>
    </div>
 
    {/* Image 3 */}
    <div className="flex flex-col items-center pt-9 -mt-96 -translate-y-96 -ml-40 ">
      <img
        src="/girl traouser.png"
        alt="Girl Trouser"
        className="w-[250px] h-auto -mt-16 object-contain rounded-lg shadow-lg ml-60"
      />
 
  </div>
  
</div>
<div className="flex flex-col items-center justify-center mt-12">
      <div className="flex justify-center items-center min-h-screen -translate-x-7">
  <div className="flex flex-col items-center justify-center -mt-2">
    <p className="text-center text-[12px] font-bold -translate-x-80 ml-80 -mt-64 pt-10 text-nowrap">Nike Dri-FIT ADV Run Division</p>
    <p className="text-center text-sm -translate-x-72">
      <span className="text-gray-400 ml-60 translate-x-40 ">Women's Short-Sleeve</span>
      <br />
      <span className="text-gray-400 mr-32 text-nowrap ml-80">Running Top</span>
    </p>
    <p className="text-center text-sm font-bold -ml-32 -mt-16">₹ 5 295</p>
    </div>

    {/* Image 4 */}
    <div className="flex flex-col items-center justify-center mt-14">
      <div className="flex justify-center items-center min-h-screen -translate-x-60"></div>
    <div className=" -mt-96  -translate-y-96 -translate-x-20 ">
      <img
        src="/gilr legy.png"
        alt="Girl Legging"
        className="w-[400px] h-[250px] -mt-40 -ml-44"
      />
        </div>
     <div className="flex flex-col items-center justify-center -mt-24">
    <p className="text-center text-[12px] font-bold -translate-x-80  -translate-y-80 -mt-96 pt-14 text-nowrap">Nike Fast</p>
    <p className="text-center text-sm   -mt-60 -translate-y-20 mr-14 -translate-x-44 -ml-9">
      <span className="text-gray-400 -translate-y-32  pr-16 text-nowrap ">Women's Mid-Rise 7/8 Running</span>
      <br />
      <span className="text-gray-400 -ml-32">Leggings with Pockets</span>
    </p>
    <p className="text-center text-sm font-bold -translate-x-44 -mt-64 pt-5 translate-y-24">₹ 3,795</p>
    </div>
  </div>
 
</div>

</div>
<div className='translate-x-44 -mt-80'>
<h1>Don't Miss</h1>
</div>
<div className='w-[330%] h-[50%] -mt-64 -translate-x-40'>
<img src='/new dobl.png'></img>
</div>
</div>

<div className='p-10 text-5xl'>
<h1>FLIGHT ESSENTIALS</h1>
</div>
<div className='text-sm -mt-5'>
<h1>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</h1>
</div>
<div className='p-6'>
<button className="px-6 py-3 bg-black text-white rounded-full shadow-lg hover:bg-blue-800 transition-all">
      <Link href="productDetail"> Shop</Link>
        </button>
</div>

<div className='-ml-96 -translate-x-60 font-bold'>
<h1>The Essentials</h1>
</div>

<div className='flex items-center justify-center gap-5 w-[25vw]'>
<img src='/shoe cloth.png'></img>
<img src='/shoper.png'></img>
<img src='/cupbord.png'></img>
</div>
</div>

<div className='flex items-center justify-center gap-80 -mt-40 rounded-full w-15  text-black  font-bold'>
<div className='bg-white px-6 py-4 rounded-full'>
<h1>Men's</h1>
</div>


<div className='bg-white text-black px-6 py-4 rounded-full'>
<h1>Women's</h1>
</div>

<div className='bg-white text-black px-6 py-4 rounded-full -ml-12'>
<h1>Kids'</h1>
</div>
</div>
<div className="flex flex-wrap items-center justify-center gap-44  pt-32">
  <span className="text-lg  font-bold">Icons</span>
  <span className="text-lg  font-bold">Shoes</span>
  <span className="text-lg  font-bold">Clothing</span>
  <span className="text-lg  font-bold">Kids'</span>
</div>

<div className='ml-72 gap-11 pt-4 font-bold'>

<p>Air Force 1<br></br>
Huarache<br></br>
Air Max 90<br></br>
Air Max 95</p>
</div>
<div className='ml-96 pl-32 -mt-24 font-bold'>
<p>All Shoes<br></br>
Custom Shoes<br></br>
Jordan Shoes<br></br>
Running Shoes</p>
</div>

<div className='ml-96 translate-x-80 pl-10 -mt-24 font-bold'>
<p>All Clothing<br></br>
Modest Wear<br></br>
Hoodies & Pullovers<br></br>
Shirts & Tops</p>

</div>

<div className='flex justify-end items-center -translate-x-44 mr-5 -mt-24 font-bold'>
<p>Infant & Toddler Shoes<br></br>
Kids' Shoes<br></br>
Kids' Jordan Shoes<br></br>
Kids' Basketball Shoes</p>
</div>



</div>
  

  
  );
};
 HeroSection

