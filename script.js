const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
const navigationLinks = navigation ? navigation.querySelectorAll("a") : [];
const form = document.querySelector("#inquiry-form");
const status = document.querySelector("#form-status");
const submitButton = form?.querySelector('button[type="submit"]');
const translations = {
  en: {
    skip:"Skip to content",openMenu:"Open menu",closeMenu:"Close menu",brandLabel:"Avardo – home page",languageLabel:"Language selection",panelLabel:"Avardo services overview",trustLabel:"Key benefits",navServices:"Services",navAudience:"Who we clean for",navWhy:"Why Avardo",navHow:"How it works",navContact:"Contact",navCta:"Request a quote",
    heroEyebrow:"Professional cleaning · Brno and surroundings",heroTitle:"Professional Cleaning for Businesses, Homes and Accommodation Properties",heroLead:"Reliable, thorough and personal service. We plan cleaning flexibly around your needs, including evenings, weekends and public holidays by prior arrangement.",heroCta:"Request a quote",heroLink:"How it works",panelTitle:"Cleaning Services 24/7",panel1:"Businesses and shared areas",panel2:"Homes",panel3:"Hotels, guesthouses and apartments",trust1:"Regular and one-off cleaning",trust2:"Cleaning Services 24/7",trust3:"Our own supplies and equipment",trust4:"No-obligation quote",
    servicesEyebrow:"Our services",servicesTitle:"A clean environment for every type of space",servicesIntro:"We tailor the scope, frequency and timing of cleaning to your premises and how they are used.",businessTitle:"Commercial and Shared-Area Cleaning",businessIntro:"We provide regular cleaning for offices, administrative buildings, business premises, fitness centres and shared areas of apartment buildings. The scope and frequency are adapted to each customer.",business1Title:"Offices and administration",business1Text:"Regular cleaning of offices, meeting rooms, kitchenettes, washrooms and shared areas of administrative buildings.",business2Title:"Commercial premises",business2Text:"Regular cleaning for shops, business premises, and office or welfare areas of manufacturing and storage companies.",business3Title:"Fitness centres",business3Text:"Regular cleaning of training areas, changing rooms, showers, toilets and other fitness facilities.",business4Title:"HOAs and apartment buildings",business4Text:"Regular cleaning of entrances, corridors, staircases, lifts and other shared areas of apartment buildings.",businessNote:"Our service can include floor care, surface wiping, washroom cleaning, waste removal and checking hygiene supplies by agreement.",
    homeTitle:"Home Cleaning",homeIntro:"We take care of your home. We offer regular and one-off cleaning of flats and family homes, with attention to detail, reliability and a personal approach.",home1Title:"Regular cleaning",home1Text:"Regular care for flats and family homes, for individuals, couples and families.",home2Title:"One-off care",home2Text:"A thorough, pre-Christmas or seasonal clean tailored to your current needs.",home3Title:"The whole home",home3Text:"Cleaning kitchens, bathrooms, living areas and other parts of your home.",
    hospitalityTitle:"Hotel, Guesthouse and Apartment Cleaning",hospitalityIntro:"We provide professional cleaning for hotels, guesthouses and apartments. We help operators maintain high standards of cleanliness and prepare rooms for arriving guests.",hospitality1Title:"Rooms and apartments",hospitality1Text:"Cleaning rooms, apartments, bathrooms and washrooms after guests depart.",hospitality2Title:"Shared areas",hospitality2Text:"Regular care for shared areas of hotels and guesthouses, including short-term rentals.",hospitality3Title:"Flexible support",hospitality3Text:"Support during periods of high occupancy or cover for absent cleaning staff by prior arrangement.",
    audienceEyebrow:"Who we clean for",audienceTitle:"A clean setting for everyday life and business",audienceIntro:"We help businesses, households and accommodation providers maintain a pleasant environment without unnecessary hassle.",audience1Title:"Businesses and offices",audience1Text:"Regular care for workspaces, team facilities and shared building areas.",audience2Title:"Homes",audience2Text:"Thorough cleaning of flats and family homes around your schedule.",audience3Title:"Accommodation providers",audience3Text:"Reliable preparation of rooms and shared areas for incoming guests.",audience4Title:"Shared areas",audience4Text:"Long-term care for corridors, staircases, lifts and other building areas.",
    whyEyebrow:"Why Avardo",whyTitle:"A service that fits naturally into your routine",why1Title:"Reliability",why1Text:"Thorough cleaning on the agreed days and at agreed times.",why2Title:"Flexibility 24/7",why2Text:"Cleaning can be arranged in the evening, at night, on weekends or public holidays.",why3Title:"Personal approach",why3Text:"We tailor the service to your premises, frequency and required standard.",why4Title:"Less to worry about",why4Text:"We provide cleaning supplies and standard equipment.",why5Title:"Simple communication",why5Text:"One contact for arrangements, changes and requests.",
    howEyebrow:"How it works",howTitle:"From your first message to a regular routine",step1Title:"Share the basics",step1Text:"The type of premises, approximate size and preferred cleaning frequency.",step2Title:"We discuss your needs",step2Text:"We agree on the scope, timing and, if needed, a visit to the premises.",step3Title:"We prepare an offer",step3Text:"You receive a clear scope of service and a no-obligation quote.",step4Title:"We get started",step4Text:"We set the schedule and establish a long-term routine by agreement.",
    pricingEyebrow:"No-obligation quote",pricingTitle:"A scope based on your actual needs",pricingText:"We only need basic information about your premises, their use and the desired frequency. We will get back to you with the next steps.",pricingCard:"We prepare each offer individually rather than publishing a price list, so it fits your operation.",pricingCta:"Request a quote",coverageEyebrow:"Service area",coverageText:"We primarily work in Brno, focusing especially on regular commercial cleaning. Home and accommodation services, as well as work in the surrounding area, are arranged individually.",coverageShort:"Primarily Brno<br>Surrounding area by arrangement",
    formEyebrow:"No-obligation enquiry",formTitle:"Tell us about your premises",formIntro:"We will get back to you with the next steps and prepare an offer based on the information provided.",formEmailPrompt:"Prefer email?",nameLabel:"Name / contact person <em>*</em>",companyLabel:"Company / property <em>*</em>",emailLabel:"Email <em>*</em>",phoneLabel:"Phone <small>(optional)</small>",optional:"(optional)",locationLabel:"Location <em>*</em>",locationPlaceholder:"For example, Brno",areaLabel:"Approximate area in m² <em>*</em>",frequencyLabel:"Cleaning frequency <em>*</em>",frequencyChoose:"Choose a frequency",frequency1:"Once a week",frequency2:"Twice a week",frequency3:"Three times a week",frequency5:"Five times a week",frequencyOther:"Other",messageLabel:"Message / note",messagePlaceholder:"You can add the type of premises, preferred cleaning time or other requirements.",requiredNote:"<em>*</em> Required fields",submit:"Send enquiry",contactEyebrow:"Contact",contactTitle:"Contact Avardo",footerTagline:"Professional cleaning in Brno and surroundings",footerContact:"Contact",footerNav:"Navigation",privacy:"Privacy policy",
    privacyBack:"Back to website",privacyTitle:"Privacy policy",privacyIntro:"We value the trust of visitors to avardo.cz and process personal data only to the extent necessary to handle enquiries and related communication.",privacyController:"Data controller",privacyControllerText:"The data controller is Avardo, Company ID: 05256399. For questions about personal data, contact us at",privacyData:"What data we process",privacyDataText:"The enquiry form may be used to process information you provide: name or contact person, company, email address, optional phone number, location, approximate premises area, cleaning frequency and message content.",privacyPurpose:"Purpose and retention",privacyPurposeText:"We use the data to handle your enquiry, prepare an offer and communicate with you. We retain it for as long as necessary to handle the enquiry and protect our legitimate interests, or for the period required by law.",privacySharing:"Sharing data",privacySharingText:"The enquiry form is technically provided by Formspree, which receives submitted data on Avardo’s behalf. We do not share personal data with other third parties unless needed to handle your enquiry or required by law.",privacyRights:"Your rights",privacyRightsText:"You have the right to request access to, correction or deletion of your personal data, restriction of processing, object to processing and request data portability where provided by law. Contact",privacyComplaint:"You also have the right to lodge a complaint with the Office for Personal Data Protection.",privacyFooter:"Back to main page",
    formInvalid:"Please check the required fields in the form.",sending:"Sending…",formSuccess:"Thank you. We received your enquiry and will get back to you as soon as possible.",formError:"We could not send your enquiry. Please try again or email uklid@avardo.cz."
  },
  cs: {
    skip:"Přeskočit na obsah",openMenu:"Otevřít menu",closeMenu:"Zavřít menu",brandLabel:"Avardo – úvodní stránka",languageLabel:"Volba jazyka",panelLabel:"Přehled služeb Avardo",trustLabel:"Hlavní výhody",formInvalid:"Zkontrolujte prosím povinné údaje ve formuláři.",sending:"Odesílám…",formSuccess:"Děkujeme. Vaši poptávku jsme přijali a ozveme se vám co nejdříve.",formError:"Poptávku se nepodařilo odeslat. Zkuste to prosím znovu nebo nám napište na uklid@avardo.cz."
  }
};

let language = localStorage.getItem("avardo-language") || new URLSearchParams(location.search).get("lang") || "cs";
if (!translations[language]) language = "cs";

function applyLanguage(nextLanguage) {
  language = nextLanguage;
  const dictionary = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (dictionary[element.dataset.i18n] !== undefined) element.innerHTML = dictionary[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = dictionary[element.dataset.i18nPlaceholder];
    if (value !== undefined) element.placeholder = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  const navigationLabel = language === "en" ? "Main navigation" : "Hlavní navigace";
  navigation?.setAttribute("aria-label", navigationLabel);
  const isPrivacyPage = location.pathname.endsWith("ochrana-osobnich-udaju.html");
  document.title = isPrivacyPage
    ? (language === "en" ? "Privacy policy | Avardo" : "Ochrana osobních údajů | Avardo")
    : (language === "en" ? "Avardo | Professional cleaning in Brno" : "Avardo | Profesionální úklid v Brně");
  document.querySelector('meta[name="description"]')?.setAttribute("content", isPrivacyPage
    ? (language === "en" ? "Information about Avardo's processing of personal data." : "Základní informace o zpracování osobních údajů při odeslání poptávky společnosti Avardo.")
    : (language === "en" ? "Professional cleaning for businesses, homes and accommodation properties in Brno." : "Pravidelný úklid firemních prostor, domácností a ubytovacích zařízení v Brně."));
  document.querySelector('meta[property="og:locale"]')?.setAttribute("content", language === "en" ? "en_US" : "cs_CZ");
  localStorage.setItem("avardo-language", language);
}

document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.language)));
menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  const key = isOpen ? "openMenu" : "closeMenu";
  menuToggle.querySelector(".sr-only").textContent = translations[language][key];
  navigation?.classList.toggle("is-open", !isOpen);
});
navigationLinks.forEach((link) => link.addEventListener("click", () => {
  menuToggle?.setAttribute("aria-expanded", "false");
  navigation?.classList.remove("is-open");
}));

if (form && status && submitButton) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const dictionary = translations[language];
    if (!form.checkValidity()) {
      status.textContent = dictionary.formInvalid;
      status.className = "form-status error";
      form.reportValidity();
      return;
    }
    submitButton.disabled = true;
    submitButton.textContent = dictionary.sending;
    status.textContent = "";
    status.className = "form-status";
    try {
      const response = await fetch(form.dataset.endpoint.trim(), { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(`Formspree response: ${response.status}`);
      form.reset();
      status.textContent = dictionary.formSuccess;
      status.className = "form-status success";
    } catch (error) {
      console.error(error);
      status.textContent = dictionary.formError;
      status.className = "form-status error";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = translations[language].submit;
    }
  });
}

document.querySelector("#current-year")?.replaceChildren(String(new Date().getFullYear()));
applyLanguage(language);
