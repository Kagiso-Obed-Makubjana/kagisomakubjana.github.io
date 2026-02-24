// ================= MEDIUM FEED =================
const mediumUsername = "@deepercreatives";
const feedUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${mediumUsername}`;

fetch(feedUrl)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("medium-feed");
    const posts = data.items.slice(0, 6);

    posts.forEach(post => {
      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.description.replace(/<[^>]+>/g, '').slice(0, 120)}...</p>
        <a href="${post.link}" target="_blank">Read Article →</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    const container = document.getElementById("medium-feed");
    container.innerHTML = '<p>Check my latest posts directly on <a href="https://medium.com/@deepercreatives" target="_blank">Medium</a>.</p>';
    console.log("Medium feed error", err);
  });

// ================= DARK/LIGHT MODE =================
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// ================= MEDIUM CAROUSEL =================
const carousel = document.getElementById("medium-feed");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: 300, behavior: 'smooth' });
});
prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -300, behavior: 'smooth' });
});
