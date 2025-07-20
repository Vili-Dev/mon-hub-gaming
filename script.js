// FOND VANTA
window.addEventListener("DOMContentLoaded", function() {
  if (window.VANTA && VANTA.CLOUDS) {
    VANTA.CLOUDS({
      el: "#vanta-bg",
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 3.00,
      scaleMobile: 12.00,
      speed: 0.8,
      backgroundAlpha: 1.00,
      backgroundColor: 0xffffff,
      skyColor: 0x6d0000,
      cloudColor: 0xdeadad,
      cloudShadowColor: 0x183b10,
      sunColor: 0xffea49,
      sunGlareColor: 0xffbb73,
      sunlightColor: 0xffeb93
    });
  }
  renderGames();
});

// DONNÉES DES JEUX
const games = [
  {
    title: "Pendu DBZ",
    url: "https://pendu-dragon-ball.netlify.app/",
    img: "images/pendu.png",
    description: "Devine le mot DBZ avant que Freezer ne gagne."
  },
  {
    title: "Tic Tac Toe IA",
    url: "https://tic-tac-toe-maw.netlify.app/",
    img: "https://m.media-amazon.com/images/I/411RqsooQ3L.png",
    description: "Affronte un ami ou l'IA au morpion."
  },
  {
    title: "Devine le Nombre",
    url: "devine.html",
    img: "https://img.freepik.com/vecteurs-libre/neuf-numeros-dessines-main_78370-1657.jpg",
    description: "Trouve le nombre mystère en un minimum d'essais."
  }
  // autre jeux à ajouter ici + tard
];

// affichage dynamique des jeux
function renderGames() {
  const grid = document.querySelector(".games-grid");
  if (!grid) return;
  grid.innerHTML = "";
  games.forEach(game => {
    const a = document.createElement("a");
    a.href = game.url;
    a.className = "game-card";
    a.title = game.description;

    const img = document.createElement("img");
    img.src = game.img;
    img.alt = game.title;

    const span = document.createElement("span");
    span.textContent = game.title;

    a.appendChild(img);
    a.appendChild(span);
    grid.appendChild(a);

    // Animation d'apparition
    a.style.opacity = 0;
    setTimeout(() => { a.style.opacity = 1; a.style.transition = "opacity 3s"; }, 70);
  });

  // Animation JS immersive sur les cartes de jeu
  document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('mouseenter', e => {
      card.animate([
        { transform: 'translateY(0px) scale(1)', boxShadow: '0 6px 24px #0005' },
        { transform: 'translateY(-8px) scale(1.06) rotateZ(-1deg)', boxShadow: '0 18px 48px #000000ff' }
      ], {
        duration: 350,
        fill: 'forwards'
      });
    });
    card.addEventListener('mouseleave', e => {
      card.animate([
        { transform: 'translateY(-8px) scale(1.06) rotateZ(-1deg)', boxShadow: '0 18px 48px #bbf7ffa5' },
        { transform: 'translateY(0px) scale(1)', boxShadow: '0 6px 24px #0005' }
      ], {
        duration: 320,
        fill: 'forwards'
      });
    });
  });

}



 // Effet immersif aussi sur les boutons nav
function activateSlice(btn) {
  // Désactive sur tous les autres
  document.querySelectorAll('.nav-btn.slice-active').forEach(b => {
    if(b !== btn) b.classList.remove('slice-active');
  });
  btn.classList.add('slice-active');
}
function deactivateSlice(btn) {
  btn.classList.remove('slice-active');
}

// Hover souris (PC)
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => activateSlice(btn));
  btn.addEventListener('mouseleave', () => deactivateSlice(btn));
});

// Tap/click (Mobile)
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('touchstart', e => {
    activateSlice(btn);
    // On garde le slice un peu après le tap
    setTimeout(() => deactivateSlice(btn), 850);
  });
  // Optionnel : au click aussi pour desktop (pour garder l'effet après clic)
  btn.addEventListener('mousedown', () => activateSlice(btn));
  btn.addEventListener('mouseup', () => setTimeout(() => deactivateSlice(btn), 500));
});
