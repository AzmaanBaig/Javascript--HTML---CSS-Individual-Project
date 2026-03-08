// Shared navigation and footer injection
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

const navHTML = `
<nav>
  <a href="index.html" class="nav-brand">
    <div class="logo-icon">🌿</div>
    <span class="brand-name">Elder<span>Care</span></span>
  </a>
  <ul class="nav-links" id="navLinks">
    <li><a href="index.html" ${currentPage==='index.html'?'class="active"':''}>Home</a></li>
    <li><a href="services.html" ${currentPage==='services.html'?'class="active"':''}>Services</a></li>
    <li><a href="caregivers.html" ${currentPage==='caregivers.html'?'class="active"':''}>Caregivers</a></li>
    <li><a href="pricing.html" ${currentPage==='pricing.html'?'class="active"':''}>Pricing</a></li>
    <li><a href="booking.html" class="nav-cta ${currentPage==='booking.html'?'active':''}">Book Now</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </button>
</nav>`;

const footerHTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="brand-name">Elder<span style="color:var(--sage-light)">Care</span></div>
      <p>Compassionate, professional elderly care services. Our trained caregivers bring dignity, safety, and warmth to every home they serve.</p>
      <div style="margin-top:1.25rem;display:flex;gap:0.5rem;flex-wrap:wrap;">
        <span class="footer-badge">✓ Licensed & Insured</span>
        <span class="footer-badge">✓ Background Checked</span>
      </div>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="services.html">Medical Care</a></li>
        <li><a href="services.html">Companion Care</a></li>
        <li><a href="services.html">Post-Surgery Care</a></li>
        <li><a href="services.html">Overnight Care</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="caregivers.html">Our Caregivers</a></li>
        <li><a href="pricing.html">Pricing</a></li>
        <li><a href="booking.html">Book a Caregiver</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Support</h4>
      <ul>
        <li><a href="#">24/7 Helpline</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 ElderCare. All rights reserved. Serving families with heart.</p>
    <div class="footer-badges">
      <span class="footer-badge">HIPAA Compliant</span>
      <span class="footer-badge">Accredited Agency</span>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
    // Inject nav
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) navPlaceholder.outerHTML = navHTML;

    // Inject footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.outerHTML = footerHTML;

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });
    }
});