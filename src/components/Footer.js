import React from 'react';
import Image1 from '../assets/images/1.png';
import Image2 from '../assets/images/2.png';
import Image3 from '../assets/images/3.png';
import Image4 from '../assets/images/4.png';

function Footer() {
  return (
    <footer className="p-4 text-dark bg-light">
      <div className="container">
        {/* First Row (Empty Columns for Now) */}
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            {/* You can add content here if needed */}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            {/* You can add content here if needed */}
          </div>
        </div>

        <hr />

        {/* Second Row (Main Footer Content) */}
        <div className="container">
          <div className="row">
            {/* Footer Text and Links */}
            <div className="col-sm-12 col-md-6">
              <p>© 2020 FasTech Systems Private Limited Sukkur,</p>
              <p>Privacy Policy | Terms & Conditions</p>
            </div>

            {/* Footer Images */}
            <div className="col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end">
              <img src={Image1} alt="Image1" className="footer-image" />
              <img src={Image2} alt="Image2" className="footer-image" />
              <img src={Image3} alt="Image3" className="footer-image" />
              <img src={Image4} alt="Image4" className="footer-image" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
