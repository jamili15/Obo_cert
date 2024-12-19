import React from "react";
import Image from "next/image";

interface HeaderProps {
  certname: string;
  city: string;
  province: string;
  lguLogo: string;
}

const Header: React.FC<HeaderProps> = ({
  certname,
  city,
  province,
  lguLogo,
}) => {
  return (
    <header className="flex flex-col gap-2 relative">
      <h1 className="font-bold text-[26px]">{certname}</h1>
      <div className="flex items-center justify-center gap-20 py-12 relative">
        <div>
          <div className="absolute top-12 left-10">
            <Image src={lguLogo} alt="lgu logo" height={80} width={80} />
          </div>
        </div>

        <div className="uppercase text-lg text-center leading-tight">
          <p className="normal-case">Republic of the Philippines</p>
          <p>{province}</p>
          <h1 className="font-bold text-[28px]">{city}</h1>
          <p>office of the city mayor</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
