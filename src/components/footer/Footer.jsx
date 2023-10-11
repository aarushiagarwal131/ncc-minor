import React from "react";
import { email, instagram, facebook, phone, maps, youtube } from "./import";
import "./footer.css";
const Footer = () => {
  return (
    <div class="ncc-bg-blue ncc-white">
      <div class="row mx-0 ">
        <div class="py-2 d-flex justify-content-between footerResponsive text-left">
          <div class="d-flex flex-column text-left  px-2 element px-lg-4">
            <span id="title_footer" class="pb-1">
              Contact Us:
            </span>
            <div class="d-flex align-items-center pt-2">
              <img src={phone} />
              <div class="px-2">
                <p id="content" class="m-0 pb-1">
                  +91 9302286449
                </p>
                <p id="content" class="pb-1 m-0">
                  +91 8178818593
                </p>
              </div>
            </div>
            <div class="d-flex align-items-center pt-2">
              <img src={email} />
              <div class="px-3">
                <p id="content" class="m-0 pb-1">
                  <a
                    href="mailto:ncc@nitj.ac.in"
                    class=" text-white text-decoration-none"
                  >
                    email of ncc_nit_jalandhar
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column text-left   px-2element  px-lg-4">
            <span id="title_footer" class="pb-1">
              Social Media:
            </span>
            <div class="d-flex align-items-center justify-content-between pt-4">
              <a target="_blank" id="logo1" href="https://www.facebook.com/">
                <img src={facebook} class="me-2" />
              </a>
              <a target="_blank" id="logo2" href="https://www.youtube.com/">
                <img src={youtube} class="me-2" />
              </a>
              <a
                target="_blank"
                id="logo3"
                href="https://instagram.com/ncc_nit_jalandhar?igshid=MzRlODBiNWFlZA=="
              >
                <img src={instagram} class="me-2" width="44px" height="44px" />
              </a>
              <a
                target="_blank"
                id="logo4"
                href="https://www.google.com/maps/place/Dr+B+R+Ambedkar+National+Institute+of+Technology+Jalandhar/@31.3958746,75.5358439,16z/data=!4m19!1m12!4m11!1m3!2m2!1d75.5358654!2d31.3962134!1m6!1m2!1s0x391a51d30c180edf:0x5b7633718d17ef33!2sDr+B+R+Ambedkar+National+Institute+of+Technology+Jalandhar+Grand+Trunk+Road+Barnala+-+Amritsar+Bypass+Rd+Jalandhar,+Punjab+144011!2m2!1d75.5358439!2d31.3958746!3m5!1s0x391a51d30c180edf:0x5b7633718d17ef33!8m2!3d31.3958746!4d75.5358439!16zL20vMDRsZDVq?entry=ttu"
              >
                <img src={maps} class="me-2" width="44px" height="44px" />
              </a>
            </div>
          </div>
          <div class="d-flex flex-column text-left ele  px-2ment NIT px-lg-4">
            <span id="title_footer" class="pb-1">
              Website:
            </span>
            <div class="d-flex align-items-center pt-2">
              <div>
                <a
                  href="https://indiancc.nic.in/"
                  target="_blank"
                  id="content"
                  class="text-decoration-none text-white"
                >
                  NCC Official
                </a>
              </div>
            </div>
            <div class="d-flex align-items-center pt-2">
              <div>
                <a
                  href="https://www.nitj.ac.in/"
                  target="_blank"
                  id="content"
                  class="m-0 pb-1"
                >
                  NTT Jalandhar
                </a>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column text-left element ">
            <span id="title_footer" class="pb-1">
              Address:
            </span>
            <div class="d-flex align-items-center pt-2">
              <p id="content" class="m-0 pb-1 address">
                Grand Trunk Road, Barnala - Amritsar Bypass Rd, Jalandhar,
                Punjab 144011,NIT Jalandhar
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Mobile Footer --> */}

        <div class="py-2 d-flex flex-column footerResponsive1 text-left">
          <div
            id="footer_heading"
            class="d-flex flex-column text-left px-4 element"
          >
            <h2>National Cadet Corps</h2>
            <h4>NIT Jalandhar</h4>
          </div>
          <div class="d-flex flex-column text-left px-4 element">
            <div
              id="title_footer"
              class="d-flex justify-content-between align-items-center"
            >
              <div class="pb-1">Contact Us:</div>
              <i
                class="fa fa-plus"
                onclick="footer('contact_content',this)"
              ></i>
            </div>
            <div id="contact_content">
              <div class="d-flex align-items-center pt-3">
                <img src={phone} />
                <div class="px-2">
                  <p id="content" class="m-0 pb-1">
                    +91 9302286449
                  </p>
                  <p id="content" class="pb-1 m-0">
                    +91 8178818593
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center pt-2">
                <img src={email} />
                <div class="px-3">
                  <p id="content" class="m-0 pb-1">
                    <a
                      href="mailto:ncc@nitj.ac.in"
                      class="text-white text-decoration-none"
                    >
                      email of ncc_nit_jalandhar
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column text-left px-4 element">
            <div
              id="title_footer"
              class="d-flex justify-content-between align-items-center"
            >
              <div class="pb-1">Address:</div>
              <i
                class="fa fa-plus"
                onclick="footer('address_content',this)"
              ></i>
            </div>
            <div id="address_content">
              <div class="d-flex align-items-center pt-3">
                <p id="content" class="m-0 pb-1 address">
                  3 UK CTR NCC, NIT Jalandhar Jalandhar, Haridwar Uttarakhand,
                  247667
                </p>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column text-left px-4 element">
            <div
              id="title_footer"
              class="d-flex justify-content-between align-items-center"
            >
              <div class="pb-1">Webiste:</div>
              <i
                class="fa fa-plus"
                onclick="footer('website_content',this)"
              ></i>
            </div>
            <div id="website_content">
              <div class="d-flex align-items-center pt-3">
                <div class="px-3">
                  <a
                    href="https://indiancc.nic.in/"
                    target="_blank"
                    id="content"
                    class="text-decoration-none ncc-white"
                  >
                    NCC Official
                  </a>
                </div>
              </div>
              <div class="d-flex align-items-center pt-3">
                <div class="px-3">
                  <a
                    href="https://www.nitj.ac.in/"
                    target="_blank"
                    id="content"
                    class="m-0 pb-1"
                  >
                    NIT Jalandhar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-evenly pt-1 pb-2">
            <a
              target="_blank"
              id="logo1"
              href="https://www.facebook.com/ncc.nitj"
            >
              <img src={facebook} class="mx-2" />
            </a>
            <a
              target="_blank"
              id="logo2"
              href="https://www.youtube.com/channel/UCrx5OBkbdv5dldJBDXFfJbA"
            >
              <img src={youtube} class="mx-2" />
            </a>
            <a
              target="_blank"
              id="logo3"
              href="https://www.instagram.com/ncc.nitj/"
            >
              <img src={instagram} class="mx-2" width="44px" height="44px" />
            </a>
            <a target="_blank" id="logo4" href={maps}>
              <img
                src="images/svgs/maps.png"
                class="mx-2"
                width="44px"
                height="44px"
              />
            </a>
          </div>
        </div>
      </div>
      <p
        class="d-flex align-items-center text-center justify-content-center ncc-bg-copyright footer-copyright ncc-16 ncc-white py-2"
        id="content"
      >
        © Copyright 2023 - NCC NIT Jalandhar | All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
