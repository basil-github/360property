import React from "react";
import Link from "next/link";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
            <Image
              src="/logo.png"
              alt="Picture of the author"
              width={128}
              height={51}
            />
            <p>
              Subscribe to receive latest listings and updates from property
              chips
            </p>
            <form className="subscribe_form">
              <input
                type="email"
                name=""
                id=""
                placeholder="Your email address"
              />
              <input type="submit" value="Subscribe" />
            </form>
            <ul className="social_links">
              <li>
                <InstagramIcon color="disabled" />
              </li>
              <li>
                <FacebookIcon color="disabled" />
              </li>
              <li>
                <TwitterIcon color="disabled" />
              </li>
              <li>
                <LinkedInIcon color="disabled" />
              </li>
              <li>
                <YouTubeIcon color="disabled" />
              </li>
            </ul>
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
