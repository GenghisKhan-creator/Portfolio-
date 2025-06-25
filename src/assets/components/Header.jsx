import React from "react";
import Logo from "./Logo";
import NavLinks from "./Nav";
import CV from "./CV";
import FloatingDockDemo from "./Floating";

function Header() {
    return (
        <header className="h-20 bg-transparent flex justify-between items-center z-20 sticky top-0">
            <Logo />
            {/* <NavLinks /> */}
            <FloatingDockDemo />
            <CV />
        </header>
    )
}

export default Header;