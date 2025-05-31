const allSounds = [
    { name: "Wilhelm Scream", url: "https://www.myinstants.com/instant/wilhelm-scream/embed/" },
    { name: "Awkward Cricket", url: "https://www.myinstants.com/instant/awkward-cricket-74642/embed/" },
    { name: "Bruh", url: "https://www.myinstants.com/instant/bruh/embed/" },
    { name: "Dun Dun Dunnnnn", url: "https://www.myinstants.com/instant/dun-dun-dunnnnnnnn-68584/embed/" },
    { name: "Crab Rave", url: "https://www.myinstants.com/instant/crab-rave-34272/embed/" },
    { name: "Discord Join", url: "https://www.myinstants.com/instant/discord-join-call-94215/embed/" },
    { name: "Discord Leave", url: "https://www.myinstants.com/instant/discord-leave-noise-46083/embed/" },
    { name: "Error Sound", url: "https://www.myinstants.com/instant/error-soundss-25534/embed/" },
    { name: "FBI Open Up", url: "https://www.myinstants.com/instant/fbi-open-up-3322/embed/" },
    { name: "Goofy Ahh", url: "https://www.myinstants.com/instant/goofy-ahh-sounds-96639/embed/" },
    { name: "God Damn It Barb", url: "https://www.myinstants.com/instant/god-damn-it-barb/embed/" },
    { name: "Heavenly Music", url: "https://www.myinstants.com/instant/heavenly-musiic-80491/embed/" },
    { name: "Keyboard Typing", url: "https://www.myinstants.com/instant/keyboard-typing-sound-16012/embed/" },
    { name: "Mouse Click", url: "https://www.myinstants.com/instant/mouse-click-sound-63406/embed/" },
    { name: "Spongebob - Few Moments Later", url: "https://www.myinstants.com/instant/spongebob-a-few-moments-later-39115/embed/" },
    { name: "Law & Order", url: "https://www.myinstants.com/instant/law-and-order-dun-dun/embed/" },
    { name: "Outro Song", url: "https://www.myinstants.com/instant/outro-song-77850/embed/" },
    { name: "Quack", url: "https://www.myinstants.com/instant/quackmp3/embed/" },
    { name: "Rehehehe", url: "https://www.myinstants.com/instant/rehehehe-76246/embed/" },
    { name: "Shut Up", url: "https://www.myinstants.com/instant/shut-up/embed/" },
    { name: "Slap Oh", url: "https://www.myinstants.com/instant/slap-oh-10761/embed/" },
    { name: "Trump Stop It", url: "https://www.myinstants.com/instant/trump-stop-it-29017/embed/" },
    { name: "Vine Boom", url: "https://www.myinstants.com/instant/vine-boom-sound-70972/embed/" },
    { name: "Windows 10 Error", url: "https://www.myinstants.com/instant/windows-10-error-sound-69419/embed/" },
    { name: "Windows XP Error", url: "https://www.myinstants.com/instant/windows-xp-error/embed/" },
    { name: "Windows XP Shutdown", url: "https://www.myinstants.com/instant/windows-xp-shutdown/embed/" },
    { name: "Wut", url: "https://www.myinstants.com/instant/wut/embed/" },
    { name: "You Are an Idiot", url: "https://www.myinstants.com/instant/you-are-an-idiot-42738/embed/" },
    { name: "Discord Notification", url: "https://www.myinstants.com/instant/discord-notification-38119/embed/" },
    { name: "Sad Trombone Fail Horn", url: "https://www.myinstants.com/instant/sad-trombone-fail-horn-16152/embed/" },
    { name: "Stop it Get Some Help", url: "https://www.myinstants.com/instant/stop-it-get-some-help/embed/" },
    { name: "Bone Crack", url: "https://www.myinstants.com/instant/bone-crack-23901/embed/" },
    { name: "Buzzer", url: "https://www.myinstants.com/instant/buzzer-89244/embed/" },
    { name: "Lack of a Father Figure", url: "https://www.myinstants.com/instant/lack-of-a-father-figure-49559/embed/" },
    { name: "Smoke Detector Beep", url: "https://www.myinstants.com/instant/smoke-detector-beep-97430/embed/" },
    { name: "Oh No No No Laugh", url: "https://www.myinstants.com/instant/oh-no-no-no-laugh-56694/embed/" },
    { name: "Michael Jackson Hee Hee", url: "https://www.myinstants.com/instant/michael-jackson-hee-hee-40277/embed/" },
    { name: "Hello There Obi-Wan", url: "https://www.myinstants.com/instant/hello-there-obi-wan-93047/embed/" },
    { name: "Discord Troll", url: "https://www.myinstants.com/instant/discord-troll-10056/embed/" },
    { name: "Shocked Sound", url: "https://www.myinstants.com/instant/shocked-sound-37548/embed/" },
    { name: "Mentality", url: "https://www.myinstants.com/instant/mentality-65966/embed/" },
    { name: "Tu Tu Tu Du Max Verstappen", url: "https://www.myinstants.com/instant/tu-tu-tu-du-max-verstappen-18834/embed/" },
    { name: "Formula 1 Radio Notification", url: "https://www.myinstants.com/instant/formula-1-radio-notification-89793/embed/" },
    { name: "Oh Brother This Guy Stinks", url: "https://www.myinstants.com/instant/oh-brother-this-guy-stinks/embed/" },
    { name: "Pistol Shot", url: "https://www.myinstants.com/instant/pistol-shot-83692/embed/" },
    { name: "Correct Ding", url: "https://www.myinstants.com/instant/correct-ding/embed/" },
    { name: "No No Wait Wait", url: "https://www.myinstants.com/instant/no-no-wait-wait-15822/embed/" },
    { name: "Dun Dun Duuun", url: "https://www.myinstants.com/instant/dun-dun-duuun/embed/" },
    { name: "Elevator Music Background", url: "https://www.myinstants.com/instant/elevator-music-background-5865/embed/" },
    { name: "Lego Breaking", url: "https://www.myinstants.com/instant/lego-breaking-57805/embed/" },
    { name: "Bluetooth Device is Ready to Pair", url: "https://www.myinstants.com/instant/the-bluetooth-device-is-ready-to-pair-86672/embed/" },
    { name: "You Need to Leave", url: "https://www.myinstants.com/instant/you-need-to-leave-16166/embed/" },
    { name: "Pop SFX", url: "https://www.myinstants.com/instant/pop-sfx-75405/embed/" },
    { name: "Aw Shit Here We Go Again", url: "https://www.myinstants.com/instant/aw-shit-here-go-again-cj-from-gta-sa-97151/embed/" },
    { name: "Check Mark", url: "https://www.myinstants.com/instant/check-mark-51857/embed/" },
    { name: "Metal Gear Alert Sound Effect", url: "https://www.myinstants.com/instant/metal-gear-alert-sound-effect-82026/embed/" },
    { name: "Dalek Exterminate", url: "https://www.myinstants.com/instant/dalek-exterminate/embed/" },
    { name: "Cartoon Chase", url: "https://www.myinstants.com/instant/cartoon-chase-52579/embed/" },
    { name: "DJ Rewind", url: "https://www.myinstants.com/instant/dj-rewind-50550/embed/" },
    { name: "Ack", url: "https://www.myinstants.com/instant/ack-87763/embed/" },
    { name: "Lagging Loading", url: "https://www.myinstants.com/instant/lagging-loading-11339/embed/" },
    { name: "iPhone Notification", url: "https://www.myinstants.com/instant/iphone-notification-71441/embed/" },
    { name: "Western", url: "https://www.myinstants.com/instant/western/embed/" },
    { name: "News Intro / Breaking News", url: "https://www.myinstants.com/instant/news-intro-breaking-news/embed/" },
    { name: "2 Hours Later", url: "https://www.myinstants.com/instant/2-hours-later-spongebob-28743/embed/" },
    { name: "Finish Him", url: "https://www.myinstants.com/instant/finish-him/embed/" },
    { name: "We Do Not Care", url: "https://www.myinstants.com/instant/we-do-not-care-34747/embed/" },
    { name: "Censor Beep", url: "https://www.myinstants.com/instant/censor-beep-3/embed/" },
    { name: "Cartoon Run Take Off", url: "https://www.myinstants.com/instant/cartoon-run-take-off-4751/embed/" },
    { name: "Caught a Pokemon", url: "https://www.myinstants.com/instant/caught-a-pokemon/embed/" },
    { name: "Clown Circus Music", url: "https://www.myinstants.com/instant/clown-circus-music-65961/embed/" },
    { name: "Deja Vu Fade", url: "https://www.myinstants.com/instant/deja-vu-fade-14940/embed/" },
    { name: "Illuminati Confirmed", url: "https://www.myinstants.com/instant/illuminati-confirmed/embed/" },
    { name: "Price is Right Losing Horn", url: "https://www.myinstants.com/instant/the-price-is-right-losing-horn/embed/" },
    { name: "Sitcom Ooooh", url: "https://www.myinstants.com/instant/sitcom-oooooh-34317/embed/" },
    { name: "Sitcom Laugh", url: "https://www.myinstants.com/instant/sitcom-laugh/embed/" },
    { name: "Bonk Doge", url: "https://www.myinstants.com/instant/bonk-doge-81934/embed/" }
];


function loadSounds(onlyFavorites = false) {
    const board = document.getElementById('soundboard');
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    board.innerHTML = "";

    const soundsToLoad = onlyFavorites
        ? allSounds.filter(s => favorites.includes(s.url))
        : allSounds;

    soundsToLoad.forEach(sound => {
        const div = document.createElement("div");
        div.className = "sound";
        div.innerHTML = `
<iframe src="${sound.url}" loading="lazy" frameborder="0" scrolling="no"></iframe>
  <button class="favorite-btn" title="Favorite" onclick="toggleFavorite('${sound.url}')">
    ${favorites.includes(sound.url) ? "★" : "☆"}
  </button>
`;



        board.appendChild(div);
    });

    const input = document.getElementById("searchInput");
    if (input) {
        input.addEventListener("input", () => {
            const search = input.value.toLowerCase();
            Array.from(board.children).forEach((div, i) => {
                const sound = onlyFavorites
                    ? allSounds.filter(s => favorites.includes(s.url))[i]
                    : allSounds[i];
                div.style.display = sound.name.toLowerCase().includes(search)
                    ? "block"
                    : "none";
            });
        });
    }
}
function handleOverlayClick(overlayDiv) {
    setLastPlayed(overlayDiv.previousElementSibling); // the iframe

    // Disable pointer events on the overlay so clicks go through to iframe now
    overlayDiv.style.pointerEvents = 'none';

    // Optional: re-enable pointer events after a short delay (if needed)
    setTimeout(() => {
        overlayDiv.style.pointerEvents = 'auto';
    }, 100);
}

function toggleFavorite(url) {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const index = favorites.indexOf(url);
    if (index === -1) {
        favorites.push(url);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    location.reload();
}

function loadFavorites() {
    loadSounds(true);
}
let lastPlayedIframe = null;

function setLastPlayed(iframe) {
    lastPlayedIframe = iframe;
}

document.getElementById("stop-sound-btn")?.addEventListener("click", () => {
    const iframes = document.querySelectorAll('#soundboard iframe');
    iframes.forEach(iframe => {
        const src = iframe.src;
        iframe.src = '';
        iframe.src = src;
    });
});


const clearBtn = document.getElementById("clearSearch");
const input = document.getElementById("searchInput");

input.oninput = () => {
    const search = input.value.toLowerCase();
    Array.from(board.children).forEach((div, i) => {
        const sound = onlyFavorites
            ? allSounds.filter(s => favorites.includes(s.url))[i]
            : allSounds[i];
        if (!sound) return;
        div.style.display = sound.name.toLowerCase().includes(search) ? "block" : "none";
    });
    // Show clear button only if input has text
    clearBtn.style.display = input.value ? "inline" : "none";
};

clearBtn.onclick = () => {
    input.value = "";
    clearBtn.style.display = "none";
    // Trigger input event to reset filter
    input.dispatchEvent(new Event("input"));
};




