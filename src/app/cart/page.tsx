import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/m11.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">น้ำแตงโม</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">30฿</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/m5_.jpg" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">โกโก้</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">40฿</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/m6_.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">ชาเขียว</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">40฿</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">รวมทั้งหมด (3 รายการ)</span>
          <span className="">110฿</span>
        </div>
        <div className="flex justify-between">
          <span className="">ค่าธรรมเนียม</span>
          <span className="">0.00฿</span>
        </div>
        <div className="flex justify-between">
          <span className="">ค่าจัดส่ง</span>
          <span className="text-green-500">ฟรี!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">รวมจัดส่ง(รวม. VAT)</span>
          <span className="font-bold">110฿</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          ชำระเงิน
        </button>
      </div>
    </div>
  );
};

export default CartPage;
