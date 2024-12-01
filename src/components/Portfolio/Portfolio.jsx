import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";

const Portfolio = () => {
  const iframeData = [
    { url: 'https://hunted-house-rosy.vercel.app/', title: 'Hunted House' },
    { url: 'https://spiral-galaxy-five.vercel.app/', title: 'Spiral Galaxy' },
    { url: 'https://3d-text-one-sigma.vercel.app/', title: '3D Text' },
    { url: 'https://portfolio-alaaeldin-v1.vercel.app/', title: '3D Portfolio' },
    { url: 'https://hologram-shader-rho.vercel.app/', title: 'Glitch Hologram' },
  ];

  // Function to handle card click and open respective URL
  const handleCardClick = (url) => {
    window.open(url, '_blank'); // Open the respective iframe URL in a new tab
  };

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>

        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>Perfect solution for digital experience</p>
          </div>
          <span className="secondaryText">Explore More Works</span>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          {iframeData.map((iframe, index) => (
            <motion.div
              variants={fadeIn("up", "tween", .5, .6)}
              className="card"
              key={index}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
              onClick={() => handleCardClick(iframe.url)} // Make card clickable
            >
              <h2 style={{ textDecoration: 'underline', color: 'orange', cursor: 'pointer' }}>
                {iframe.title}
              </h2>
              <motion.div
                className="card-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {/* Card Content */}
                <div
                  className="iframe-container"
                  style={{
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)', // Increased shadow effect
                    borderRadius: '8px',
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                >
                  <iframe
                    src={iframe.url}
                    title={iframe.title}
                    className="website-frame"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                    style={{
                      width: '100%',
                      height: '350px', // Fixed height for iframe
                      border: 'none',
                      borderRadius: '8px', // Apply rounded corners
                    }}
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
