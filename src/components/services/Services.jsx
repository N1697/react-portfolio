/*====================STYLE 1====================*/
// import React from "react";
// import { AiOutlineCheckCircle } from "react-icons/ai";
// import "./services.css";

// import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import { BsFillArrowLeftCircleFill } from "react-icons/bs";

// const Services = () => {
//   return (
//     <section id="services">
//       <h5>What I can do</h5>
//       <h2>Services</h2>

//       <div className="container services__container">
//         <article className="service__card">
//           <div className="service__header">
//             <h3>UI/UX Design</h3>
//           </div>

//           <ul className="service__list">
//             <li>
//               <AiOutlineCheckCircle className="service__list-icon" />
//               <p>Simple UI design for good UX</p>
//             </li>
//             <li>
//               <AiOutlineCheckCircle className="service__list-icon" />
//               <p>Understanding my user and their needs</p>
//             </li>
//             <li>
//               <AiOutlineCheckCircle className="service__list-icon" />
//               <p>Design isn't finished until you're using it</p>
//             </li>
//           </ul>
//         </article>
//         {/* End of UI/UX */}
//         <article className="service__card">
//           <div className="service__header">
//             <h3>Web Development</h3>
//           </div>

//           <ul className="service__list">
//             <li>
//               <AiOutlineCheckCircle className="service__list-icon" />
//               <p>I provide clean code</p>
//             </li>
//             <li>
//               <AiOutlineCheckCircle className="service__list-icon" />
//               <p>Let me help you with your project</p>
//             </li>
//             <li>
//               <AiOutlineCheckCircle className="service__list-icon" />
//               <p>Solving the problem comes first, coding next</p>
//             </li>
//           </ul>
//         </article>
//         {/* End of Web Development */}
//       </div>
//     </section>
//   );
// };

// export default Services;

/*====================STYLE 2====================*/
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./services.css";

const Services = () => {
  const [toggleModal, setToggleModal] = useState(0);
  const toggleTab = (index) => {
    setToggleModal(index);
  };

  return (
    <section id="services">
      <h5>What I can do</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service__card">
          <div>
            <MdDesignServices className="services__card--icon" />
            <h3 className="services__card--title">
              UI/UX <br /> Designer
            </h3>
          </div>

          <span className="services__card--button" onClick={() => toggleTab(1)}>
            View More
            <AiOutlineArrowRight className="services__card--arrow-btn" />
          </span>

          <div
            className={
              toggleModal === 1
                ? "services__card--modal active-modal"
                : "services__card--modal"
            }
          >
            <div className="services__modal-content">
              <AiOutlineClose
                className="services__modal--close-btn"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">
                The design is done when the problem goes away
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <AiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Simple UI design for good UX
                  </p>
                </li>

                <li className="services__modal-service">
                  <AiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Understanding my user and their needs
                  </p>
                </li>

                <li className="services__modal-service">
                  <AiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Design isn't finished until you're using it
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </article>
        {/* End of UI/UX Designer */}
        <article className="service__card">
          <div>
            <BsCodeSlash className="services__card--icon" />
            <h3 className="services__card--title">
              Web <br /> Developer
            </h3>
          </div>

          <span className="services__card--button" onClick={() => toggleTab(2)}>
            View More
            <AiOutlineArrowRight className="services__card--arrow-btn" />
          </span>

          <div
            className={
              toggleModal === 2
                ? "services__card--modal active-modal"
                : "services__card--modal"
            }
          >
            <div className="services__modal-content">
              <AiOutlineClose
                className="services__modal--close-btn"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Web Developer</h3>
              <p className="services__modal-description">
                Providing quality work to clients and companies
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <AiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">I provide clean code</p>
                </li>

                <li className="services__modal-service">
                  <AiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    I create the UI and UX interactions
                  </p>
                </li>

                <li className="services__modal-service">
                  <AiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">Responsive website</p>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Services;
