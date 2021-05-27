import { Link } from "react-router-dom";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: JSX.Element | Array<JSX.Element>;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.Layout}>
      <nav>
        <ul>
          <li>
            <Link to="/morse">generate Morse</Link>
          </li>
          <li>
            <Link to="/text">generate Text</Link>
          </li>
        </ul>
      </nav>
      {children}
      <nav className={styles.footerMenu}>
        <ul>
          <li>
            <Link to="/impressum">Impressum</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Layout;
