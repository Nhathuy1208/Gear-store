import React from "react";
import Link from "next/link";

import { AiOutlineShopping, AiOutlineMenu } from "react-icons/ai";

import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";

export default function Navbar() {
    const { showCart, setShowCart, totalQuantities } = useStateContext();

    const showLinks = () => {
        var topNav = document.getElementById("topNav");
        if (topNav.className === "header-right") {
            topNav.className += " responsive";
        } else {
            topNav.className = "header-right";
        }
    };

    return (
        <div className="navbar-container">
            <div className="header-right" id="topNav">
                <Link href="/" onClick={showLinks}>
                    Shadow Gear
                </Link>
                <Link href="/headphone">Headphone</Link>
                <Link href="/keyboard">Keyboard</Link>
                <Link href="/mouse">Mouse</Link>
                <button
                    type="button"
                    className="icon"
                    onClick={() => showLinks()}
                >
                    <AiOutlineMenu />
                </button>
                <button
                    type=""
                    className="cart-icon"
                    onClick={() => setShowCart(true)}
                >
                    <AiOutlineShopping />
                    <div className="cart-item-qty">{totalQuantities}</div>
                </button>
            </div>
            {showCart && <Cart />}
        </div>
    );
}
