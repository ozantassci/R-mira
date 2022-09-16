import React from "react";
import "./footer.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import ios from "./../../assets/img/ios.png";
import android from "./../../assets/img/android.png";

const footer = () => {
  return (
    <MDBFooter className="footer text-center text-white">
      <MDBContainer className="p-4">
        <section className="mb-4 icon-wrapper">
          <a
            className="m-1 icon-social"
            href="https://www.facebook.com/rentacarssosyal"
            role="button"
            target="blank"
          >
            <FaFacebookSquare className="icon-social" size={40} />
          </a>

          <a
            className="m-1"
            href="https://tr.linkedin.com/company/rmira-teknoloji-a%C5%9F"
            role="button"
            target="blank"
          >
            <FaLinkedin className="icon-social" size={40} />
          </a>

          <a
            className="m-1"
            href="https://www.instagram.com/rentacarss_aractakip"
            role="button"
            target="blank"
          >
            <FaInstagramSquare className="icon-social" size={40} />
          </a>
        </section>

        <section className="mb-4 text-white">
          <p className="gap-4">Rent a car ve araç takip sistemlerinde son nokta.</p>
        </section>

        <section className="text-white">
          <MDBRow className="text-wrapper">
            <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
              <h5 className="footer-title">Anasayfa</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Ne yapıyoruz ?
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Ürünler
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Kvkk politikalarımız
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/">
                    <img src={ios} alt=""  />
                  </a>
                </li>

                <li>
                  <a href="/">
                    <img src={android} className="" alt=""  />
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
              <h5 className="footer-title">İletişim</h5>

              <ul className="list-unstyled mb-0 contact-wrapper">
                <li>
                  <a href="tel:+905321669627">
                    <BsTelephoneFill className="mx-2" size={20} /> +905321669627
                  </a>
                </li>
                <li>
                  <a href="mailto: info@rmira.com">
                    <GrMail className="mx-2" size={20} /> info@rmira.com
                  </a>
                </li>

                <li>
                  <p>
                    <MdLocationOn className="mx-2" size={25} />
                    Yenikoy Merkez Mh. Vatan Cd. TEKNOPARK 83 B17 KOCAELI, IZMIT
                    41100 TR
                  </p>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <p className="text-white mx-1">© 2022 Copyright Rmira</p>
      </div>
    </MDBFooter>
  );
};

export default footer;
