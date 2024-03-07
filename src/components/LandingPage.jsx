
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/LandingPage.css';

function LandingPage() {
  return (
    <div>
      <header>
        <Navbar />
        <h1>Welcome to Airplane Enthusiasts</h1>
        <p>To Fly, To Serve.</p>
      </header>
      <main>
        <section id="about">
          <h2>About Us</h2>
          <p>We are passionate about airplanes.</p>
        </section>
        <section id="services">
          <h2>Our Services</h2>
          <ul>
            <li>News and Updates</li>
            <li>Reviews</li>
            <li>Community</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Got questions or want to share your flight experiences? Reach out to us!</p>
          <p>Email: contact@airplaneenthusiasts.com</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;