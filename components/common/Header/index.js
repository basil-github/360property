import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Modal from "@mui/material/Modal";

function index() {
  return (
    <header>
      <section className="container">
        <nav className="navbar">
          <Link href={"/"}>
            <a>
              <Image
                src="/logo.png"
                alt="Picture of the author"
                width={128}
                height={51}
              />
            </a>
          </Link>
          <ul className="navbar-nav">
            {headerMenu?.map((menu, i) => (
              <li key={i}>
                <Link href={menu.link}>
                  <a>{menu.title}</a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="login_like">
            <FavoriteBorderIcon />
            <Link href={"/auth/login"}>
              <a>
                <button>Login</button>
              </a>
            </Link>
          </div>
        </nav>
      </section>
    </header>
  );
}
const headerMenu = [
  { title: "Buy", link: "/" },
  { title: "Sell", link: "/about" },
  { title: "Rent", link: "/contact" },
  { title: "Property Services", link: "/" },
  { title: "About Us", link: "/about" },
  { title: "Contact Us", link: "/contact" },
];
export default index;
