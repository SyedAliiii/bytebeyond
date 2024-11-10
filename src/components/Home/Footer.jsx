import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

    <footer className="footer" role="contentinfo" itemScope itemType="http://schema.org/WPFooter">
    <div className="social" role="navigation" aria-labelledby="social-heading">
        <h3 id="social-heading" className="sr-only">Follow us on social media</h3>
        <Link><i className="fa-brands fa-facebook" /></Link>
        <Link><i className="fa-brands fa-x-twitter" /></Link>
        <Link><i className="fa-brands fa-mastodon" /></Link>
        <Link><i className="fa-brands fa-instagram" /></Link>
    </div>
    <hr className="footer-break" />
    <ul className="footer-links" role="navigation" aria-labelledby="footer-links-heading">
        <h3 id="footer-links-heading" className="sr-only">Footer Links</h3>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/'}>All Blogs</Link></li>
    </ul>
    <p className="copyright">© 2024 Byte & Beyond</p>
    </footer>


    </>
  )
}
