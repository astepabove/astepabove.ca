---
layout: default
title: Home
custom_css: /assets/css/home.css
---

<!-- Hero Section -->
<section class="hero">
  <h1>Restore with Confidence</h1>
  <p>Our team repairs and refinishes escalator components to exceed code requirements and perform reliably in demanding environments.</p>
  <a href="#contact" class="btn">Get In Touch</a>
</section>

<!-- Services Section -->
<section id="services">
  <h2 class="section-title">Our Services</h2>
  <div class="services-grid">
    {% assign sorted_services = site.services | sort: 'weight' %}
    {% for service in sorted_services %}
    <a class="service-card-link" href="{{ service.url | relative_url }}">
      <div class="service-card">
        <h3>{{ service.title }}</h3>
        <p>{{ service.summary | default: service.excerpt | markdownify | strip_html | truncate: 140 }}</p>
      </div>
    </a>
    {% endfor %}
  </div>
</section>

<!-- About Section -->
<!-- <section id="about" class="about-section">
  <h2 class="section-title">Who We Are</h2>
  <p style="max-width: 800px; font-size: 1.1rem; margin-bottom: 20px;">
    Welcome to A Step Above Industrial Inc., your trusted provider for specialized industrial escalator and autowalk mechanical infrastructure overhauls. Our skilled workforce is dedicated to resolving complex structural step damage through engineering precision.
  </p>
  <div class="mission-box">
    <h4>Our Mission</h4>
    <p>"To enhance escalator safety, functionality, and longevity through expert craftsmanship and innovative repair solutions."</p>
  </div>
</section> -->

<!-- Contact Section -->
<section id="contact" style="text-align: center;">
  <h2 class="section-title">Contact Us</h2>
  <p style="margin-bottom: 30px;">Reach out today for inquiries, scheduling inspections, or requesting service estimates.</p>

  <div class="contact-container">
    <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST"> <!-- Swap with your chosen form handler endpoint -->
      <div class="form-group">
        <label for="name">Name *</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email *</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone *</label>
        <input type="tel" id="phone" name="phone" required>
      </div>
      <div class="form-group">
        <label for="message">Message *</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <button type="submit" class="btn" style="width: 100%;">Send Message</button>
    </form>
  </div>
</section>
