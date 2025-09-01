// === Mobile Menu Toggle ===
const nav = document.querySelector(".nav");
const headerContainer = document.querySelector(".header .container");

if (headerContainer) {
  const menuBtn = document.createElement("button");
  menuBtn.innerHTML = "☰";
  menuBtn.classList.add("menu-btn");
  headerContainer.prepend(menuBtn);

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

// === Hero Button Redirect ===
const shopBtn = document.querySelector(".hero-text button");
if (shopBtn) {
  shopBtn.addEventListener("click", () => {
    window.location.href = "shop.html";
  });
}

// === Contact Form Validation ===
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill in all fields before submitting.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    alert("✅ Thank you! Your message has been sent.");
    form.reset();
  });
}

// === Scroll-to-Top Button ===
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "⬆";
scrollBtn.classList.add("scroll-top");
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
