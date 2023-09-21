import React from "react";

function Companies() {
  return (
    <div className="w-full bg-white py-[50px]">
      <div className="container md:max-w-[1200px] m-auto max-w-[300px] px-6 text-center">

        <h1 className="font-semibold text-[#536E96] text-2xl">Trusted by over 25,000 teams around the world.</h1>

        <p className="text-[#536E96] text-xl py-5">Leading companies use the same courses to help employees keep their skills fresh.</p>

        {/* Images  */}
        <div className="md:flex md:gap-8 justify-center py-8 gap-4 hidden">
            <img src='./images/company-logo-1.png' alt="" />
            <img src='./images/company-logo-2.png' alt="" />
            <img src='./images/company-logo-3.png' alt="" />
            <img src='./images/company-logo-4.png' alt="" />
        </div>
      </div>
    </div>
  );
}

export default Companies;
