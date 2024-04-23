import React from 'react'

const Footer = () => {
  return (
    <div className="  flex m-3 absolute text-orange-400  h-screen w-full justify-center items-center z-40">
        <div className="flex justify-center items-center absolute bottom-0 w-full text-gray-400 text-sm py-4">
          <p className="mx-2 cursor-pointer">Terms of Service</p>
          <p className="mx-2 cursor-pointer ">© 2024 Gamer-Geek Guild. All rights reserved.</p>
          <p className="mx-2 cursor-pointer">Privacy Policy</p>
          <p className="mx-2 cursor-pointer">Contact Us</p>
        </div>
      </div>
  )
}

export default Footer