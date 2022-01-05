import React from "react";
import Link from "next/link";
import Image from "next/image";
function index() {
  return (
    <section className="footer_main">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <h6>Explore</h6>
            <ul>
              {footerData?.explore?.map(
                ({ link = menu.link, text = menu.text }, i) => (
                  <li key={i}>
                    <Link href={link}>
                      <a>{text}</a>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="col-md-2">
            <h6>Company</h6>
            <ul>
              {footerData?.company?.map(
                ({ link = menu.link, text = menu.text }, i) => (
                  <li key={i}>
                    <Link href={link}>
                      <a>{text}</a>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="col-md-2">
            <h6>Business</h6>
            <ul>
              {footerData?.business?.map(
                ({ link = menu.link, text = menu.text }, i) => (
                  <li key={i}>
                    <Link href={link}>
                      <a>{text}</a>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="offset-md-1 col-md-4">
            {/* <Image
              src="me.png"
              alt="Picture of the author"
              width={150}
              height={30}
            /> */}
            <p>
              Subscribe to receive latest listings and updates from property
              chips
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="copy_right">
            <h5>2021 Reelhomes Copyright all rights reserved</h5>
            <h5>Powered by InteractX Pvt.Ltd</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
const footerData = {
  explore: [
    { link: "/d", text: "Rent" },
    { link: "/", text: "Buy" },
    { link: "/", text: "Short stay" },
    { link: "/", text: "Stagnation" },
    { link: "/", text: "Home Shifting" },
    { link: "/", text: "Post Requirements" },
    { link: "/", text: "Maintenance" },
  ],
  company: [
    { link: "/", text: "About Us" },
    { link: "/", text: "Terms & Conditions" },
    { link: "/", text: "Privacy Policy" },
    { link: "/", text: "Careers" },
    { link: "/", text: "Sitemap " },
    { link: "/", text: "Testimonials " },
    { link: "/", text: "Feedback" },
  ],
  business: [
    { link: "/", text: "For Agencies " },
    { link: "/", text: "For Agents" },
    { link: "/", text: "Help Center " },
    { link: "/", text: "Sales Enquiry" },
    { link: "/", text: "Advertising " },
  ],
};
export default index;
