function enterSite() {
  const welcome = document.getElementById("welcome-screen");
  welcome.classList.add("hidden");
}
function enterSite() {
  const welcome = document.getElementById("welcome-screen");
  welcome.classList.add("hidden");

  
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function enterSite() {
  
  const audio = document.getElementById("enterSound");
  audio.currentTime = 0; 
  audio.play();

  
  const welcome = document.getElementById("welcome-screen");
  welcome.classList.add("hidden");

  
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('diaryText');
    const btn = document.getElementById('toggleDiary');

    function showDiary() {
      popup.classList.toggle('hidden');
      
      popup.setAttribute('aria-hidden', popup.classList.contains('hidden') ? 'true' : 'false');
      
      if (!popup.classList.contains('hidden')) {
        popup.classList.remove('animate');
        
        void popup.offsetWidth;
        popup.classList.add('animate');
      }
    }

    btn.addEventListener('click', showDiary);
  });

const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


const fadeTargets = document.querySelectorAll('.fade-target');

fadeTargets.forEach((el, index) => {
 
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      setTimeout(() => {
        entry.target.classList.add('fade-out');
      }, 5000); 
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.fade-paragraphs .fade-target');

  
  const READ_MS = 15000;      
  const VISIBLE_RATIO = 0.85; 

  const timers = new WeakMap();

  
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;

      
      if (el.classList.contains('fade-out')) {
        io.unobserve(el);
        return;
      }

      if (entry.intersectionRatio >= VISIBLE_RATIO && entry.isIntersecting) {
        
        if (!timers.has(el)) {
          const t = setTimeout(() => {
            el.classList.add('fade-out');
            io.unobserve(el);
            timers.delete(el);
          }, READ_MS);
          timers.set(el, t);
        }
      } else {
        
        const t = timers.get(el);
        if (t) {
          clearTimeout(t);
          timers.delete(el);
        }
      }
    });
  }, {
    threshold: [0, 0.25, 0.5, 0.75, 0.85, 1] 
  });

  targets.forEach(el => io.observe(el));

  
});








function submitVote() {
  const selected = document.querySelector('input[name="chip"]:checked');
  const resultBox = document.getElementById("voteResult");
  if (selected) {
    const vote = selected.value;
    let message = "";
    if (vote === "yes") {
      message = "You embrace innovation, even if it risks your autonomy.";
    } else if (vote === "no") {
      message = "You value authenticity and resist technological control.";
    } else {
      message = "You remain cautious—perhaps wisely.";
    }
    resultBox.innerText = `Your choice: "${vote.toUpperCase()}". ${message}`;
  } else {
    resultBox.innerText = "⚠️ Please select an option before submitting.";
  }
}