const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
const navigationLinks = navigation.querySelectorAll("a");
const form = document.querySelector("#inquiry-form");
const status = document.querySelector("#form-status");
const submitButton = form.querySelector('button[type="submit"]');
const submitButtonText = submitButton.textContent;

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.querySelector(".sr-only").textContent = isOpen ? "Otevřít menu" : "Zavřít menu";
  navigation.classList.toggle("is-open", !isOpen);
});

navigationLinks.forEach((link) => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.querySelector(".sr-only").textContent = "Otevřít menu";
  navigation.classList.remove("is-open");
}));

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = "Zkontrolujte prosím povinné údaje ve formuláři.";
    status.className = "form-status error";
    form.reportValidity();
    return;
  }

  const endpoint = form.dataset.endpoint.trim();
  submitButton.disabled = true;
  submitButton.textContent = "Odesílám…";
  status.textContent = "";
  status.className = "form-status";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    });

    if (!response.ok) {
      throw new Error(`Formspree response: ${response.status}`);
    }

    form.reset();
    status.textContent = "Děkujeme. Vaši poptávku jsme přijali a ozveme se vám co nejdříve.";
    status.className = "form-status success";
  } catch (error) {
    status.textContent = "Poptávku se nepodařilo odeslat. Zkuste to prosím znovu nebo nám napište na jakub@avardo.cz.";
    status.className = "form-status error";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = submitButtonText;
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
