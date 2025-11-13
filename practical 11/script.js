import { formatTime, parseTimeInput, logEvent } from "./helper.js";

const container = document.getElementById("session-container");
const addBtn = document.getElementById("add-session");

const nameInput = document.getElementById("session-name");
const timeInput = document.getElementById("session-start");
const durationInput = document.getElementById("session-duration");

let scheduledSessions = [];

function addSession() {
  const name = nameInput.value.trim() || "Unnamed Class";
  const startTime = timeInput.value;
  const duration = parseTimeInput(durationInput.value);

  if (!startTime || duration === null) {
    alert("Please enter a valid start time and duration.");
    return;
  }

  const sessionDiv = document.createElement("div");
  sessionDiv.className = "session";
  sessionDiv.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Start:</strong> ${startTime}</p>
    <p class="countdown">Scheduled...</p>
  `;
  container.appendChild(sessionDiv);

  const [hours, minutes] = startTime.split(":").map(Number);
  const now = new Date();
  const sessionStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0);
  const sessionEnd = new Date(sessionStart.getTime() + duration * 1000);

  scheduledSessions.push({
    name,
    sessionStart,
    sessionEnd,
    duration,
    div: sessionDiv,
    started: false,
    ended: false,
  });

  logEvent(`${name} scheduled for ${startTime}.`);

  nameInput.value = "";
  timeInput.value = "";
  durationInput.value = "";
}

setInterval(() => {
  const now = new Date();

  scheduledSessions.forEach((session) => {
    const { name, sessionStart, sessionEnd, div } = session;
    const countdownEl = div.querySelector(".countdown");

    if (!session.started && now >= sessionStart && now < sessionEnd) {
      session.started = true;
      div.classList.add("active");
      logEvent(`${name} started.`);
    }

    if (session.started && !session.ended) {
      const remaining = Math.floor((sessionEnd - now) / 1000);
      if (remaining > 0) {
        countdownEl.textContent = formatTime(remaining);
        if (remaining < 60) countdownEl.classList.add("warning");
      } else {
        countdownEl.textContent = "Class Over ✅";
        session.ended = true;
        div.classList.remove("active");
        div.style.background = "rgba(0, 255, 150, 0.2)";
        logEvent(`${name} ended.`);
      }
    }
  });
}, 1000);

addBtn.addEventListener("click", addSession);
