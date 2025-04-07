"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {

    const [open, setOpen] = useState(false);
  return (
    <div className="">
        <Image
        src="./menu.png" alt="" width={28} height={28}
        className="cursor-pointer"
        onClick={()=>setOpen((prev) => !prev)}/>
        {
            open && (
                <div className="">
                    <Link href="/">Home</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Home</Link>
                </div>
            )
        }
    </div>
  );
}
export default Menu;
