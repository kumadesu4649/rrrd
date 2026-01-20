document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('is-active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Video Mute & Autoplay Control
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        // HTML属性ではなくJSで明示的に設定
        heroVideo.muted = true;         // 音声を消す (Autoplayに必須)
        heroVideo.defaultMuted = true;  // 初期状態としてミュートを設定
        heroVideo.loop = true;          // ループ再生
        heroVideo.playsInline = true;   // iOS等のためのインライン再生設定

        // 再生を試行
        heroVideo.play().catch(error => {
            console.log("Video autoplay prevented:", error);
            // 自動再生がブロックされた場合は、ユーザーインタラクション（クリックなど）を待つ等の処理をここに記述可能
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});
