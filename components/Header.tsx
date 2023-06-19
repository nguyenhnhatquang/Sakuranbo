import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <aside className="border-b-[1px] hidden md:block">
        <div className="container flex">
          <div className="w-[50%] flex justify-start items-center">
            <a
              href="mailto: nguyenhnhatquang@gmail.com"
              className="hover:text-[#fc1010] flex items-center"
            >
              <Image
                src="/images/mail.svg"
                alt="mail-icon"
                width={23}
                height={23}
                className="mr-2 text-xs"
              />
              <span>nguyenhnhatquang@gmail.com</span>
              
            </a>
          </div>
          <div className="w-[50%] float-left flex justify-end">
            <button className="py-1 px-3 my-1 rounded-lg bg-[#fc1010] text-white hover:bg-[#10fcfc]">
              Đăng ký khoá học
            </button>
          </div>
        </div>
      </aside>
      <header>{/* Logo */}</header>
    </>
  );
};

export default Header;
