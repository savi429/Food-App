// import "./Footer.css";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 ">
      <div class="footer-wrapper">
        <div class="flex justify-between flex-wrap">
          <nav class="flex flex-wrap gap-4">
            <div>
              <h3>Company</h3>
              <ul className="flex flex-col">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>GSAP</h3>
              <ul className="flex flex-col">
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Showcase</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Connect</h3>
              <ul className="flex flex-col">
                <li>
                  <a href="#">Codepen</a>
                </li>
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Linkedin</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="flex flex-wrap">
          <p>©2023 GreenSock, Inc. All rights reserved.</p>
          <p>Privacy Policy.</p>
          <p>Terms of Use.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
