/* =========================
   GLOBAL REFERENCES
========================= */
const unlockOverlay = document.getElementById('audio-unlock');

const song01 = document.getElementById('song01');
const song02 = document.getElementById('song02');
const song03 = document.getElementById('song03');
const voiceNote = document.getElementById('voiceNote');

const countdownSection = document.getElementById('countdown-section');
const birthdaySection = document.getElementById('birthday-section');
const birthdayLove = document.getElementById('birthday-love');

const balloonsContainer = document.getElementById('balloons-container');
const crackersContainer = document.getElementById('crackers-container');

const letterSection = document.getElementById('letter-section');
const letterTextContainer = document.getElementById('letter-text-container');
const tapForward = document.getElementById('tap-forward');

const questionSection = document.getElementById('question-section');
const answerBtns = document.querySelectorAll('.answer-btn');
const answerResult = document.getElementById('answer-result');

const voiceSection = document.getElementById('voice-section');
const voiceTrigger = document.getElementById('voice-trigger');

const bgSlides = document.querySelectorAll('.bg-slide');

let audioUnlocked = false;
let bgIndex = 0;
let bgTimer = null;

/* =========================
   AUDIO UNLOCK
========================= */
unlockOverlay.addEventListener('click', () => {
  if (audioUnlocked) return;
  audioUnlocked = true;

  unlockOverlay.style.display = 'none';

  song01.currentTime = 15;
  song01.loop = true;
  song01.play().catch(() => {});
});

/* =========================
   BACKGROUND LOOP
========================= */
function showBackground(index) {
  bgSlides.forEach((bg, i) => {
    bg.style.opacity = i === index ? '1' : '0';
  });
}

function startBackgroundLoop() {
  showBackground(bgIndex);

  bgTimer = setInterval(() => {
    bgIndex = (bgIndex + 1) % bgSlides.length;
    showBackground(bgIndex);
  }, 3000);
}

/* =========================
   COUNTDOWN LOGIC
========================= */
const targetDate = new Date(
  new Date().getFullYear(),
  0,
  18,
  0,
  0,
  0
);

const hEl = document.getElementById('hours');
const mEl = document.getElementById('minutes');
const sEl = document.getElementById('seconds');

let countdownInterval = null;

function startCountdown() {
  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate.getTime() - now;

    if (diff <= 0) {
      clearInterval(countdownInterval);
      onTimerEnd();
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    hEl.textContent = String(hours).padStart(2, '0');
    mEl.textContent = String(minutes).padStart(2, '0');
    sEl.textContent = String(seconds).padStart(2, '0');
  }, 1000);
}

/* =========================
   TIMER END SEQUENCE
========================= */
function onTimerEnd() {
  countdownSection.style.display = 'none';

  song01.pause();
  song01.currentTime = 0;

  song02.currentTime = 57;
  song02.play().catch(() => {});

  triggerBalloons();
  triggerCrackers();

  birthdaySection.classList.remove('hidden');

  setTimeout(() => {
    birthdayLove.classList.remove('hidden');
  }, 8000);

  setTimeout(showLetter, 13000);
}

/* =========================
   BALLOONS
========================= */
function triggerBalloons() {
  for (let i = 0; i < 10; i++) {
    const b = document.createElement('div');
    b.className = 'balloon';

    b.style.left = Math.random() * 100 + '%';
    b.style.setProperty('--x', `${Math.random() * 80 - 40}px`);
    b.style.setProperty('--z', `${Math.random() * 60 - 30}px`);
    b.style.setProperty('--r', `${Math.random() * 30 - 15}deg`);

    balloonsContainer.appendChild(b);

    setTimeout(() => b.remove(), 3000);
  }
}

/* =========================
   CRACKERS
========================= */
function triggerCrackers() {
  const anim = lottie.loadAnimation({
    container: crackersContainer,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'assets/animations/crackers.json'
  });

  setTimeout(() => {
    anim.destroy();
  }, 4000);
}

/* =========================
   LETTER LOGIC
========================= */
const letterText = `
Happy Birthday Betaa,
Punha ekda wish you a very happy birthday bayko. Ts birthday party kdhi deshil. 20 varsha chi zali na aata tu tr as nko smjhjo ki khubch mothi zali mhnun tula aata bi mazch aaykaych aahe. Manl ki tuz tond bnd nahi raht mhnun pn mi bi lucky aaho. Tuz tond ks band kraych brobr mahiti ahe mla. Tri pn thod kam jhgdt ja. Mhnje javd rahun jevd prem krte n tu tevdach dur rahun ghussa krte. As nh zalya pahije na. Prem bii krt ja kdhi. Te mhntat na“its not you verses me,its you and me verses the problem” tsch kahi. Ha letter mi aata 28th la likh aaho mahiti nh tuzya birthday prynt thik chalel ya ajun bichat jhgda houn jail. Tri pn ha note tuzya prynt pohochun jail. Te gosht alag aahe ki jevda aapn jhgdto tevda ajun close yeto mhnun. Mi promise krto ki tuzi har gosht manil, aapn jevd bii jhgdu tri boln band nahi hoil, kadhi aaplya bolnyacha bichat ego ni attitude nahi aanil,etc. Pan aata tula bii he promise kraycha aahe ki kadhi mi konsya goshti sathi nh mhtlo tr tu mazi condition smjhun gheshil ni manmani nahi krshil konsya bii goshti sathi aani agr mi konsi gosht nahi smjhlo tr ghussa nahi krshil ni mla changlyani samjhvshil. Tu bii ek insan aahe ni mii pn. Glti doghan sobt pn hou shkte. Mazya sobt kahi glti hoil tr mla sangshil tr mi te sudharil and same as for you. Aani konsi bii gosht mnat nko thevt jashil. Je bii asel te tevhach clear krt ja. Jast emotional nako hot jau tu, stong bn mentally ni physically bii. Khat ja thods ni healthy bn. Tula mahit aahe healthy ksha sathi mhnt aaho mi. Mazya oremachi nishani nahi thevshil kay tu mg. Mla mahit aahe tu kiti stong aahe tr. Aata prynt kiti sari problems tu ektich solve keli aahe ni kahi aapn dogh midun. Ni ajun bii khub mothi life baki aahe. Je bii samor problems yeil te aapn dogh midun solve karun. Mi kadhi kadhi bhtkun jato tr ummed krto ki tu mla sahi disha vr aanshil. Kdhi kdhi overthinking krto tr sambhadun gheshil. Mi mentally, emotionally aani physically tula khub prem krto. Kdhi as nko sochjo ki yacha dimakat bs physical honyachch chalu rahte mhnun. Te kdhi kdhi lust havi houn jate dimakavr pn mi aata control karil ni aaplya future kde laksh deil. Aani tula pn asch kraych aahe. Future kde laksh de, abhyas kr, successful bn ni mg lagn kr mazya sobt. Bs aata chart vr yeun bol chup chap. Byy.
I love you so much
Tuza lucky
`;

function showLetter() {
  birthdaySection.style.display = 'none';

  song02.pause();
  song02.currentTime = 0;

  song03.currentTime = 122;
  song03.play().catch(() => {});

  document.body.classList.add('dimmed');
  letterSection.classList.remove('hidden');

  const lines = letterText.split('\n').filter(l => l.trim() !== '');

  let index = 0;
  const interval = setInterval(() => {
    if (index >= lines.length) {
      clearInterval(interval);
      return;
    }
    const p = document.createElement('p');
    p.textContent = lines[index];
    p.style.opacity = '0';
    p.style.transition = 'opacity 0.8s ease';
    letterTextContainer.appendChild(p);
    requestAnimationFrame(() => p.style.opacity = '1');
    index++;
  }, 450);
}

/* =========================
   NAVIGATION
========================= */
tapForward.addEventListener('click', () => {
  letterSection.classList.add('hidden');
  song03.pause();
  questionSection.classList.remove('hidden');
});

answerBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('answer-buttons').style.display = 'none';
    answerResult.classList.remove('hidden');

    setTimeout(() => {
      questionSection.classList.add('hidden');
      voiceSection.classList.remove('hidden');
    }, 4000);
  });
});

voiceTrigger.addEventListener('click', () => {
  voiceSection.classList.add('hidden');
  document.body.classList.remove('dimmed');

  song01.pause();
  song02.pause();
  song03.pause();

  voiceNote.play().catch(() => {});
});

/* =========================
   INIT
========================= */
startBackgroundLoop();
startCountdown();