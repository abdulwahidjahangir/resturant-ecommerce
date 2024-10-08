"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CartIcon() {
  const { cart } = useCart();

  return (
    <Link href={"/cart"} className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Cart ({cart.cartArray.length})</span>
    </Link>
  );
}
