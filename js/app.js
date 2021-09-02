let fillbar = document.querySelector(".fill");
let bob = document.querySelector(".bob");
let img = document.querySelector(".img img");
let volumeUp = document.querySelector(".volume-up i");
// let audios = ["Audio_One.mp3", "Audio_Two.mp3", "Audio_Three.mp3"];

// Locally Hosted Files
// let audios = [
//   {
//     name: "Hillsong-UNITED-Oceans",
//     music: "file:///C:/Users/HP/Downloads/Hillsong-UNITED-Oceans.mp3",
//     cover: "cover3.jpg",
//   },
//   {
//     name: "Dunsin_Oyekan_-_I_Will_Follow",
//     music: "file:///C:/Users/HP/Downloads/Dunsin_Oyekan_-_I_Will_Follow.mp3",
//     cover: "cover2.jpg",
//   },
//   {
//     name: "Dunsin Oyekan_Open Up",
//     music: "file:///C:/Users/HP/Downloads/Dunsin Oyekan_Open Up.mp3",
//     cover: "cover1.jpg",
//   },
//   {
//     name: "Diamond_Jimma_-_Aje_ft_Otega-tooXclusive",
//     music:
//       "file:///C:/Users/HP/Downloads/Diamond_Jimma_-_Aje_ft_Otega-tooXclusive_.mp3",
//     cover: "cover2.jpg",
//   },
//   {
//     name: "Avicii - The Nights",
//     music: "file:///C:/Users/HP/Downloads/Avicii - The Nights-1.mp3",
//     cover: "cover3.jpg",
//   },
//   {
//     name: "Reckless-Love",
//     music: "file:///C:/Users/HP/Downloads/01-Reckless-Love.mp3",
//     cover: "cover2.jpg",
//   },
//   {
//     name: "You re Beautiful - James Blunt",
//     music:
//       "file:///C:/Users/HP/Downloads/You re Beautiful - James Blunt 🎵.mp3",
//     cover: "cover2.jpg",
//   },
//   {
//     name: "Audio_One",
//     music: "Audio_One.mp3",
//     cover: "cover1.jpg",
//   },
//   {
//     name: "Audio_Two",
//     music: "Audio_Two.mp3",
//     cover: "cover2.jpg",
//   },
//   {
//     name: "Audio_Three",
//     music: "Audio_Three.mp3",
//     cover: "cover3.jpg",
//   },
// ];
let audios = [
  {
    name: "Ada Only You Jesus",
    music:
      "https://praisezion.com/wp-content/uploads/2018/12/Ada-Only-You-Jesus.mp3",
  },
  {
    name: "Eben Favour",
    music: "https://praisezion.com/wp-content/uploads/2018/12/Eben-Favour.mp3",
  },
  {
    name: "Eben Holy Ginger",
    music:
      "https://praisezion.com/wp-content/uploads/2018/12/Eben-Holy-Ginger.mp3",
  },
  {
    name: "Frank Edwards Ayaya",
    music:
      "https://praisezion.com/wp-content/uploads/2018/12/Frank-Edwards-Ayaya.mp3",
  },
  {
    name: "Frank Edwards Onye",
    music:
      "https://praisezion.com/wp-content/uploads/2018/12/Frank-Edwards-Onye.mp3",
  },
  {
    name: "Frank Edwards Oyege",
    music:
      "https://praisezion.com/wp-content/uploads/2018/12/Frank-Edwards-Oyege.mp3",
  },
  {
    name: "Frank Edwards Oyoyo",
    music:
      "https://praisezion.com/wp-content/uploads/2018/12/Frank-Edwards-Oyoyo.mp3",
  },
  {
    name: "Free Beat",
    music: "https://praisezion.com/wp-content/uploads/2018/12/Free-Beat.mp3",
  },
  {
    name: "Lord Prepare Me",
    music:
      "https://praisezion.com/wp-content/uploads/2018/12/Lord-Prepare-Me.mp3",
  },
  {
    name: "Sweetleke Surrender",
    music:
      "https://praisezion.com/wp-content/uploads/2018/12/Sweetleke-Surrender.mp3",
  },
  {
    name: "Tim Godfrey Ahaa",
    music:
      "https://praisezion.com/wp-content/uploads/2018/12/Tim-Godfrey-Ahaa.mp3",
  },
  {
    name: "Tim Godfrey Amen",
    music:
      "https://praisezion.com/wp-content/uploads/2018/12/Tim-Godfrey-Amen.mp3",
  },
  {
    name: "Tim Godfrey Holy",
    music:
      "https://praisezion.com/wp-content/uploads/2018/12/Tim-Godfrey-Holy.mp3",
  },
  {
    name: "Tim Godfrey Kosi",
    music:
      "https://praisezion.com/wp-content/uploads/2018/12/Tim-Godfrey-Kosi.mp3",
  },
  {
    name: "You Are Glorious",
    music:
      "https://praisezion.com/wp-content/uploads/2018/12/You-Are-Glorious.mp3",
  },
];

let covers = ["cover1.jpg", "cover2.jpg", "cover3.jpg"];
let currentTime = document.querySelector(".time");
let progressContainer = document.querySelector(".seek");
let pos = document.querySelector(".pos");
let musicName = document.querySelector(".name");

// Create An Object Of Audio

let audio = new Audio();
let currentSong = 0;
let repeat = false;
let random = false;
// whenever the window load, song should play automatically

console.log(audios.length);

window.onload = playSong;

// let's play the song by this function whenever window load

function playSong() {
  audio.src = audios[currentSong].music;
  // audio.src =
  //   "https://praisezion.com/wp-content/uploads/2018/11/Oceans-Where-My-Feet-May-Fail.mp3";
}

console.log(img);

musicName.textContent = `${audios[currentSong].name}`;

function PlaySong() {
  audio.play();
  img.classList.add("rotate");
  let playBtn = document.querySelector(".play-pause");
  playBtn.innerHTML = '<i class="fa fa-pause"></i>';
  playBtn.style.paddingLeft = "30px";
  pos.textContent = `${currentSong + 1}/ ${audios.length}`;
}
function pauseSong() {
  audio.pause();
  img.classList.remove("rotate");
  playBtn = document.querySelector(".play-pause");
  playBtn.innerHTML = '<i class="fa fa-play"></i>';
  playBtn.style.paddingLeft = "33px";
}

function togglePlayPause() {
  if (audio.paused) {
    PlaySong();
    // audio.play();
    // let playBtn = document.querySelector(".play-pause");
    // playBtn.innerHTML = '<i class="fa fa-pause"></i>';
    // playBtn.style.paddingLeft = "30px";
  } else {
    pauseSong();
    // playBtn = document.querySelector(".play-pause");
    // playBtn.innerHTML = '<i class="fa fa-play"></i>';
    // playBtn.style.paddingLeft = "33px";
  }
}

// Now let's make dynamic the fillbar

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  let duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;

  console.log(clickX, width);
}

bob.onmousedown = function () {
  const width = progressContainer.clientWidth;
  progressContainer.onmousemove = (e) => {
    const clickX = e.offsetX;
    let duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
    // console.log(width, clickX);
  };
};

bob.onmouseup = () => {
  progressContainer.onmousemove = () => null;
};

audio.addEventListener("timeupdate", function () {
  let position = audio.currentTime / audio.duration;
  fillbar.style.width = position * 100 + "%";
  bob.style.left = position * 100 - 1.5 + "%";
  convertTime(Math.round(audio.currentTime));

  if (audio.ended) {
    nextAudio(repeat);
  }

  // Audio speaker control

  if (audio.volume > 0.1 && audio.volume < 0.6) {
    volumeUp.className = "fa fa-volume-down";
  } else if (audio.volume === 0 || audio.muted) {
    volumeUp.className = "fa fa-volume-off";
  } else if (audio.volume > 0.6) {
    volumeUp.className = "fa fa-volume-up";
  }
});

function convertTime(seconds) {
  let min = Math.round(seconds / 60);
  let sec = seconds % 60;

  format = (num) => (num < 10 ? "0" + num : num);

  currentTime.textContent = format(min) + ":" + format(sec);

  // Total Time
  totalTime(Math.round(audio.duration));
}

function totalTime(seconds) {
  let min = Math.round(seconds / 60);
  let sec = seconds % 60;

  format = (num) => (num < 10 ? "0" + num : num);

  currentTime.textContent += " : " + format(min) + ":" + format(sec);
}

function nextAudio() {
  let randomNum = Math.floor(Math.random() * audios.length);
  if (random) {
    currentSong = randomNum;
  }

  currentSong = repeat
    ? currentSong
    : currentSong < audios.length - 1
    ? currentSong + 1
    : 0;
  audio.src = audios[currentSong].music;
  musicName.textContent = `${audios[currentSong].name}`;
  PlaySong();
  // img.src = audios[currentSong].cover;
  img.src = covers[2];
  console.log(audios);
}
function prevAudio() {
  let randomNum = Math.floor(Math.random() * audios.length);
  if (random) {
    currentSong = randomNum;
  }
  currentSong = repeat
    ? currentSong
    : currentSong > 0
    ? currentSong - 1
    : audios.length - 1;
  console.log(currentSong);
  audio.src = audios[currentSong].music;
  musicName.textContent = `${audios[currentSong].name}`;
  PlaySong();
  // img.src = audios[currentSong].cover;
  img.src = covers[2];
}

function decreaseVolume() {
  audio.volume -= audio.volume > 0 ? 0.25 : 0;
  console.log(audio.volume);
}
function increaseVolume() {
  audio.volume += audio.volume < 1 ? 0.25 : 0;
  console.log(audio.volume);
}

let muted = true;
volumeUp.addEventListener("click", () => {
  audio.muted = muted;
  muted = !muted;
  // volumeUp.className = !muted ? "fa fa-volume-off" : "fa fa-volume-up";
  console.log(muted);
});

let repeatBtn = document.querySelector(".repeat-btns .fa-retweet");

repeatBtn.addEventListener("click", () => {
  repeat = !repeat;
  repeat
    ? repeatBtn.classList.add("repeat")
    : repeatBtn.classList.remove("repeat");
  console.log("repeat", repeat);
});

let randomBtn = document.querySelector(".repeat-btns .fa-random");

randomBtn.addEventListener("click", () => {
  random = !random;
  random
    ? randomBtn.classList.add("repeat")
    : randomBtn.classList.remove("repeat");
  console.log("repeat = ", repeat, "random = ", random);
});

console.log(randomBtn);

progressContainer.addEventListener("click", setProgress);
