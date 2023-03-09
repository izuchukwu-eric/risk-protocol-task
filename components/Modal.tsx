import Image from "next/image";
import React, { ChangeEvent, SetStateAction, useState } from "react";

import Cancel from "../assets/cancel.svg";
import Search from "../assets/search.svg";
import { Tokens } from "../utils/data";
import { Token } from "../utils/types";

type Props = {
  set: React.Dispatch<SetStateAction<boolean>>;
  setReceiveToken: React.Dispatch<SetStateAction<Token | undefined>>;
  setPayToken: React.Dispatch<SetStateAction<Token | undefined>>;
  title: string;
  type: string
};

function Modal(props: Props) {
  const [tokens, setTokens] = useState(Tokens);
  const [value, setValue] = useState("");

  const handleClick = (token: Token) => {
    if (props.type === "You Pay") {
        props.setPayToken(token)
    }

    if (props.type === "You Get") {
      props.setReceiveToken(token)
    }

    props.set(false);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (value !== "") {
      const selected = tokens.filter((o) =>
        o.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setTokens(selected);
    } else {
      setTokens(Tokens);
    }

    setValue(value);
  };

  return (
    <>
      <div className="left-0 top-44 right-0 absolute justify-center items-center rounded-[20px] flex z-50 outline-none focus:outline-none">
        <div>
          <div className="border-0 rounded-lg shadow-lg flex flex-col md:w-[480px] w-[350px] md:mt-0 mt-40 max-w-[500px] md:h-[456px] h-[430px] bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between px-5 pt-5 rounded-t">
              <h3 className="text-xl font-semibold">{props.title}</h3>
              <button
                className="ml-auto border-0 text-black float-right leading-none font-semibold outline-none focus:outline-none"
                onClick={() => props.set(false)}
              >
                <Image src={Cancel} alt="cancel" />
              </button>
            </div>

            <div className="flex gap-2 mx-6 pt-3 pb-2 focus-within:border-b-2 focus-within:border-b-[#706eff]">
              <Image src={Search} alt="search" />
              <input
                placeholder="Search or paste any token"
                className="items-center bg-white box-border text-[rgb(31, 31, 65] w-full outline-none placeholder:text-[16px]"
                value={value}
                onChange={handleSearch}
              />
            </div>
            <div className="p-6 flex flex-col gap-5 overflow-y-auto">
              {tokens.map((token) => (
                <div
                  className="flex gap-2 items-center cursor-pointer"
                  key={token.id}
                  onClick={() => handleClick(token)}
                >
                  <Image
                    src={token.imageUrl}
                    alt="search"
                    width={48}
                    height={48}
                    className="object-contain drop-shadow-sm rounded-full"
                  />
                  <p className="text-[16px] font-semibold text-black">{token.name}</p>
                  <p className="text-[16px] font-semibold text-[#7578B5]">-</p>
                  <p className="text-[16px] font-semibold text-[#7578B5]">
                    {token.symbol}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default Modal;
