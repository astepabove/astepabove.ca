---
layout: default
title: Home
description: A Step Above Industrial Inc. provides expert escalator and moving walkway repairs, welding, mechanical services, and mobile industrial support across BC.
image: /images/escalators-card-image.jpg
custom_css: /assets/css/home.css
---

<!-- Hero Section -->
<section class="hero">
  <video class="hero-video" autoplay muted loop playsinline webkit-playsinline preload="auto" disablepictureinpicture aria-hidden="true">
    <source src="{{ '/assets/videos/escalator-hero.mp4' | relative_url }}" type="video/mp4">
  </video>
  <div class="hero-content">
    <h1>Restore with Confidence</h1>
    <p>Our team repairs and refinishes escalator components to exceed code requirements and perform reliably in demanding environments.</p>
    <a href="#contact" class="btn">Get In Touch</a>
  </div>
</section>

<!-- Services Section -->
<section id="services">
  <h2 class="section-title">Our Services</h2>
  <div class="services-grid">
    {% assign sorted_services = site.services | sort: 'weight' %}
    {% for service in sorted_services %}
    <a class="service-card-link" href="{{ service.url | relative_url }}">
      <div class="service-card">
        {% if service.image %}
        <div class="service-card-media">
          <img src="{{ service.image | relative_url }}" alt="{{ service.title }} preview">
        </div>
        {% endif %}
        <div class="service-card-content">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description | default: service.excerpt | markdownify | strip_html | truncate: 140 }}</p>
        </div>
      </div>
    </a>
    {% endfor %}
  </div>
</section>

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
