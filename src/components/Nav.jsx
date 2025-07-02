import styles from './nav.module.css';
export default function Nav() {
  return (
    <nav  className={styles.nav}>
      {/* Left: Logo */}
      <div className={styles.logo}>
        <span  id={styles.homeicon}>🏠</span>
        <span className="font-bold text-lg text-blue-700">PropEase</span>
      </div>
      {/* Middle: Links */}
      <div className={styles.nav_links}>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">How it works</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Properties</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">FAQs</a>
      </div>
      {/* Right: Contact Us */}
      <div className={styles.contact}>
        <a
          href="#"
          
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}