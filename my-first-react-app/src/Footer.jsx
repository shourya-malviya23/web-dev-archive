import "./Footer.css";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li>Fitness Dashboard</li>
          <li>Services</li>
        </ul>
        <ul>
          <li>Watch videos</li>
          <li>Discord</li>
        </ul>
        <ul>
          <li>Privacy policy</li>
          <li>Terms and conditions</li>
        </ul>
      </div>
      <div className="footer-copyright">
        <p>© 2024 Fitness Dashboard. All Rights Reserved.</p>
      </div>
      <div className="lower-links">
        <a href="#">Link1</a>
        <a href="#">Link2</a>
        <a href="#">Link3</a>
      </div>
    </footer>
  );
}
