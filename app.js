const registeredMembers = [
  { email: "roshan.arun@example.com", name: "Roshan Arun", apartment: "1003" },
  { email: "anna.kowalska@example.com", name: "Anna Kowalska", apartment: "1203" },
  { email: "erik.larsson@example.com", name: "Erik Larsson", apartment: "1102" },
  { email: "maria.nilsson@example.com", name: "Maria Nilsson", apartment: "0801" }
];

const translations = {
  en: {
    documentTitle: "Laundry Room Booking System",
    brand: "BRF laundry room",
    headerTitle: "Digital laundry",
    headerCopy: "Book, cancel, report issues and manage the shared laundry room from one simple app.",
    web: "Web",
    mobile: "Mobile",
    localScreen: "Local screen",
    navHome: "Home",
    navBook: "Book laundry",
    navMine: "Your bookings",
    navReport: "Report issue",
    navScreen: "Laundry screen",
    navSettings: "Settings",
    memberAccess: "Member access",
    loginTitle: "Log in with registered email",
    loginCopy: "Use a registered member email to enter the laundry booking demo.",
    emailId: "Email ID",
    loginButton: "Log in",
    loginError: "This email is not registered.",
    demoEmails: "Demo emails",
    logout: "Log out",
    welcomeBack: "Welcome back",
    bookLaundry: "Book laundry",
    reportIssue: "Report issue",
    yourBookings: "Your bookings",
    settings: "Settings",
    associationAdmin: "Association admin",
    adminLoginCopy: "Log in to review complaints and reserve service/maintenance slots.",
    adminEmail: "Admin email",
    password: "Password",
    adminLoginButton: "Log in as admin",
    adminLoginError: "Wrong admin login.",
    adminLogout: "Log out admin",
    complaintsAdminTitle: "Complaints",
    complaintsAdminCopy: "Reports submitted by members appear here for the association.",
    laundryStatus: "Laundry status",
    noCurrentBooking: "No current booking",
    statusWashing: "Status: washing",
    reminder30: "Reminder: 30 min before",
    notifications: "Notifications",
    notificationsCopy: "Reminders and last-minute cancellations appear here. In a live system these would also go by push/email.",
    loggedInAs: "Logged in as",
    perSlot: "per slot",
    freeToday: "free today",
    bookedMetric: "booked",
    minReminder: "min reminder",
    bookingIntro: "Four daily slots: 07:00-11:00, 11:00-15:00, 15:00-19:00 and 19:00-23:00. One resident can hold one active slot.",
    monthTitle: "Month overview",
    monthCopy: "See the next month of laundry slots at a glance.",
    myBookingsIntro: "Cancel or reschedule your reserved time. Last-minute cancellations notify all registered members.",
    rescheduleMode: "Reschedule mode",
    rescheduleCopy: "Select any green available slot on the booking page to move your booking.",
    stopMoving: "Stop moving",
    complaintDetails: "Complaint details",
    complaintCopy: "Report machine faults, cleaning problems, blocked access or booking misuse.",
    category: "Category",
    message: "Message",
    complaintPlaceholder: "Describe what happened, which machine, and when.",
    urgent: "Urgent: affects today's laundry use",
    submitReport: "Submit report",
    submittedReports: "Submitted reports",
    reportsCopy: "Stored locally for the prototype.",
    kioskStep1: "1. Enter apartment",
    apartmentNumber: "Apartment number",
    kioskHelp: "A simple local screen keeps booking possible for members without a phone.",
    kioskStep2: "2. Choose day",
    kioskStep3: "3. Tap a green time",
    kioskWarning: "Enter an apartment number first.",
    associationRules: "Association rules",
    rulesCopy: "One active booking per resident, 30-minute reminders and all-member cancellation alerts.",
    maxActive: "Max active bookings",
    reminderMinutes: "Reminder minutes before",
    slotLength: "Slot length hours",
    notifyCancellation: "Notify all on cancellation",
    yes: "Yes",
    serviceBlocked: "Service and blocked times",
    serviceCopy: "The board can close a slot during repair, cleaning or maintenance.",
    systemBehaviour: "System behaviour",
    systemCopy: "The demo models the main association rules.",
    registeredLogin: "Registered email login",
    registeredLoginCopy: "Booking is tied to the member record and apartment.",
    onePersonSlot: "One person per slot",
    onePersonSlotCopy: "Booked slots cannot be double-booked.",
    reminderFeature: "30-minute reminder",
    reminderFeatureCopy: "Reminder is scheduled when a booking is created.",
    cancellationFeature: "Cancellation broadcast",
    cancellationFeatureCopy: "Last-minute cancellations create an all-member notification.",
    allMachines: "Laundry room, all machines",
    apt: "Apt",
    allMembers: "All members",
    available: "Available",
    booked: "Booked",
    mine: "Your booking",
    progress: "Laundry in progress",
    service: "Service",
    book: "Book",
    bookThisTime: "Book this time",
    moveHere: "Move here",
    reschedule: "Reschedule",
    cancel: "Cancel",
    openSlot: "Open slot",
    markService: "Mark service",
    clear: "Clear",
    noNotifications: "No notifications",
    notificationsEmpty: "Reminders and cancellation alerts will appear here.",
    welcomeNotificationTitle: "Welcome to the laundry booking pilot",
    welcomeNotificationBody: "Bookings use four 4-hour slots and reminders are scheduled 30 minutes before start.",
    noActiveBooking: "No active booking",
    chooseGreen: "Choose a green time to reserve the laundry room.",
    noReports: "No reports yet",
    reportsEmpty: "Submitted complaints will be listed here.",
    urgentSuffix: "urgent",
    noBookingNeeded: "Log in or enter an apartment number before booking.",
    serviceBlockedStatus: "This time is marked for service and cannot be booked.",
    progressStatus: "Laundry in progress. The current slot is already booked.",
    alreadyBookedStatus: "That time is already booked. Choose a green available slot.",
    activeBookingStatus: "You already have one active laundry booking. Cancel or reschedule it first.",
    reminderScheduled: "Reminder scheduled 30 minutes before",
    bookedKiosk: "Booked on laundry room screen",
    movedNote: "Rescheduled by resident; reminder 30 minutes before",
    reminderTitle: "Laundry reminder scheduled",
    cancellationTitle: "Last-minute laundry cancellation",
    reportMessageNeeded: "Add a short message before submitting the report.",
    reportSubmitted: "Report submitted to the board queue.",
    serviceUpdated: "Service status updated for the selected time.",
    rescheduleActive: "Reschedule mode active. Select any green available slot.",
    rescheduleCancelled: "Reschedule mode cancelled.",
    cancelStatus: "Booking cancelled. If this was last-minute, all members have been notified.",
    nextBooking: "Next laundry booking",
    laundryEndsIn: "Laundry ends in",
    categoryOptions: ["Machine fault", "Cleaning complaint", "Booking misuse", "Access problem", "Other"]
  },
  sv: {
    documentTitle: "Bokningssystem för tvättstuga",
    brand: "BRF tvättstuga",
    headerTitle: "Digital tvätt",
    headerCopy: "Boka, avboka, felanmäl och hantera den gemensamma tvättstugan i en enkel app.",
    web: "Webb",
    mobile: "Mobil",
    localScreen: "Skärm på plats",
    navHome: "Hem",
    navBook: "Boka tvätt",
    navMine: "Dina bokningar",
    navReport: "Felanmäl",
    navScreen: "Tvättskärm",
    navSettings: "Inställningar",
    memberAccess: "Medlemsinloggning",
    loginTitle: "Logga in med registrerad e-post",
    loginCopy: "Använd en registrerad medlemsadress för att öppna demot.",
    emailId: "E-post",
    loginButton: "Logga in",
    loginError: "Den här e-postadressen är inte registrerad.",
    demoEmails: "Demo-adresser",
    logout: "Logga ut",
    welcomeBack: "Välkommen tillbaka",
    bookLaundry: "Boka tvätt",
    reportIssue: "Felanmäl",
    yourBookings: "Dina bokningar",
    settings: "Inställningar",
    associationAdmin: "Föreningsadmin",
    adminLoginCopy: "Logga in för att läsa klagomål och reservera service-/underhållspass.",
    adminEmail: "Admin e-post",
    password: "Lösenord",
    adminLoginButton: "Logga in som admin",
    adminLoginError: "Fel admininloggning.",
    adminLogout: "Logga ut admin",
    complaintsAdminTitle: "Klagomål",
    complaintsAdminCopy: "Rapporter från medlemmar visas här för föreningen.",
    laundryStatus: "Tvättstatus",
    noCurrentBooking: "Ingen aktuell bokning",
    statusWashing: "Status: tvättar",
    reminder30: "Påminnelse: 30 min före",
    notifications: "Notiser",
    notificationsCopy: "Påminnelser och sena avbokningar visas här. I ett riktigt system skickas de även via push/e-post.",
    loggedInAs: "Inloggad som",
    perSlot: "per pass",
    freeToday: "lediga",
    bookedMetric: "bokade",
    minReminder: "min påminnelse",
    bookingIntro: "Fyra pass per dag: 07:00-11:00, 11:00-15:00, 15:00-19:00 och 19:00-23:00. En boende kan ha en aktiv bokning.",
    monthTitle: "Månadsöversikt",
    monthCopy: "Se nästa månads tvättpass i en snabb översikt.",
    myBookingsIntro: "Avboka eller boka om din reserverade tid. Sena avbokningar meddelas till alla registrerade medlemmar.",
    rescheduleMode: "Ombokningsläge",
    rescheduleCopy: "Välj ett grönt ledigt pass på bokningssidan för att flytta din bokning.",
    stopMoving: "Avsluta ombokning",
    complaintDetails: "Felanmälan",
    complaintCopy: "Rapportera maskinfel, städproblem, åtkomstproblem eller missbruk av bokningar.",
    category: "Kategori",
    message: "Meddelande",
    complaintPlaceholder: "Beskriv vad som hände, vilken maskin och när.",
    urgent: "Brådskande: påverkar dagens tvätt",
    submitReport: "Skicka rapport",
    submittedReports: "Inskickade rapporter",
    reportsCopy: "Sparas lokalt i prototypen.",
    kioskStep1: "1. Ange lägenhet",
    apartmentNumber: "Lägenhetsnummer",
    kioskHelp: "En enkel skärm på plats gör bokning möjlig även utan mobil.",
    kioskStep2: "2. Välj dag",
    kioskStep3: "3. Tryck på en grön tid",
    kioskWarning: "Ange lägenhetsnummer först.",
    associationRules: "Föreningens regler",
    rulesCopy: "En aktiv bokning per boende, 30-minuterspåminnelser och notiser vid avbokning.",
    maxActive: "Max aktiva bokningar",
    reminderMinutes: "Påminnelse minuter före",
    slotLength: "Passlängd timmar",
    notifyCancellation: "Meddela alla vid avbokning",
    yes: "Ja",
    serviceBlocked: "Service och spärrade tider",
    serviceCopy: "Styrelsen kan stänga ett pass vid reparation, städning eller underhåll.",
    systemBehaviour: "Systembeteende",
    systemCopy: "Demot visar föreningens viktigaste regler.",
    registeredLogin: "Registrerad e-post",
    registeredLoginCopy: "Bokningen kopplas till medlemsregistret och lägenheten.",
    onePersonSlot: "En person per pass",
    onePersonSlotCopy: "Bokade pass kan inte dubbelbokas.",
    reminderFeature: "30-minuterspåminnelse",
    reminderFeatureCopy: "Påminnelse schemaläggs när bokningen skapas.",
    cancellationFeature: "Avbokningsnotis",
    cancellationFeatureCopy: "Sena avbokningar skapar en notis till alla medlemmar.",
    allMachines: "Tvättstuga, alla maskiner",
    apt: "Lgh",
    allMembers: "Alla medlemmar",
    available: "Ledig",
    booked: "Bokad",
    mine: "Din bokning",
    progress: "Tvätt pågår",
    service: "Service",
    book: "Boka",
    bookThisTime: "Boka tiden",
    moveHere: "Flytta hit",
    reschedule: "Boka om",
    cancel: "Avboka",
    openSlot: "Öppna pass",
    markService: "Markera service",
    clear: "Rensa",
    noNotifications: "Inga notiser",
    notificationsEmpty: "Påminnelser och avbokningsnotiser visas här.",
    welcomeNotificationTitle: "Välkommen till tvättbokningspiloten",
    welcomeNotificationBody: "Bokningar använder fyra 4-timmarspass och påminnelser skickas 30 minuter före start.",
    noActiveBooking: "Ingen aktiv bokning",
    chooseGreen: "Välj en grön tid för att boka tvättstugan.",
    noReports: "Inga rapporter ännu",
    reportsEmpty: "Inskickade felanmälningar visas här.",
    urgentSuffix: "brådskande",
    noBookingNeeded: "Logga in eller ange lägenhetsnummer innan bokning.",
    serviceBlockedStatus: "Den här tiden är markerad för service och kan inte bokas.",
    progressStatus: "Tvätt pågår. Det aktuella passet är redan bokat.",
    alreadyBookedStatus: "Den tiden är redan bokad. Välj ett grönt ledigt pass.",
    activeBookingStatus: "Du har redan en aktiv tvättbokning. Avboka eller boka om först.",
    reminderScheduled: "Påminnelse schemalagd 30 minuter före",
    bookedKiosk: "Bokad på tvättstugans skärm",
    movedNote: "Ombokad av boende; påminnelse 30 minuter före",
    reminderTitle: "Tvättpåminnelse schemalagd",
    cancellationTitle: "Sen avbokning av tvättid",
    reportMessageNeeded: "Lägg till ett kort meddelande innan du skickar rapporten.",
    reportSubmitted: "Rapport skickad till styrelsens kö.",
    serviceUpdated: "Servicestatus uppdaterad för vald tid.",
    rescheduleActive: "Ombokningsläge aktivt. Välj ett grönt ledigt pass.",
    rescheduleCancelled: "Ombokningsläge avbrutet.",
    cancelStatus: "Bokningen avbokades. Om det var en sen avbokning har alla medlemmar meddelats.",
    nextBooking: "Nästa tvättbokning",
    laundryEndsIn: "Tvätten slutar om",
    categoryOptions: ["Maskinfel", "Städklagomål", "Bokningsmissbruk", "Åtkomstproblem", "Annat"]
  }
};

const slots = [
  { id: "0700", label: "07:00 - 11:00", start: "07:00", end: "11:00", machines: "Laundry room, all machines" },
  { id: "1100", label: "11:00 - 15:00", start: "11:00", end: "15:00", machines: "Laundry room, all machines" },
  { id: "1500", label: "15:00 - 19:00", start: "15:00", end: "19:00", machines: "Laundry room, all machines" },
  { id: "1900", label: "19:00 - 23:00", start: "19:00", end: "23:00", machines: "Laundry room, all machines" }
];

const state = {
  selectedDay: "",
  user: null,
  adminLoggedIn: false,
  moveSource: null,
  lang: "en",
  bookings: {},
  maintenance: {},
  notifications: [],
  complaints: [],
  days: []
};

const storeKey = "laundry-booking-prototype-v3";

function t(key) {
  return translations[state.lang]?.[key] || translations.en[key] || key;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function dateKey(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function addDays(date, count) {
  const next = new Date(date);
  next.setDate(next.getDate() + count);
  return next;
}

function makeKey(day, slot) {
  return `${day}_${slot}`;
}

function normalizeApartment(value) {
  return String(value || "").replace(/[^0-9A-Za-z-]/g, "").slice(0, 8);
}

function nowText() {
  const now = new Date();
  return `${dateKey(now)} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
}

function setStatus(message) {
  document.getElementById("status").textContent = message;
}

function memberLabel(user = state.user) {
  return user ? `${user.name} - ${t("apt")} ${user.apartment}` : "";
}

function buildDays() {
  const base = new Date();
  const locale = state.lang === "sv" ? "sv-SE" : "en-GB";
  state.days = Array.from({ length: 31 }, (_, index) => {
    const day = addDays(base, index);
    return {
      key: dateKey(day),
      weekday: day.toLocaleDateString(locale, { weekday: "short" }),
      monthDay: day.toLocaleDateString(locale, { day: "2-digit", month: "short" }),
      full: day.toLocaleDateString(locale, { weekday: "long", day: "2-digit", month: "long" })
    };
  });
  state.selectedDay = state.days[0].key;
}

function rebuildDaysForLanguage() {
  const current = state.selectedDay;
  buildDays();
  if (state.days.some((day) => day.key === current)) state.selectedDay = current;
}

function seedData() {
  const currentSlot = slots.find((slot) => isCurrentSlot(state.days[0].key, slot));
  const demoBusySlot = currentSlot?.id || "1100";
  state.bookings = {
    [makeKey(state.days[0].key, demoBusySlot)]: {
      resident: "Apt 1102",
      email: "erik.larsson@example.com",
      name: "Erik Larsson",
      noteKey: "reminderScheduled",
      createdAt: nowText()
    },
    [makeKey(state.days[1].key, "1500")]: {
      resident: "Apt 1003",
      email: "roshan.arun@example.com",
      name: "Roshan Arun",
      noteKey: "reminderScheduled",
      createdAt: nowText()
    },
    [makeKey(state.days[2].key, "1900")]: {
      resident: "Apt 0801",
      email: "maria.nilsson@example.com",
      name: "Maria Nilsson",
      noteKey: "bookedKiosk",
      createdAt: nowText()
    }
  };
  state.maintenance = {
    [makeKey(state.days[3].key, "0700")]: true
  };
  state.notifications = [
    {
      audience: "All members",
      titleKey: "welcomeNotificationTitle",
      bodyKey: "welcomeNotificationBody",
      createdAt: nowText()
    }
  ];
}

function save() {
  localStorage.setItem(
    storeKey,
    JSON.stringify({
      userEmail: state.user?.email || null,
      lang: state.lang,
      selectedDay: state.selectedDay,
      bookings: state.bookings,
      maintenance: state.maintenance,
      notifications: state.notifications,
      complaints: state.complaints
    })
  );
}

function load() {
  const saved = localStorage.getItem(storeKey);
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    state.lang = parsed.lang === "sv" ? "sv" : "en";
    state.user = null;
    state.selectedDay = state.days.some((day) => day.key === parsed.selectedDay) ? parsed.selectedDay : state.days[0].key;
    rebuildDaysForLanguage();
    state.bookings = parsed.bookings || state.bookings;
    state.maintenance = parsed.maintenance || state.maintenance;
    state.notifications = parsed.notifications || state.notifications;
    state.complaints = parsed.complaints || state.complaints;
  } catch {
    localStorage.removeItem(storeKey);
  }
}

function dayByKey(key) {
  return state.days.find((day) => day.key === key) || state.days[0];
}

function slotById(id) {
  return slots.find((slot) => slot.id === id) || slots[0];
}

function slotStartDate(dayKey, slot) {
  return new Date(`${dayKey}T${slot.start}:00`);
}

function slotEndDate(dayKey, slot) {
  return new Date(`${dayKey}T${slot.end}:00`);
}

function isCurrentSlot(dayKey, slot) {
  const now = new Date();
  return now >= slotStartDate(dayKey, slot) && now < slotEndDate(dayKey, slot);
}

function isLastMinute(dayKey, slot) {
  const now = new Date();
  const start = slotStartDate(dayKey, slot);
  const end = slotEndDate(dayKey, slot);
  return start.getTime() - now.getTime() <= 24 * 60 * 60 * 1000 && end >= now;
}

function slotType(key) {
  const [dayKey, slotId] = key.split("_");
  const slot = slotById(slotId);
  const booking = state.bookings[key];
  if (booking && isCurrentSlot(dayKey, slot)) return "progress";
  if (state.maintenance[key]) return "maintenance";
  if (booking?.email === state.user?.email) return "mine";
  if (booking) return "booked";
  return "open";
}

function stateLabel(type) {
  if (type === "mine") return t("mine");
  if (type === "booked") return t("booked");
  if (type === "progress") return t("progress");
  if (type === "maintenance") return t("service");
  return t("available");
}

function hasActiveBookingForCurrentUser(ignoreKey = null) {
  if (!state.user) return false;
  return Object.entries(state.bookings).some(([key, booking]) => key !== ignoreKey && booking.email === state.user.email);
}

function showView(view) {
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === view));
  document.querySelectorAll(".view").forEach((item) => item.classList.toggle("active", item.id === view));
}

function setText(selector, key) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = t(key);
  });
}

function setNavIcon(view, key) {
  const button = document.querySelector(`[data-view="${view}"]`);
  if (!button) return;
  const label = t(key);
  button.textContent = "";
  button.setAttribute("aria-label", label);
  button.setAttribute("title", label);
}

function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.title = t("documentTitle");
  setText(".app-header .eyebrow", "brand");
  setText(".app-header h1", "headerTitle");
  setText(".header-copy", "headerCopy");
  setNavIcon("home", "navHome");
  setNavIcon("booking", "navBook");
  setNavIcon("mybookings", "navMine");
  setNavIcon("complaints", "navReport");
  setNavIcon("admin", "navSettings");
  setText(".login-card .eyebrow", "memberAccess");
  setText("#login-title", "loginTitle");
  const loginCopy = document.querySelector(".login-card > p:not(.eyebrow):not(.warning)");
  if (loginCopy) loginCopy.textContent = t("loginCopy");
  const emailLabel = document.querySelector('label span');
  if (emailLabel) emailLabel.textContent = t("emailId");
  setText("#login-button", "loginButton");
  setText("#login-error", "loginError");
  const demoTitle = document.querySelector(".demo-users b");
  if (demoTitle) demoTitle.textContent = t("demoEmails");
  setText("#logout-button", "logout");
  setText(".welcome-copy p", "welcomeBack");
  setText('[data-jump="booking"] b', "bookLaundry");
  setText('[data-jump="complaints"] b', "reportIssue");
  setText('[data-jump="mybookings"] b', "yourBookings");
  setText('[data-jump="admin"] b', "settings");
  setText(".progress-details span:first-child", "statusWashing");
  setText(".progress-details span:last-child", "reminder30");
  setText(".notification-panel .section-head h2", "notifications");
  setText(".notification-panel .section-head p", "notificationsCopy");
  setText("#booking-title", "bookLaundry");
  setText(".booking-identity span", "loggedInAs");
  setText(".mini-stat span", "perSlot");
  const metricLabels = document.querySelectorAll(".metrics span");
  [t("freeToday"), t("bookedMetric"), t("minReminder")].forEach((text, index) => {
    if (metricLabels[index]) metricLabels[index].textContent = text;
  });
  setText("#month-title", "monthTitle");
  setText("#month-copy", "monthCopy");
  setText("#mybookings-title", "yourBookings");
  setText(".page-intro", "myBookingsIntro");
  setText("#move-notice strong", "rescheduleMode");
  setText("#move-notice p", "rescheduleCopy");
  setText("#stop-moving", "stopMoving");
  setText("#complaints-title", "reportIssue");
  setText("#complaints .main-panel .section-head h2", "complaintDetails");
  setText("#complaints .main-panel .section-head p", "complaintCopy");
  const complaintLabels = document.querySelectorAll("#complaint-form label > span");
  [t("category"), t("message"), t("urgent")].forEach((text, index) => {
    if (complaintLabels[index]) complaintLabels[index].textContent = text;
  });
  document.getElementById("complaint-message").placeholder = t("complaintPlaceholder");
  setText("#complaint-form .primary", "submitReport");
  setText("#complaints .side-panel .section-head h2", "submittedReports");
  setText("#complaints .side-panel .section-head p", "reportsCopy");
  setText("#admin-title", "settings");
  setText("#admin-login .section-head h2", "associationAdmin");
  setText("#admin-login .section-head p", "adminLoginCopy");
  const adminLoginLabels = document.querySelectorAll("#admin-login label span");
  [t("adminEmail"), t("password")].forEach((text, index) => {
    if (adminLoginLabels[index]) adminLoginLabels[index].textContent = text;
  });
  setText("#admin-login-button", "adminLoginButton");
  setText("#admin-login-error", "adminLoginError");
  const adminHeads = document.querySelectorAll("#admin .main-panel > .section-head");
  if (adminHeads[0]) {
    adminHeads[0].querySelector("h2").textContent = t("associationRules");
    adminHeads[0].querySelector("p").textContent = t("rulesCopy");
  }
  const ruleLabels = document.querySelectorAll("#admin .rule-grid label span");
  [t("maxActive"), t("reminderMinutes"), t("slotLength"), t("notifyCancellation")].forEach((text, index) => {
    if (ruleLabels[index]) ruleLabels[index].textContent = text;
  });
  document.getElementById("rule-cancel").value = t("yes");
  if (adminHeads[1]) {
    adminHeads[1].querySelector("h2").textContent = t("serviceBlocked");
    adminHeads[1].querySelector("p").textContent = t("serviceCopy");
  }
  setText("#admin .side-panel .section-head h2", "complaintsAdminTitle");
  setText("#admin .side-panel .section-head p", "complaintsAdminCopy");
  setText("#admin-logout-button", "adminLogout");
  const options = document.querySelectorAll("#complaint-category option");
  t("categoryOptions").forEach((text, index) => {
    if (options[index]) {
      options[index].textContent = text;
      options[index].value = text;
    }
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
}

function setLanguage(lang) {
  state.lang = lang === "sv" ? "sv" : "en";
  rebuildDaysForLanguage();
  save();
  if (state.user) {
    render();
  } else {
    applyLanguage();
  }
}

function login() {
  const email = document.getElementById("email-input").value.trim().toLowerCase();
  const user = registeredMembers.find((member) => member.email === email);
  if (!user) {
    document.getElementById("login-error").classList.remove("hidden");
    return;
  }
  state.user = user;
  document.getElementById("login-error").classList.add("hidden");
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("app-shell").classList.remove("hidden");
  document.body.classList.add("logged-in");
  showView("home");
  save();
  setStatus(`${t("loggedInAs")} ${memberLabel()}.`);
  render();
}

function logout() {
  state.user = null;
  state.moveSource = null;
  state.adminLoggedIn = false;
  document.getElementById("login-screen").classList.remove("hidden");
  document.getElementById("app-shell").classList.add("hidden");
  document.body.classList.remove("logged-in");
  save();
}

function renderDayPicker(targetId) {
  const target = document.getElementById(targetId);
  target.innerHTML = state.days
    .map(
      (day) => `
        <button class="day-button ${day.key === state.selectedDay ? "active" : ""}" data-day="${day.key}">
          <span>${day.weekday}</span>
          <strong>${day.monthDay}</strong>
        </button>`
    )
    .join("");
  target.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedDay = button.dataset.day;
      save();
      render();
    });
  });
}

function bookingNote(booking) {
  if (!booking) return "";
  return booking.noteKey ? t(booking.noteKey) : booking.note || "";
}

function bookingResident(booking) {
  const apartment = String(booking?.resident || "").replace(/^Apt\s*/i, "");
  return `${t("apt")} ${apartment}`;
}

function slotCard(key, slot, context) {
  const booking = state.bookings[key];
  const type = slotType(key);
  const isOpen = type === "open";
  const isMine = type === "mine";
  const isProgress = type === "progress";
  const serviceText = type === "maintenance" ? `<p class="resident">${t("serviceBlockedStatus")}</p>` : "";
  const bookingText = booking ? `<p class="resident">${bookingResident(booking)} - ${bookingNote(booking)}</p>` : "";
  const progressText = isProgress ? `<p class="resident">${t("progressStatus")}</p>` : "";
  const bookLabel = state.moveSource ? t("moveHere") : context === "kiosk" ? t("bookThisTime") : t("book");
  const bookButton = isOpen ? `<button class="primary" data-book="${slot.id}" data-context="${context}">${bookLabel}</button>` : "";
  const progressButton = isProgress ? `<button class="secondary" data-progress="true">${t("progress")}</button>` : "";
  const mineButtons = isMine
    ? `<button class="secondary" data-move="${key}">${t("reschedule")}</button><button class="danger" data-cancel="${key}">${t("cancel")}</button>`
    : "";
  return `
    <article class="slot-card ${type}">
      <div class="slot-top">
        <h3>${slot.label}</h3>
        <span class="slot-state">${stateLabel(type)}</span>
      </div>
      <p>${t("allMachines")}</p>
      ${bookingText}
      ${serviceText}
      ${progressText}
      <div class="slot-actions">${bookButton}${progressButton}${mineButtons}</div>
    </article>`;
}

function bindSlotActions(root) {
  root.querySelectorAll("[data-book]").forEach((button) => {
    button.addEventListener("click", () => bookSlot(button.dataset.book, button.dataset.context));
  });
  root.querySelectorAll("[data-cancel]").forEach((button) => {
    button.addEventListener("click", () => cancelBooking(button.dataset.cancel));
  });
  root.querySelectorAll("[data-move]").forEach((button) => {
    button.addEventListener("click", () => {
      state.moveSource = button.dataset.move;
      setStatus(t("rescheduleActive"));
      showView("booking");
      render();
    });
  });
  root.querySelectorAll("[data-progress]").forEach((button) => {
    button.addEventListener("click", () => setStatus(t("progressStatus")));
  });
}

function renderSlots(targetId, context = "member") {
  const target = document.getElementById(targetId);
  target.innerHTML = slots.map((slot) => slotCard(makeKey(state.selectedDay, slot.id), slot, context)).join("");
  bindSlotActions(target);
}

function bookSlot(slotId, context) {
  const slot = slotById(slotId);
  const targetKey = makeKey(state.selectedDay, slotId);
  const residentUser = state.user;
  if (!residentUser || !residentUser.apartment) {
    setStatus(t("noBookingNeeded"));
    return;
  }
  if (state.maintenance[targetKey]) {
    setStatus(t("serviceBlockedStatus"));
    return;
  }
  if (state.bookings[targetKey]) {
    if (isCurrentSlot(state.selectedDay, slot)) {
      setStatus(t("progressStatus"));
    } else {
      setStatus(t("alreadyBookedStatus"));
    }
    return;
  }
  if (hasActiveBookingForCurrentUser(state.moveSource) && context !== "kiosk" && !state.moveSource) {
    setStatus(t("activeBookingStatus"));
    return;
  }
  if (state.moveSource && state.bookings[state.moveSource]?.email === residentUser.email) {
    const moved = state.bookings[state.moveSource];
    delete state.bookings[state.moveSource];
    state.bookings[targetKey] = { ...moved, noteKey: "movedNote", createdAt: nowText() };
    state.moveSource = null;
    setStatus(`${t("moveHere")}: ${dayByKey(state.selectedDay).full}, ${slot.label}.`);
  } else {
    state.bookings[targetKey] = {
      resident: `Apt ${residentUser.apartment}`,
      email: residentUser.email,
      name: residentUser.name,
      noteKey: "reminderScheduled",
      createdAt: nowText()
    };
    addNotification({
      audience: residentUser.email,
      title: t("reminderTitle"),
      body: `${t("reminder30")}: ${dayByKey(state.selectedDay).full}, ${slot.label}.`
    });
    setStatus(`${t("booked")}: ${dayByKey(state.selectedDay).full}, ${slot.label}. ${t("reminderScheduled")}.`);
  }
  save();
  render();
}

function cancelBooking(key) {
  const booking = state.bookings[key];
  const [dayKey, slotId] = key.split("_");
  const slot = slotById(slotId);
  delete state.bookings[key];
  if (state.moveSource === key) state.moveSource = null;
  if (booking && isLastMinute(dayKey, slot)) {
    addNotification({
      audience: "All members",
      title: t("cancellationTitle"),
      body: `${dayByKey(dayKey).full}, ${slot.label}: ${t("available")}.`
    });
  }
  save();
  setStatus(t("cancelStatus"));
  render();
}

function toggleMaintenance(slotId) {
  const key = makeKey(state.selectedDay, slotId);
  if (state.maintenance[key]) {
    delete state.maintenance[key];
  } else {
    state.maintenance[key] = true;
  }
  save();
  setStatus(t("serviceUpdated"));
  render();
}

function addNotification({ audience, title, body }) {
  state.notifications.unshift({ audience, title, body, createdAt: nowText() });
  state.notifications = state.notifications.slice(0, 12);
}

function renderNotifications() {
  const target = document.getElementById("notification-list");
  const visible = state.notifications.filter((item) => item.audience === "All members" || item.audience === state.user?.email);
  if (!visible.length) {
    target.innerHTML = `<div class="empty"><b>${t("noNotifications")}</b><p>${t("notificationsEmpty")}</p></div>`;
    return;
  }
  target.innerHTML = visible
    .map(
      (item) => `
      <article class="notification-row">
        <strong>${item.titleKey ? t(item.titleKey) : item.title}</strong>
        <span>${item.audience === "All members" ? t("allMembers") : item.audience}</span>
        <p>${item.bodyKey ? t(item.bodyKey) : item.body}</p>
        <small>${item.createdAt}</small>
      </article>`
    )
    .join("");
}

function renderMyBookings() {
  const targets = ["my-bookings", "my-bookings-full"].map((id) => document.getElementById(id)).filter(Boolean);
  if (!targets.length) return;
  const mine = Object.entries(state.bookings)
    .filter(([, booking]) => booking.email === state.user?.email)
    .sort(([a], [b]) => a.localeCompare(b));
  let html = "";
  if (!mine.length) {
    html = `<div class="empty"><b>${t("noActiveBooking")}</b><p>${t("chooseGreen")}</p></div>`;
  } else {
    html = mine
      .map(([key, booking]) => {
        const [day, slot] = key.split("_");
        return `
          <article class="booking-row">
            <strong>${slotById(slot).label}</strong>
            <span>${dayByKey(day).full}</span>
            <span>${bookingNote(booking)}</span>
            <button class="secondary" data-move="${key}">${t("reschedule")}</button>
            <button class="danger" data-cancel="${key}">${t("cancel")}</button>
          </article>`;
      })
      .join("");
  }
  targets.forEach((target) => {
    target.innerHTML = html;
    bindSlotActions(target);
  });
}

function renderMetrics() {
  const selected = slots.map((slot) => makeKey(state.selectedDay, slot.id));
  const free = selected.filter((key) => slotType(key) === "open").length;
  const booked = selected.filter((key) => ["booked", "mine", "progress"].includes(slotType(key))).length;
  document.getElementById("free-count").textContent = free;
  document.getElementById("booked-count").textContent = booked;
}

function renderMonthOverview() {
  const target = document.getElementById("month-overview");
  if (!target) return;
  target.innerHTML = state.days
    .map((day) => {
      const miniSlots = slots
        .map((slot) => {
          const key = makeKey(day.key, slot.id);
          const type = slotType(key);
          return `<span class="month-slot ${type}" title="${slot.label} ${stateLabel(type)}">${slot.start}</span>`;
        })
        .join("");
      return `
        <button class="month-day ${day.key === state.selectedDay ? "active" : ""}" data-month-day="${day.key}">
          <span class="month-date"><b>${day.monthDay}</b><small>${day.weekday}</small></span>
          <span class="month-slots">${miniSlots}</span>
        </button>`;
    })
    .join("");
  target.querySelectorAll("[data-month-day]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedDay = button.dataset.monthDay;
      save();
      render();
      setStatus(`${dayByKey(state.selectedDay).full}`);
    });
  });
}

function renderAdminSlots() {
  const target = document.getElementById("admin-slots");
  target.innerHTML = slots
    .map((slot) => {
      const key = makeKey(state.selectedDay, slot.id);
      const type = slotType(key);
      const booking = state.bookings[key];
      return `
        <article class="slot-card ${type}">
          <div class="slot-top">
            <h3>${slot.label}</h3>
            <span class="slot-state">${stateLabel(type)}</span>
          </div>
          <p>${booking ? `${booking.name || bookingResident(booking)} - ${bookingResident(booking)}` : t("allMachines")}</p>
          <div class="slot-actions">
            <button class="${state.maintenance[key] ? "secondary" : "quiet"}" data-service="${slot.id}">
              ${state.maintenance[key] ? t("openSlot") : t("markService")}
            </button>
            ${booking ? `<button class="danger" data-cancel="${key}">${t("cancel")}</button>` : ""}
          </div>
        </article>`;
    })
    .join("");
  target.querySelectorAll("[data-service]").forEach((button) => {
    button.addEventListener("click", () => toggleMaintenance(button.dataset.service));
  });
  bindSlotActions(target);
}

function renderComplaints() {
  const target = document.getElementById("complaint-list");
  if (!state.complaints.length) {
    target.innerHTML = `<div class="empty"><b>${t("noReports")}</b><p>${t("reportsEmpty")}</p></div>`;
    return;
  }
  target.innerHTML = state.complaints
    .map(
      (item) => `
      <article class="complaint-row ${item.urgent ? "urgent" : ""}">
        <strong>${item.category}${item.urgent ? ` - ${t("urgentSuffix")}` : ""}</strong>
        <span>${item.name} - ${t("apt")} ${item.apartment}</span>
        <p>${item.message}</p>
        <small>${item.createdAt}</small>
      </article>`
    )
    .join("");
}

function renderAdminComplaints() {
  const target = document.getElementById("admin-complaint-list");
  if (!target) return;
  if (!state.complaints.length) {
    target.innerHTML = `<div class="empty"><b>${t("noReports")}</b><p>${t("reportsEmpty")}</p></div>`;
    return;
  }
  target.innerHTML = state.complaints
    .map(
      (item) => `
      <article class="complaint-row ${item.urgent ? "urgent" : ""}">
        <strong>${item.category}${item.urgent ? ` - ${t("urgentSuffix")}` : ""}</strong>
        <span>${item.name} - ${t("apt")} ${item.apartment}</span>
        <p>${item.message}</p>
        <small>${item.createdAt}</small>
      </article>`
    )
    .join("");
}

function updateAdminView() {
  document.getElementById("admin-login").classList.toggle("hidden", state.adminLoggedIn);
  document.getElementById("admin-dashboard").classList.toggle("hidden", !state.adminLoggedIn);
  if (state.adminLoggedIn) renderAdminComplaints();
}

function loginAdmin() {
  const email = document.getElementById("admin-email").value.trim().toLowerCase();
  const password = document.getElementById("admin-password").value;
  if (email === "association.admin@example.com" && password === "admin123") {
    state.adminLoggedIn = true;
    document.getElementById("admin-login-error").classList.add("hidden");
    setStatus(t("associationAdmin"));
    render();
    return;
  }
  document.getElementById("admin-login-error").classList.remove("hidden");
}

function renderHomeProgress() {
  const title = document.getElementById("home-progress-title");
  const meta = document.getElementById("home-progress-meta");
  if (!title || !meta) return;
  const now = new Date();
  const mine = Object.entries(state.bookings)
    .filter(([, booking]) => booking.email === state.user?.email)
    .map(([key]) => {
      const [day, slotId] = key.split("_");
      const slot = slotById(slotId);
      return { day, slot, start: slotStartDate(day, slot), end: slotEndDate(day, slot) };
    })
    .sort((a, b) => a.start - b.start);
  const current = mine.find((item) => now >= item.start && now < item.end);
  const next = mine.find((item) => item.start >= now);
  if (current) {
    const minutesLeft = Math.max(0, Math.round((current.end - now) / 60000));
    title.textContent = `${t("laundryEndsIn")} ${minutesLeft} min`;
    meta.textContent = `${dayByKey(current.day).full}, ${current.slot.label}`;
    return;
  }
  if (next) {
    title.textContent = t("nextBooking");
    meta.textContent = `${dayByKey(next.day).full}, ${next.slot.label}`;
    return;
  }
  title.textContent = t("laundryStatus");
  meta.textContent = t("noCurrentBooking");
}

function bindInputs() {
  document.getElementById("member-label").textContent = memberLabel();
  document.getElementById("home-name").textContent = state.user?.name || "Member";
  document.getElementById("home-apartment").textContent = state.user ? `${t("apt")} ${state.user.apartment} - ${state.user.email}` : "";
  renderHomeProgress();
  ["rule-active", "rule-reminder", "rule-length"].forEach((id) => {
    const input = document.getElementById(id);
    input.oninput = () => {
      input.value = input.value.replace(/[^0-9]/g, "");
    };
  });
}

function bindComplaints() {
  document.getElementById("complaint-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.getElementById("complaint-message").value.trim();
    if (!message) {
      setStatus(t("reportMessageNeeded"));
      return;
    }
    const complaint = {
      category: document.getElementById("complaint-category").value,
      message,
      urgent: document.getElementById("complaint-urgent").checked,
      name: state.user.name,
      apartment: state.user.apartment,
      createdAt: nowText()
    };
    state.complaints.unshift(complaint);
    document.getElementById("complaint-message").value = "";
    document.getElementById("complaint-urgent").checked = false;
    save();
    setStatus(t("reportSubmitted"));
    render();
  });
}

function render() {
  if (!state.user) return;
  applyLanguage();
  renderDayPicker("day-picker");
  renderDayPicker("admin-day-picker");
  renderSlots("booking-slots");
  renderAdminSlots();
  renderMyBookings();
  renderNotifications();
  renderComplaints();
  renderMetrics();
  renderMonthOverview();
  bindInputs();
  updateAdminView();
  document.getElementById("move-notice").classList.toggle("hidden", !state.moveSource);
}

function bindTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => showView(tab.dataset.view));
  });
  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.jump));
  });
  document.getElementById("stop-moving").addEventListener("click", () => {
    state.moveSource = null;
    setStatus(t("rescheduleCancelled"));
    render();
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
  document.getElementById("admin-login-button").addEventListener("click", loginAdmin);
  document.getElementById("admin-password").addEventListener("keydown", (event) => {
    if (event.key === "Enter") loginAdmin();
  });
  document.getElementById("admin-logout-button").addEventListener("click", () => {
    state.adminLoggedIn = false;
    setStatus(t("adminLogout"));
    render();
  });
  document.getElementById("login-button").addEventListener("click", login);
  document.getElementById("email-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") login();
  });
  document.getElementById("logout-button").addEventListener("click", logout);
}

buildDays();
seedData();
load();
bindTabs();
bindComplaints();
applyLanguage();
if (state.user) {
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("app-shell").classList.remove("hidden");
  document.body.classList.add("logged-in");
  save();
  render();
}
