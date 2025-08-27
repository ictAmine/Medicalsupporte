// Oculta loader al cargar
window.addEventListener("load", () => {
  const l = document.getElementById("loader");
  if (l) l.style.display = "none";
  const pageUrlField = document.getElementById("pageUrlField");
  if (pageUrlField) pageUrlField.value = window.location.href;
});

// Diccionario i18n
const I18N = {
  nl: {
    "site.title":"MedicalSupporte",
    "nav.home":"Home","nav.services":"Diensten","nav.pricing":"Prijzen","nav.contact":"Contact",
    "hero.title":"MedicalSupporte",
    "hero.subtitle":"Digitale oplossingen voor privéklinieken en ZZP’ers in Nederland.",
    "hero.cta":"Vraag een offerte aan",
    "services.title":"Onze Diensten",
    "services.web.title":"Websites","services.web.desc":"Professionele websites die vertrouwen uitstralen.",
    "services.chat.title":"Chatbots","services.chat.desc":"Automatische assistenten die afspraken en vragen afhandelen.",
    "services.mail.title":"E-mail Automatisatie","services.mail.desc":"Directe bevestigingen en follow-ups voor uw patiënten.",
    "pricing.title":"Prijzen",
    "pricing.basic.title":"Basic","pricing.basic.price":"€99","pricing.basic.desc":"1-pagina website",
    "pricing.pro.title":"Pro","pricing.pro.price":"€199","pricing.pro.desc":"Website + chatbot",
    "pricing.premium.title":"Premium","pricing.premium.price":"€299","pricing.premium.desc":"Alles-in-één digitale oplossing",
    "contact.title":"Contacteer ons",
    "contact.form.name":"Uw naam","contact.form.email":"Uw e-mail","contact.form.message":"Uw bericht","contact.form.send":"Verstuur",
    "footer.copy":"© 2025 MedicalSupporte. Alle rechten voorbehouden."
  },
  es: {
    "site.title":"MedicalSupporte",
    "nav.home":"Inicio","nav.services":"Servicios","nav.pricing":"Precios","nav.contact":"Contacto",
    "hero.title":"MedicalSupporte",
    "hero.subtitle":"Soluciones digitales para clínicas privadas y autónomos en Países Bajos.",
    "hero.cta":"Pide un presupuesto",
    "services.title":"Nuestros Servicios",
    "services.web.title":"Sitios Web","services.web.desc":"Webs profesionales que inspiran confianza.",
    "services.chat.title":"Chatbots","services.chat.desc":"Asistentes automáticos para citas y preguntas.",
    "services.mail.title":"Automatización de Email","services.mail.desc":"Confirmaciones y seguimientos al instante.",
    "pricing.title":"Precios",
    "pricing.basic.title":"Básico","pricing.basic.price":"99€","pricing.basic.desc":"Sitio web de 1 página",
    "pricing.pro.title":"Pro","pricing.pro.price":"199€","pricing.pro.desc":"Web + chatbot",
    "pricing.premium.title":"Premium","pricing.premium.price":"299€","pricing.premium.desc":"Solución digital todo-en-uno",
    "contact.title":"Contáctanos",
    "contact.form.name":"Tu nombre","contact.form.email":"Tu correo","contact.form.message":"Tu mensaje","contact.form.send":"Enviar",
    "footer.copy":"© 2025 MedicalSupporte. Todos los derechos reservados."
  },
  en: {
    "site.title":"MedicalSupporte",
    "nav.home":"Home","nav.services":"Services","nav.pricing":"Pricing","nav.contact":"Contact",
    "hero.title":"MedicalSupporte",
    "hero.subtitle":"Digital solutions for private clinics and freelancers in the Netherlands.",
    "hero.cta":"Request a quote",
    "services.title":"Our Services",
    "services.web.title":"Websites","services.web.desc":"Professional websites that inspire trust.",
    "services.chat.title":"Chatbots","services.chat.desc":"Automated assistants for appointments and FAQs.",
    "services.mail.title":"Email Automation","services.mail.desc":"Instant confirmations and follow-ups.",
    "pricing.title":"Pricing",
    "pricing.basic.title":"Basic","pricing.basic.price":"€99","pricing.basic.desc":"One-page website",
    "pricing.pro.title":"Pro","pricing.pro.price":"€199","pricing.pro.desc":"Website + chatbot",
    "pricing.premium.title":"Premium","pricing.premium.price":"€299","pricing.premium.desc":"All-in-one digital solution",
    "contact.title":"Contact us",
    "contact.form.name":"Your name","contact.form.email":"Your email","contact.form.message":"Your message","contact.form.send":"Send",
    "footer.copy":"© 2025 MedicalSupporte. All rights reserved."
  },
  fr: {
    "site.title":"MedicalSupporte",
    "nav.home":"Accueil","nav.services":"Services","nav.pricing":"Tarifs","nav.contact":"Contact",
    "hero.title":"MedicalSupporte",
    "hero.subtitle":"Solutions numériques pour cliniques privées et indépendants aux Pays-Bas.",
    "hero.cta":"Demander un devis",
    "services.title":"Nos Services",
    "services.web.title":"Sites web","services.web.desc":"Sites professionnels qui inspirent confiance.",
    "services.chat.title":"Chatbots","services.chat.desc":"Assistants automatiques pour rendez-vous et questions.",
    "services.mail.title":"Automatisation d’e-mail","services.mail.desc":"Confirmations et suivis instantanés.",
    "pricing.title":"Tarifs",
    "pricing.basic.title":"Basic","pricing.basic.price":"99€","pricing.basic.desc":"Site d’une page",
    "pricing.pro.title":"Pro","pricing.pro.price":"199€","pricing.pro.desc":"Site + chatbot",
    "pricing.premium.title":"Premium","pricing.premium.price":"299€","pricing.premium.desc":"Solution numérique tout-en-un",
    "contact.title":"Contactez-nous",
    "contact.form.name":"Votre nom","contact.form.email":"Votre e-mail","contact.form.message":"Votre message","contact.form.send":"Envoyer",
    "footer.copy":"© 2025 MedicalSupporte. Tous droits réservés."
  },
  ar: {
    "site.title":"ميديكال سوبّورت",
    "nav.home":"الرئيسية","nav.services":"الخدمات","nav.pricing":"الأسعار","nav.contact":"تواصل",
    "hero.title":"ميديكال سوبّورت",
    "hero.subtitle":"حلول رقمية للعيادات الخاصة والعاملين لحسابهم الخاص في هولندا.",
    "hero.cta":"اطلب عرض سعر",
    "services.title":"خدماتنا",
    "services.web.title":"مواقع إلكترونية","services.web.desc":"مواقع احترافية تبعث على الثقة.",
    "services.chat.title":"روبوتات محادثة","services.chat.desc":"مساعدون آليون للمواعيد والأسئلة.",
    "services.mail.title":"أتمتة البريد الإلكتروني","services.mail.desc":"تأكيدات فورية ومتابعات.",
    "pricing.title":"الأسعار",
    "pricing.basic.title":"أساسي","pricing.basic.price":"€99","pricing.basic.desc":"موقع صفحة واحدة",
    "pricing.pro.title":"احترافي","pricing.pro.price":"€199","pricing.pro.desc":"موقع + روبوت محادثة",
    "pricing.premium.title":"ممتاز","pricing.premium.price":"€299","pricing.premium.desc":"حل رقمي متكامل",
    "contact.title":"اتصل بنا",
    "contact.form.name":"اسمك","contact.form.email":"بريدك الإلكتروني","contact.form.message":"رسالتك","contact.form.send":"إرسال",
    "footer.copy":"© 2025 ميديكال سوبّورت. جميع الحقوق محفوظة."
  }
};

// Helpers i18n
function applyI18n(lang){
  const dict = I18N[lang] || I18N.nl;

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.getAttribute("data-i18n");
    if (dict[k]) el.textContent = dict[k];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const k = el.getAttribute("data-i18n-placeholder");
    if (dict[k]) el.setAttribute("placeholder", dict[k]);
  });

  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  document.querySelectorAll(".lang-btn").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang === lang);
    b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
  });

  const lf = document.getElementById("langField");
  if (lf) lf.value = lang;

  const app = document.getElementById("app");
  if (app){
    app.classList.remove("fade-in");
    void app.offsetWidth;
    app.classList.add("fade-in");
  }
}

function detectLang(){
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  if (urlLang && I18N[urlLang]) return urlLang;
  const saved = localStorage.getItem("ms_lang");
  if (saved && I18N[saved]) return saved;
  return "nl";
}

let currentLang = detectLang();
applyI18n(currentLang);

document.querySelectorAll(".lang-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const lang = btn.dataset.lang;
    currentLang = lang;
    localStorage.setItem("ms_lang", lang);
    const url = new URL(window.location);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url);
    applyI18n(lang);
  });
});
