const teacherProfileModal = document.getElementById("teacherProfileModal");

teacherProfileModal.addEventListener("show.bs.modal", function (event) {

  const button = event.relatedTarget;
  const name = button.getAttribute("data-name");
  const quote = button.getAttribute("data-quote");
  const subject = button.getAttribute("data-subject");
  const experience = button.getAttribute("data-experience");
  const contact = button.getAttribute("data-contact");
  const imgUrl = button.getAttribute("data-img-url");

  // Update konten Modal berdasarkan data yg diambil
  document.getElementById("modalName").textContent = name;
  document.getElementById("modalQuote").textContent = quote;
  document.getElementById("modalSubject").textContent = subject;
  document.getElementById("modalExperience").textContent = experience;
  document.getElementById("modalContact").textContent = contact;
  document.getElementById("modalProfileImg").src = imgUrl;
});

function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.add("d-none");
  });
  const target = document.getElementById(sectionId);
  if (target) target.classList.remove("d-none");
  window.scrollTo(0, 0); // Scroll ke atas saat pindah section
}

function showContent(id) {
  // Sembunyikan semua section
  document.querySelectorAll(".content-section").forEach((section) => {
    section.classList.add("d-none");
  });

  // Tampilkan section yang dipilih
  document.getElementById(id).classList.remove("d-none");
  document.querySelectorAll("#album .btn").forEach((btn) => {
    btn.classList.remove("btn-purp");
    btn.classList.add("btn-outline-purp");
  });
  const activeBtn = document.querySelector(`[onclick="showContent('${id}')"]`);
  if (activeBtn) {
    activeBtn.classList.remove("btn-outline-purp");
    activeBtn.classList.add("btn-purp");
  }
}

const navLinks = document.querySelectorAll('.navbr');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Mencegah navigasi ke halaman lain (hanya untuk contoh ini)
        event.preventDefault();

        // 1. Hapus kelas 'active' dari SEMUA tautan yang saat ini memilikinya
        navLinks.forEach(item => {
            item.classList.remove('fw-bold');
        });
        this.classList.add('fw-bold');
    });
});

// === DATA JADWAL HARIAN & MINGGUAN (TETAP) ===
const scheduleData = {
  monday: [
    {
      time: "11:30-12:45",
      subject: "Sholat Dzuhur",
      teacher: "Seluruh Siswa/i",
      type: "subject",
    },
    {
      time: "12:45-13:10",
      subject: "DPK",
      teacher: "Bu Senja",
      type: "subject",
    },
    {
      time: "13:10-13:40",
      subject: "DPK",
      teacher: "Bu Senja",
      type: "subject",
    },
    {
      time: "13:40-14:05",
      subject: "DPK",
      teacher: "Bu Senja",
      type: "subject",
    },
    {
      time: "14:05-14:30",
      subject: "DPK",
      teacher: "Bu Senja",
      type: "subject",
    },
    {
      time: "14:30-14:55",
      subject: "DPK",
      teacher: "Bu Senja",
      type: "subject",
    },
    {
      time: "14:55-15:15",
      subject: "DPK",
      teacher: "Bu Senja",
      type: "subject",
    },
    {
      time: "15:15-15:45",
      subject: "ISTIRAHAT",
      teacher: "",
      type: "break",
    },
    {
      time: "15:45-16:05",
      subject: "DPK",
      teacher: "Pak Maulana",
      type: "subject",
    },
    {
      time: "16:05-16:25",
      subject: "DPK",
      teacher: "Pak Maulana",
      type: "subject",
    },
    {
      time: "16:25-16:45",
      subject: "DPK",
      teacher: "Pak Maulana",
      type: "subject",
    },
    {
      time: "16:45-17:05",
      subject: "DPK",
      teacher: "Pak Maulana",
      type: "subject",
    },
  ],
  tuesday: [
    {
      time: "11:30-12:45",
      subject: "Sholat Dzuhur",
      teacher: "Seluruh Siswa/i",
      type: "subject",
    },
    {
      time: "12:45-13:10",
      subject: "SB",
      teacher: "Pak Sajali",
      type: "subject",
    },
    {
      time: "13:10-13:40",
      subject: "SB",
      teacher: "Pak Sajali",
      type: "subject",
    },
    {
      time: "13:40-14:05",
      subject: "Matematika",
      teacher: "Bu Rina",
      type: "subject",
    },
    {
      time: "14:05-14:30",
      subject: "Matematika",
      teacher: "Bu Rina",
      type: "subject",
    },
    {
      time: "14:30-14:55",
      subject: "IPAS",
      teacher: "Bu Muthia",
      type: "subject",
    },
    {
      time: "14:55-15:15",
      subject: "IPAS",
      teacher: "Bu Muthia",
      type: "subject",
    },
    {
      time: "15:15-15:45",
      subject: "ISTIRAHAT",
      teacher: "",
      type: "break",
    },
    {
      time: "15:45-16:05",
      subject: "MPP",
      teacher: "Pak Habib",
      type: "subject",
    },
    {
      time: "16:05-16:25",
      subject: "MPP",
      teacher: "Pak Habib",
      type: "subject",
    },
    {
      time: "16:25-16:45",
      subject: "Bahasa Indonesia",
      teacher: "Pak Panjalu",
      type: "subject",
    },
    {
      time: "16:45-17:05",
      subject: "Bahasa Indonesia",
      teacher: "Pak Panjalu",
      type: "subject",
    },
  ],
  wednesday: [
    {
      time: "11:30-12:45",
      subject: "Sholat Dzuhur",
      teacher: "Seluruh Siswa/i",
      type: "subject",
    },
    {
      time: "12:45-13:10",
      subject: "PPKn",
      teacher: "Pa Ucu",
      type: "subject",
    },
    {
      time: "13:10-13:40",
      subject: "PPKn",
      teacher: "Pak Ucu",
      type: "subject",
    },
    {
      time: "13:40-14:05",
      subject: "Bahasa Inggris",
      teacher: "Mrs. Kartika",
      type: "subject",
    },
    {
      time: "14:05-14:30",
      subject: "Bahasa Inggris",
      teacher: "Mrs. Kartika",
      type: "subject",
    },
    {
      time: "14:30-14:55",
      subject: "DPK",
      teacher: "Bu Senja",
      type: "subject",
    },
    {
      time: "14:55-15:15",
      subject: "DPK",
      teacher: "Bu Senja",
      type: "subject",
    },
    {
      time: "15:15-15:45",
      subject: "ISTIRAHAT",
      teacher: "",
      type: "break",
    },
    {
      time: "15:45-16:05",
      subject: "Informatika",
      teacher: "Pak Hari",
      type: "subject",
    },
    {
      time: "16:05-16:25",
      subject: "Informatika",
      teacher: "Pak Hari",
      type: "subject",
    },
    {
      time: "16:25-16:45",
      subject: "Informatika",
      teacher: "Pak Hari",
      type: "subject",
    },
    {
      time: "16:45-17:05",
      subject: "Informatika",
      teacher: "Pak Hari",
      type: "subject",
    },
  ],
  thursday: [
    {
      time: "11:30-12:45",
      subject: "Sholat Dzuhur",
      teacher: "Seluruh Siswa/i",
      type: "subject",
    },
    {
      time: "12:45-13:10",
      subject: "PJOK",
      teacher: "Pak Mustopa",
      type: "subject",
    },
    {
      time: "13:10-13:40",
      subject: "PJOK",
      teacher: "Pak Mustopa",
      type: "subject",
    },
    {
      time: "13:40-14:05",
      subject: "PJOK",
      teacher: "Pak Mustopa",
      type: "subject",
    },
    {
      time: "14:05-14:30",
      subject: "PABP",
      teacher: "Pak Padli",
      type: "subject",
    },
    {
      time: "14:30-14:55",
      subject: "PABP",
      teacher: "Pak Padli",
      type: "subject",
    },
    {
      time: "14:55-15:15",
      subject: "PABP",
      teacher: "Pak Padli",
      type: "subject",
    },
    {
      time: "15:15-15:45",
      subject: "ISTIRAHAT",
      teacher: "",
      type: "break",
    },
    {
      time: "15:45-16:05",
      subject: "IPAS",
      teacher: "Bu Muthia",
      type: "subject",
    },
    {
      time: "16:05-16:25",
      subject: "IPAS",
      teacher: "Bu Muthia",
      type: "subject",
    },
    {
      time: "16:25-16:45",
      subject: "IPAS",
      teacher: "Bu Muthia",
      type: "subject",
    },
    {
      time: "16:45-17:05",
      subject: "IPAS",
      teacher: "Bu Muthia",
      type: "subject",
    },
  ],
  friday: [
    {
      time: "11:30-12:45",
      subject: "Sholat Jum'at",
      teacher: "Seluruh Siswa/i",
      type: "subject",
    },
    {
      time: "12:45-13:10",
      subject: "Sejarah",
      teacher: "Bu Ratminah",
      type: "subject",
    },
    {
      time: "13:10-13:40",
      subject: "Sejarah",
      teacher: "Bu Ratminah",
      type: "subject",
    },
    {
      time: "13:40-14:05",
      subject: "Bahasa Indonesia",
      teacher: "Pak Panjalu",
      type: "subject",
    },
    {
      time: "14:05-14:30",
      subject: "Bahasa Indonesia",
      teacher: "Pak Panjalu",
      type: "subject",
    },
    {
      time: "14:30-14:55",
      subject: "Matematika",
      teacher: "Bu Rina",
      type: "subject",
    },
    {
      time: "14:55-15:15",
      subject: "Matematika",
      teacher: "Bu Rina",
      type: "subject",
    },
    {
      time: "15:15-15:45",
      subject: "ISTIRAHAT",
      teacher: "",
      type: "break",
    },
    {
      time: "15:45-16:05",
      subject: "Bahasa Inggris",
      teacher: "Mrs. Kartika",
      type: "subject",
    },
    {
      time: "16:05-16:25",
      subject: "Bahasa Inggris",
      teacher: "Mrs. Kartika",
      type: "subject",
    },
    {
      time: "16:25-16:45",
      subject: "Bahasa Inggris",
      teacher: "Mrs. Kartika",
      type: "subject",
    },
    {
      time: "16:45-17:05",
      subject: "Bahasa Inggris",
      teacher: "Mrs. Kartika",
      type: "subject",
    },
  ],
};

// === REALTIME WAKTU JADWAL (TETAP) ===
function getCurrentTime() {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
}
function isCurrentTime(range) {
  const [start, end] = range.split("-");
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  const now = getCurrentTime();
  return now >= sh * 60 + sm && now < eh * 60 + em;
}

// === JADWAL HARIAN (Diperbarui untuk menambahkan ikon break) ===
function displayTodaySchedule() {
  const now = new Date();
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const daysID = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const today = days[now.getDay()];
  const todayID = daysID[now.getDay()];
  const dateText = `${now.getDate()} ${
    months[now.getMonth()]
  } ${now.getFullYear()}`;
  document.getElementById("dayName").textContent = todayID;
  document.getElementById("dateInfo").textContent = dateText;
  const todaySchedule = document.getElementById("todaySchedule");

  if (today === "saturday" || today === "sunday" || !scheduleData[today]) {
    todaySchedule.innerHTML = `<div class='text-center text-muted p-5'><h5 class="fw-bold"><i class="bi bi-emoji-laughing"></i> Akhir Pekan!</h5><p class='mb-0'><i>Nikmati hari liburmu, jangan nikmati luka yang sama lagi.</i></p></div>`;
    return;
  }

  const schedule = scheduleData[today];
  todaySchedule.innerHTML = schedule
    .map((item) => {
      const active = isCurrentTime(item.time);
      const cls =
        item.type === "break"
          ? "break"
          : item.type === "empty"
          ? "empty"
          : active
          ? "active"
          : "";
      const [start, end] = item.time.split("-");
      return `
          <div class="schedule-card ${cls} shadow-sm">
            <div class="time-section">
              <div class="time">${start}</div>
              <div class="time-range">${end}</div>
            </div>
            <div class="subject-section">
              <div class="subject-name">
                ${
                  item.type === "break"
                    ? '<i class="bi bi-cup-fill me-2"></i>'
                    : ""
                }${item.subject}
              </div>
              ${
                item.teacher && item.type !== "break" // Jangan tampilkan guru saat istirahat
                  ? `<div class="subject-info fw-normal">${item.teacher}</div>`
                  : ""
              }
            </div>
          </div>`;
    })
    .join("");
}

// === CARD HARI (TETAP) ===
function renderDayCards() {
  const dayGrid = document.getElementById("daysGrid");
  const dayNamesFull = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
  const todayIndex = new Date().getDay() - 1;
  let html = "";
  dayNamesFull.forEach((name, i) => {
    const dayKey = Object.keys(scheduleData)[i];
    const subjects = scheduleData[dayKey]
      .filter((s) => s.type === "subject")
      .slice(0, 3);
    const total = scheduleData[dayKey].filter(
      (s) => s.type === "subject"
    ).length;
    html += `
          <div class="day-card ${todayIndex === i ? "active" : ""} shadow-sm">
            <strong>${name}</strong>
            ${subjects
              .map((s) => `<div class="text-truncate">${s.subject}</div>`)
              .join("")}
            ${
              total > 3
                ? `<small class="fw-bold">+${total - 3} lainnya</small>`
                : ""
            }
          </div>`;
  });
  dayGrid.innerHTML = html;
}

// === JADWAL MINGGUAN (Dikonfirmasi ikon sudah benar) ===
function displayWeeklySchedule() {
  const daysOrder = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  const dayNames = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
  const allTimes = new Set();
  daysOrder.forEach((d) =>
    scheduleData[d].forEach((i) => allTimes.add(i.time))
  );
  const sortedTimes = [...allTimes].sort();
  const todayIndex = new Date().getDay() - 1;

  let html = `<thead><tr><th>JAM</th>${dayNames
    .map((n) => `<th>${n}</th>`)
    .join("")}</tr></thead><tbody>`;
  sortedTimes.forEach((time) => {
    const isBreak = scheduleData.monday.find(
      (i) => i.time === time && i.type === "break"
    );
    if (isBreak) {
      // Ikon bel sudah ditambahkan di sini
      html += `<tr><th>${time}</th><td colspan="${daysOrder.length}" class="break-cell"><i class="bi bi-bell-fill me-2"></i>${isBreak.subject}</td></tr>`;
    } else {
      html += `<tr><th>${time}</th>`;
      daysOrder.forEach((day, i) => {
        const c = scheduleData[day].find((j) => j.time === time);
        if (c) {
          let cls = "";
          if (i === todayIndex && c.type === "subject") cls = "today-lesson";
          if (c.type === "empty") cls = "empty-cell";
          html += `<td class="${cls}">${
            c.teacher
              ? `${c.subject}<br><small class="text-muted">${c.teacher}</small>`
              : c.subject
          }</td>`;
        } else html += "<td>-</td>";
      });
      html += "</tr>";
    }
  });
  html += "</tbody>";
  document.getElementById("weeklyTable").innerHTML = html;
}

// === INISIALISASI ===
document.addEventListener("DOMContentLoaded", () => {
  // showSection("home");
  renderDayCards();
  displayTodaySchedule();
  displayWeeklySchedule();
  setInterval(displayTodaySchedule, 1000);

  // Set initial active state for Album
  showContent("sepuluh");
});
