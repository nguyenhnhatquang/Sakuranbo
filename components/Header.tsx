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
      <header className="container flex item-center justify-center md:justify-between my-1">
        <div className="flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/nguyenhnhatquang/image/upload/v1687226907/Sakuranbo/y87xsw0pkggbrmyen2ru.svg"
            alt="Logo"
            width={100}
            height={100}
            className="mr-0 lg:mr-3"
          />
          <div className="hidden lg:block">
            <h1 className="text-3xl">TRUNG TÂM NHẬT NGỮ SAKURANBO</h1>
            <h3 className="text-lg">日本語センター</h3>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <Image
            src="/images/phone.svg"
            alt="Phone"
            width={50}
            height={50}
            className="mr-0 lg:mr-2"
          />
          <a href="tel:+84869073435" className="text-xl hover:text-[#fc1010]">0869073435</a>
        </div>
      </header>
    </>
  );
};

export default Header;
