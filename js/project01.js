// Elements
const clockElement = document.getElementById("digitalClock");
const formatToggle = document.getElementById("formatToggle");
const fontSizeSlider = document.getElementById("fontSizeSlider");
const fontSizeValue = document.getElementById("fontSizeValue");
const colorPicker = document.getElementById("colorPicker");
const alarmInput = document.getElementById("alarmInput");
const setAlarmBtn = document.getElementById("setAlarmBtn");
const savePreferencesBtn = document.getElementById("savePreferencesBtn");
const retrievePreferencesBtn = document.getElementById("retrievePreferencesBtn");

let is24HourFormat = false;
let alarmTime = null;

// Update the clock every second
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  if (!is24HourFormat) {
    hours = hours % 12 || 12;
  }

  const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  clockElement.textContent = formattedTime;

  // Check for alarm
  const currentTime = `${padZero(now.getHours())}:${padZero(now.getMinutes())}`;
  if (alarmTime === currentTime) {
    alert("Alarm! Time to wake up!");
    alarmTime = null; // Reset alarm
  }
}

// Pad single-digit numbers with a leading zero
function padZero(num) {
  return num < 10 ? `0${num}` : num;
}

// Save preferences to localStorage
function savePreferences() {
  const preferences = {
    fontSize: fontSizeSlider.value,
    color: colorPicker.value,
    is24HourFormat: formatToggle.checked,
    alarmTime: alarmTime,
  };
  localStorage.setItem("clockPreferences", JSON.stringify(preferences));
  alert("Preferences saved!");
}

// Retrieve preferences from localStorage
function retrievePreferences() {
  const preferences = JSON.parse(localStorage.getItem("clockPreferences"));
  if (preferences) {
    fontSizeSlider.value = preferences.fontSize;
    fontSizeValue.textContent = preferences.fontSize;
    colorPicker.value = preferences.color;
    formatToggle.checked = preferences.is24HourFormat;
    alarmTime = preferences.alarmTime;

    // Update the alarm input field
    alarmInput.value = alarmTime || "";

    applyPreferences();
  } else {
    alert("No preferences saved!");
  }
}

// Apply preferences to the clock
function applyPreferences() {
  clockElement.style.fontSize = `${fontSizeSlider.value}px`;
  clockElement.style.color = colorPicker.value;
  is24HourFormat = formatToggle.checked;
}

// Event Listeners
fontSizeSlider.addEventListener("input", () => {
  clockElement.style.fontSize = `${fontSizeSlider.value}px`;
  fontSizeValue.textContent = fontSizeSlider.value;
});
colorPicker.addEventListener("input", () => {
  clockElement.style.color = colorPicker.value;
});
formatToggle.addEventListener("change", () => {
  is24HourFormat = formatToggle.checked;
});
setAlarmBtn.addEventListener("click", () => {
  alarmTime = alarmInput.value;
  if (alarmTime) {
    alert(`Alarm set for ${alarmTime}`);
  } else {
    alert("Please select a valid time for the alarm.");
  }
});
savePreferencesBtn.addEventListener("click", savePreferences);
retrievePreferencesBtn.addEventListener("click", retrievePreferences);

// Start the clock
setInterval(updateClock, 1000);
updateClock();
