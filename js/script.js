*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

body {
  background-color: rgba(255 255 255 1) !important;
  font-family: "Be Vietnam Pro", serif !important;
  padding-left: 0px;
  padding-right: 0px;
  margin: 0 !important;
  padding: 0;
}

p {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 20px;
  font-weight: 400;
  color: #ffffff;
  position: relative;
  z-index: 5;
}

li {
  font-size: 1.25rem;
  margin-bottom: 10px;
  font-weight: 400;
  color: #ffffff;
  z-index: 5;
}

.be-vietnam-pro-thin {
  font-family: "Be Vietnam Pro", serif;
  font-weight: 100;
  font-style: normal;
}

.be-vietnam-pro-extralight {
  font-family: "Be Vietnam Pro", serif;
  font-weight: 200;
  font-style: normal;
}

.be-vietnam-pro-light {
  font-family: "Be Vietnam Pro", serif;
  font-weight: 300;
  font-style: normal;
}

.be-vietnam-pro-regular {
  font-family: "Be Vietnam Pro", serif;
  font-weight: 400;
  font-style: normal;
}

.be-vietnam-pro-medium {
  font-family: "Be Vietnam Pro", serif;
  font-weight: 500;
  font-style: normal;
}

.be-vietnam-pro-semibold {
  font-family: "Be Vietnam Pro", serif;
  font-weight: 600;
  font-style: normal;
}

.be-vietnam-pro-bold {
  font-family: "Be Vietnam Pro", serif;
  font-weight: 700;
  font-style: normal;
}

.be-vietnam-pro-extrabold {
  font-family: "Be Vietnam Pro", serif;
  font-weight: 800;
  font-style: normal;
}

.be-vietnam-pro-black {
  font-family: "Be Vietnam Pro", serif;
  font-weight: 900;
  font-style: normal;
}

.be-vietnam-pro-thin-italic {
  font-family: "Be Vietnam Pro", serif;
  font-weight: 100;
  font-style: italic;
}

.be-vietnam-pro-extralight-italic {
  font-family: "Be Vietnam Pro", serif;
  font-weight: 200;
  font-style: italic;
}

.be-vietnam-pro-light-italic {
  font-family: "Be Vietnam Pro", serif;
  font-weight: 300;
  font-style: italic;
}

.be-vietnam-pro-regular-italic {
  font-family: "Be Vietnam Pro", serif;
  font-weight: 400;
  font-style: italic;
}

.be-vietnam-pro-medium-italic {
  font-family: "Be Vietnam Pro", serif;
  font-weight: 500;
  font-style: italic;
}

.be-vietnam-pro-semibold-italic {
  font-family: "Be Vietnam Pro", serif;
  font-weight: 600;
  font-style: italic;
}

.be-vietnam-pro-bold-italic {
  font-family: "Be Vietnam Pro", serif;
  font-weight: 700;
  font-style: italic;
}

.be-vietnam-pro-extrabold-italic {
  font-family: "Be Vietnam Pro", serif;
  font-weight: 800;
  font-style: italic;
}

.be-vietnam-pro-black-italic {
  font-family: "Be Vietnam Pro", serif;
  font-weight: 900;
  font-style: italic;
}

.anton-regular {
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-style: normal;
}

#document {
  margin: 0 auto;
}

.landing-image-container {
  position: relative;
  width: 100%;
  height: 100%; /* Full viewport height */
  overflow: hidden;
  align-items: center;
  justify-content: center;
}

/* Common styles for all landing images */
.landing-image {
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}

/************************* Max-width 1200px *************************/

@media only screen and (max-width: 1200px) {
  .squareInnerContainer {
    min-height: auto !important;
  }
}

/*******************************************     MOBILE @ 1024px  *******************************************/
@media only screen and (max-width: 1025px) {
  .landing-image {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .desktop-device {
    display: block;
  }

  .mobile-device {
    display: none;
  }

  .desktop-image {
    display: none;
  }
  .mobile-image {
    display: block;
    width: 100%; /* Make the image responsive */
    height: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  .container d-flex align-items-center {
    margin-left: 15px;
    margin-right: 15px;
  }

  .thanks-container img {
    width: 100%; /* Make the image responsive */
    height: auto;
  }
  #navigation {
    z-index: 100;
    width: 100% !important;
    background: rgba(39, 39, 39, 0.1);
    backdrop-filter: blur(60px);
    /* fallback for old browsers */
    -webkit-backdrop-filter: blur(60px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 80px rgba(0, 0, 0, 0.3);
    margin-top: 0% !important;
    margin-left: 0% !important;
    margin-right: 0% !important;
    z-index: 100;
    border-radius: 0px !important;
    max-width: 100vw !important;
    min-width: 100vw !important;
  }
  section {
    padding-bottom: 20px !important;
    margin: 0 auto;
    background-color: #000000 !important;

    height: auto !important;

  }
}
/*******************************************END********************************************/

/*******************************************    MOBILE @ 750px     ********************************************/
@media only screen and (max-width: 750px) {
  .landing-image {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .desktop-image {
    display: none;
  }
  .mobile-image {
    display: block;
    width: 100%; /* Make the image responsive */
    height: auto;
    padding-left: 10px;
    padding-right: 10px;
  }

  div.thanks-container {
    max-width: 40vw; /* Maximum width of the image container */
    height: 100%;
  }
  .thanks-container img {
    width: 100%; /* Make the image responsive */
    height: auto;
  }

  .desktop-device {
    display: block;
  }

  .mobile-device {
    display: none;
  }
  ul {
    padding-left: 10px;
  }
  #navigation {
    z-index: 100;
    width: 100% !important;
    background: rgba(39, 39, 39, 0.1);
    backdrop-filter: blur(60px);
    /* fallback for old browsers */
    -webkit-backdrop-filter: blur(60px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 80px rgba(0, 0, 0, 0.3);
    margin-top: 0% !important;
    margin-left: 0% !important;
    margin-right: 0% !important;
    z-index: 100;
    border-radius: 0px !important;
    max-width: 100vw !important;
    min-width: 100vw !important;
  }
  .navbar-brand img {
    height: 8vw; /* Adjust the height of the logo */
    width: auto; /* Keeps the aspect ratio of the logo */
    padding-top: 1px !important;
    padding-bottom: 1px !important;
  }

  .heading-section {
    max-width: 85vw !important;
  }
  .heading-section1 {
    max-width: 85vw !important;
  }
  section {
    padding-bottom: 20px !important;
    margin: 0 auto;
    background-color: #000000 !important;
    height: auto !important;
  }
  #gap {
    background-color: transparent;
    height: 12px !important;
    max-height: 12px !important;
    min-height: 12px !important;
    box-shadow: none;
  }
}
/*******************************************END********************************************/

/******************************************* MOBILE @ 576px ********************************************/
@media only screen and (max-width: 576px) {

  section {
    padding: 0px 20px;
    margin: 0 auto;
    background-color: #000000 !important;
    height: auto !important;
  }
  #slides .col{
    font-size: 100% !important;
  }

  #contact {
    padding: 2px 2px !important;
    margin-bottom: 20px
  }

  .landing-image {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .desktop-image {
    display: none;
  }

  .mobile-image {
    display: block;
    width: 100%; /* Make the image responsive */
    height: auto;
    padding-left: 10px;
    padding-right: 10px;
  }

  #navbar .navbar.navbar-expand-lg.navbar-dark {
    align-items: center;
    justify-content: center;
    margin: auto 0;
  }

  .pdf-container {
    width: 100%;
    height: 100%; /* Make it responsive but not take full height on desktop */
    max-width: 95vw;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1px solid transparent; /* Optional: To show boundaries */
  }
  .desktop-device {
    display: none;
  }

  .mobile-device {
    display: block;
    width: 100%; /* Make the image responsive */
    height: auto;
    padding: 0px 10px;
  }

  p {
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 10px;
  }
  li {
    margin-bottom: 10px;
    font-size: 1rem;
  }
  container.text-center.quote {
    padding-left: 10px;
    padding-right: 10px;
    justify-content: center;
    align-items: center;
  }
  h3.quote {
    padding-left: 15px;
    padding-right: 15px;
    font-family: "Poppins", sans-serif !important;
    margin: 0 auto;
    font-size: 1rem !important;
  }

  .text-box {
    max-width: 95vw;
    width: 100%;
    position: relative;
    text-align: center;
  }
  .footer-image {
    max-width: 100%; /* Maximum width of the image container */
    height: 100%;
    margin-top: 50px !important;
    padding-bottom: 10px !important
  }

  .footer-image img {
    width: 100%; /* Make the image responsive */
    height: auto;
    max-width: 85vw !important;
  }

  #compMethods {
    text-align: left !important;
    padding-left: 10px
  }

  .navbar-toggler ml-auto {
    margin: 0 auto;
  }
  .navbar-collapse collapse show {
    background-color: #121212;
  }

  .fixedNav #navigation {
    position: fixed;
    top: 0;
    left: 0;
  }

  .headingImage {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    width: 100%;
    max-width: 90vw;
  }
  .resume-section ul {
    padding-left: 15px;
  }

  .navbar-brand img {
    max-width: 50vw;
    padding-top: 1px !important;
    padding-bottom: 3px !important;
  }

  .heading-section {
    max-width: 85vw !important;
    text-align: center;

  }
  .heading-section1 {
    max-width: 85vw !important;
    text-align: center;
  }
  #gap {
    background-color: transparent;
    height: 12px !important;
    max-height: 12px !important;
    min-height: 12px !important;
    box-shadow: none;
  }
  #companiMethods,
  #ooMethods {
    padding-left: 0px !important;
    text-align: left !important;
    margin-right: 40px !important;
  }
  .contactButton:active {
    transform: scale(0.4, 0.4);
    transition: 200ms;
  }
  .contactButton {
    transform: scale(0.5, 0.5);
    transition: transform all ease-out 200ms;
  }
  .title-container {
    text-align: left !important;
    padding-left: 0px !important;
  }
  p#ooMethods {
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
  .text-box {
    text-align: left;

  }
  .logo-image  {
    margin-left: 15px !important;
  }
  .logo-image img {
    height: 32px !important;
  }
  .col {
    margin-top: 100px;
    margin-bottom: 50px;
  }
  #contact {
    margin-top: 0px !important;
  }
  #contact h6 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }
  #contact container-fluid {
    margin-top: -50px !important;

  }
  #contact .footer-image {
    margin-top: -50px !important;
  }
  #slides h1, h5 {
    text-align: center !important;
    padding: 10px 10px !important;
  }
  #slides .col, .row, h1, h4, h6, a.button-2{
    text-align: center !important;

    padding: 10px 10px !important;
    margin: 0 auto !important;
    margin-left: 0px !important;
  }

  #ooMethods {
    text-align: center !important;
  }
  .resume-container img {
    width: 50% !important;
    height: auto !important;
  }
  .resume-section {
    max-width: 95vw !important;
    width: 100%;
  }
  .logo-image{
    width: 10px !important;
  }
}

/*******************************************END********************************************/

.resume-section ul {
  padding-left: 20px;
}
.resume-section2 ul {
  padding-left: 20px;
}

.text-box {
  width: 100%;
  color: #ffffff;
  z-index: 100;
  font-size: 11vw;
  font-weight: 700;
  font-family: "Anton", sans-serif !important;
  text-align: left;
  text-overflow: clip;
  padding-left: 20px;
}

.headingImage {
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  max-width: 540px;
}

.aboutImage {
  max-width: 100%;
}

.intro {
  margin-top: 40px;
  font-size: large;
}


/***************************************************    Sections       *****************************************/

#stats {
  background: #FFFFFF;
  color: #000000 !important;
  min-height: 50vh;
}

.paragraph {
  margin: 40px;

  justify-content: center;
  align-items: center;
}

#message {
  margin: 0 auto;
}

.section {
  padding: 0% 0%;
  background-color: #000000 !important;

}

#intro {
  padding: 40px 0;
  color: rgb(12 12 12);

}

#gap {
  background-color: transparent;
  height: 30px;
  max-height: 30px;
  min-height: 30px;
  box-shadow: none;
}
#starter {
  background-color: transparent;
  height: 15px;
  max-height: 15px;
  min-height: 15px;
  box-shadow: none;
}
#smallGap {
  background-color: #fff;
  height: 5px;
  max-height: 5px;
  min-height: 5px;
  box-shadow: none;
}

#mediumGap {
  background-color: #fff;
  height: 10px;
  max-height: 10px;
  min-height: 10px;
  box-shadow: none;
}

#skills {
  position: relative;
  overflow: hidden; /* Ensures the image is contained in the section */
  align-items: center; /* Center content vertically */
  justify-content: center; /* Center content horizontally */
  padding-top: 20px;
  padding-bottom: 130px;
}

.skills-container {
  mask-image: linear-gradient(to left, rgb(0, 0, 0), rgba(0, 0, 0, 0));
  z-index: 1;
  pointer-events: none; /* Prevent interactions with the image */
  position: absolute; /* So it can stretch behind everything */
  top: 0;
  left: 80%;
  width: 30%; /* Make the image span the entire width */
  height: 100%; /* Make the image span the entire height */
  object-fit: cover; /* Ensures the image covers the section without distortion */
  object-position: center;
}

.skills-container img {
  max-width: 100%;
  height: auto;
}

.statsSection h4 {
  color: rgb(12 12 12);
}

.contactSection {
  position: relative;
  overflow: hidden; /* Ensures the image is contained in the section */
  align-items: center; /* Center content vertically */
  justify-content: center; /* Center content horizontally */
}

.statsSection {
  margin: 0 auto;
}

.div-wrapper img {
  position: absolute;
  left: 0;
  bottom: 0;
}

#message {
  position: relative;
  overflow: hidden; /* Ensures the image is contained in the section */
  align-items: center; /* Center content vertically */
  justify-content: center; /* Center content horizontally */
}

#about {
  position: relative;
  overflow: hidden; /* Ensures the image is contained in the section */
  align-items: center; /* Center content vertically */
  justify-content: center; /* Center content horizontally */
  width: 100%;
  height: auto;

}

#resume {
  position: relative;
  overflow: hidden; /* Ensures the image is contained in the section */
  align-items: center; /* Center content vertically */
  justify-content: center; /* Center content horizontally */
  border: transparent;
  background-color: transparent !important;
  box-shadow: none !important;

}

#thanks {
  position: relative;
  overflow: hidden; /* Ensures the image is contained in the section */
  align-items: center; /* Center content vertically */
  justify-content: center; /* Center content horizontally */
  border: transparent;
  background-color: transparent !important;
  box-shadow: none !important;
  border-radius: 0%;
}


#numbers .section .statsSection container text-center {
  position: relative; /* Ensure the content is above the background image */
  z-index: 20; /* Content is on top */
}

.resume container text-center {
  position: relative; /* Ensure the content is above the background image */
  z-index: 20; /* Content is on top */
}

#slides {
  position: relative;
  overflow: hidden; /* Ensures the image is contained in the section */
  display: flex; /* For layout purposes, adjust if necessary */
  align-items: center; /* Center content vertically */
  justify-content: center; /* Center content horizontally */
  height: 100vh;
}

#contact {
  position: relative;
  overflow: hidden; /* Ensures the image is contained in the section */
  align-items: center; /* Center content vertically */
  justify-content: center; /* Center content horizontally */
  background-color: #ffffff !important;
  color: #333333 !important;
}

.contact-container {
  z-index: 0 !important;
  pointer-events: none; /* Prevent interactions with the image */
  position: absolute; /* So it can stretch behind everything */
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
}

.contact-container img {
  display: block;
  height: 100%;
}

.bg-overlay {
  background-color: #141414;
  opacity: .5;
  top: 0;
  left: 0;
  object-fit: cover;
}

.resume-image-container1 {
  mask-image: linear-gradient(to left, rgb(0, 0, 0), rgba(0, 0, 0, 0));
  z-index: 1;
  pointer-events: none; /* Prevent interactions with the image */
  position: absolute; /* So it can stretch behind everything */
  top: 0;
  left: 60%;
  width: 50%; /* Make the image span the entire width */
  height: 100%; /* Make the image span the entire height */
  object-fit: cover; /* Ensures the image covers the section without distortion */
  object-position: center;
}
.resume-image-container2 {
  mask-image: linear-gradient(to left, rgb(0, 0, 0), rgba(0, 0, 0, 0));
  z-index: 1;
  pointer-events: none; /* Prevent interactions with the image */
  position: absolute; /* So it can stretch behind everything */
  top: 0;
  left: 60%;
  width: 50%; /* Make the image span the entire width */
  height: 100%; /* Make the image span the entire height */
  object-fit: cover; /* Ensures the image covers the section without distortion */
  object-position: center;
}
.resume-image-container3 {
  mask-image: linear-gradient(to left, rgb(0, 0, 0), rgba(0, 0, 0, 0));
  z-index: 1;
  pointer-events: none; /* Prevent interactions with the image */
  position: absolute; /* So it can stretch behind everything */
  top: 0;
  left: 60%;
  width: 50%; /* Make the image span the entire width */
  height: 100%; /* Make the image span the entire height */
  object-fit: cover; /* Ensures the image covers the section without distortion */
  object-position: center;
}
.resume-image-container4 {
  mask-image: linear-gradient(to left, rgb(0, 0, 0), rgba(0, 0, 0, 0));
  z-index: 1;
  pointer-events: none; /* Prevent interactions with the image */
  position: absolute; /* So it can stretch behind everything */
  top: 0;
  left: 60%;
  width: 50%; /* Make the image span the entire width */
  height: 100%; /* Make the image span the entire height */
  object-fit: cover; /* Ensures the image covers the section without distortion */
  object-position: center;
}
.resume-image-container5 {
  mask-image: linear-gradient(to left, rgb(0, 0, 0), rgba(0, 0, 0, 0));
  z-index: 1;
  pointer-events: none; /* Prevent interactions with the image */
  position: absolute; /* So it can stretch behind everything */
  top: 0;
  left: 60%;
  width: 50%; /* Make the image span the entire width */
  height: 100%; /* Make the image span the entire height */
  object-fit: cover; /* Ensures the image covers the section without distortion */
  object-position: center;
}

.resume-image-container1 img,
.resume-image-container2 img,
.resume-image-container3 img,
.resume-image-container4 img,
.resume-image-container5 img {
  display: block;
  height: 100%;
}


.fixedWidth {
  max-width: 50vw;
  z-index: 5;
  position: relative;
  color: #fff;
}

.resume-section {
  display: grid;
  align-items: center; /* Center content vertically */
  padding-bottom: 20px;
  padding-left: 20px;
  object-fit: contain !important;
  position: relative;
  overflow: hidden;
  max-width: 98vw;
  width: 100%;
  border-radius: 20px;
}

.footer-image {
  position: relative;
  margin-top: 25px;
  padding-bottom: 20px
}

.footer-image img {
  max-width: 30vw;
}

.footer-container {
  z-index: 1;
  pointer-events: none; /* Prevent interactions with the image */
  position: absolute; /* So it can stretch behind everything */
  top: 0;
  left: 780%;
  width: 50%; /* Make the image span the entire width */
  height: 100%; /* Make the image span the entire height */
  object-fit: cover; /* Ensures the image covers the section without distortion */
  object-position: center;
}

.footer-container img {
  height: auto;
  max-width: 100%;
}

#footer {
  position: relative;
  overflow: hidden; /* Ensures the image is contained in the section */
  align-items: center; /* Center content vertically */
  justify-content: center; /* Center content horizontally */
  background-color: #000000 !important;
  color: #ffffff !important;
}

.main-container {
  z-index: 0 !important;
  pointer-events: none; /* Prevent interactions with the image */
  position: absolute; /* So it can stretch behind everything */
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
}

.main-container img {
  height: auto;
  max-width: 100%;
}

/* Headings */
.section .heading {
  width: 100%;
}

.heading-section {
  color: #ffffff;

  font-size: 1.5rem;
  z-index: 100;
  padding-top: 10px;
  position: relative;
  z-index: 100;
}

.heading-section1 {
  color: #00CC66;
  font-family: "Anton", sans-serif;
  font-size: 3rem;
  padding-top: 10px;
  position: relative;
  z-index: 100;
}

.skill {
  text-align: center;
}

section {
  padding: 0px 0px;
  margin: 0 auto;
  background-color: #000000 !important;
  height: auto;
  padding: 0% 0%;
}

.thanks-container {
  background-color: #ffffff;
}

.thanks-container img {
  width: 100%; /* Make the image responsive */
  height: auto;
}

/***************************************************    END Sections       *****************************************/

.thanks-container img {
  width: 100%; /* Make the image responsive */
  height: auto;
}

.squareItem {
  margin-top: 20px;

}

.squareInnerContainer {
  padding: 60px 32px;
  background-color: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  margin: 15px 0;
  word-wrap: break-word;
  text-align: center;
  object-fit: contain;
  min-height: 745px;
}

/*********************************************      Buttons       ********************************/


.lI {
  transform: translate3d(0, 0, 0);
  transition: 0.25s ease-in-out;
}

.lI:hover {
  transition: transform all ease-out 200ms;
  transform: scale(1.1, 1.1) translate3d(0, 0, 0);
}

.lI:active {
  transform: scale(0.9, 0.9);
  transition: 200ms;
}


/* CSS */
.button-1 {
  background-color: #00CC66;
  border-style: none;
  box-sizing: border-box;
  color: #FFF;
  cursor: pointer;
  display: inline-block;
  font-family: 'Be Vietnam Pro', sans-serif;
  border-radius: 2.25rem;
  padding: 12px 33px;
  font-size: 16px;
  font-weight: 400;
  list-style: none;
  margin: 0;
  outline: none;
  position: relative;
  text-align: center;
  text-decoration: none;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

}

.button-1:hover {

  background: #00cc66;
  color: #FFF;
  text-decoration: none;
  transform: scale(1.05, 1.05) translate3d(0, 0, 0);
  border-style: none;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.15);
}


.button-2 {
  background-color: transparent;
  border-radius: 2.25rem;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
  padding: 12px 33px;
  border-style: none;
  background: transparent !important;
  border: 2px solid #01cc65;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-family: 'Be Vietnam Pro', sans-serif;
  list-style: none;
  margin: 0;
  outline: none;
  position: relative;
  text-align: center;
  text-decoration: none;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-2:hover,
.button-2:focus {
  background-color: #00CC66 !important;
  color: #fff;
}

.button-3 {
  background-color: #FFF;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-block;
  font-family: 'Be Vietnam Pro', sans-serif;
  border-radius: 2.25rem;
  border: transparent;
  padding: 12px 33px;
  font-size: 16px;
  font-weight: 400;
  list-style: none;
  margin: 0;
  outline: none;
  position: relative;
  text-align: center;
  text-decoration: none;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-3:hover,
.button-3:focus {
  background-color: #00CC66;
  color: #fff;
  border: transparent;
}

/********************************************* End Buttons   ********************************/
.col-centered {
  float: none;
  margin-right: auto;
  margin-left: auto;
}
/********************************************     NAVBAR          ********************************/
#navigation {
  z-index: 1000;
  width: 100%;
  max-width: 35vw;
  border-radius: 9999px;
  background: rgba(39, 39, 39, 0.5);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 0.25px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  justify-content: center;
  min-width: 650px;
  padding-top: 0px;
  padding-bottom: 0px;
}

#navigation li {
  margin: 0 auto;
  color: #ffffff;
}

#navigation li a {
  color: #ffffff;
  font-size: .9rem !important;
  font-weight: 400;
}

#navigation li a:hover {
  color: #00cc66;
}

div#navbarNav.collapse.navbar-collapse {
  justify-content: right;
}

.fixedNav #navigation {
  position: fixed;
  top: 0;
  margin-top: 0.8%;
}

.navbar-brand {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  line-height: 0%;
  margin-left: 40px;
  margin-top: 40px;
  top: 0;
  left: 0;
  position: relative;
}

.navbar-brand img {
  height: 80px; /* Adjust the height of the logo */
  width: auto; /* Keeps the aspect ratio of the logo */
  padding: 0% !important;
  margin: 0;
}

.img-responsive {
  width: 100%;
  height: 100%;
}

.collapse.navbar-collapse {
  justify-content: center;
  align-items: center;
}

.container-fluid.align-items-center {
  padding: 0%;
}
/********************************************     END 6      ********************************/
.loader {
  width: 100vw;
  height: 100%;
  background-color: #000000;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
}

.loader .inner {
  width: 100%;
  height: 100%;
  background: url(../img/loader.webp) center center no-repeat;
  background-color: #000000;
  z-index: 10000;
  align-items: center;
  object-fit: contain;
}

div.skill {
  margin-top: 20px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: rgba(255, 255, 255, 1);
}

a {
  text-decoration: none;
}

.titleMessage {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 10px;
  bottom: 0;
  padding-bottom: 2%;
}

.chart {
  position: relative;
  width: 152px;
  height: 152px;
  display: inline-block;
  text-align: center;
}

canvas {
  margin: auto;
  display: block;
}

.chart .percent {
  color: rgb(12 12 12);
  line-height: 152px;
  display: inline-block;
  font-size: 35px;
}

.chart .percent:after {
  content: "%";
}

.squareItem {
  margin-top: 28px;
  position: relative;
  margin: auto 0;
}

.squareInnerContainer {
  align-items: center;
  padding: 25px 35px;
  text-align: center;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.squareContent h2 {
  font-size: 3.5rem;
  margin-bottom: 10px;
  font-weight: 400;
  color: #121212;
}

.squareContent h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: #121212;
}

.squareContent h4 {
  color: #121212;
}

.counter {
  color: #121212;
}

.squareIcon {
  padding-bottom: 15px;

  object-fit: contain;
}
