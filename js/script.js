// Loader & meta
window.addEventListener("load", () => {
  const l = document.getElementById("loader");
  if (l) l.style.display = "none";
  const pageUrlField = document.getElementById("pageUrlField");
  if (pageUrlField) pageUrlField.value = window.location.href;
});

// ===== i18n =====
const I18N = {
  nl: {
    "site.title":"MedicalSupporte",
    "nav.home":"Home","nav.services":"Diensten","nav.pricing":"Prijzen","nav.contact":"Contact","nav.why":"Waarom wij",
    "hero.title":"MedicalSupporte",
    "hero.subtitle":"Digitale oplossingen voor privéklinieken en ZZP’ers in Nederland.",
    "hero.cta":"Vraag een offerte aan",
    "services.title":"Onze Diensten",
    "services.web.title":"Websites","services.web.desc":"Professionele websites die vertrouwen uitstralen.",
    "services.chat.title":"Chatbots","services.chat.desc":"Automatische assistenten die afspraken en vragen afhandelen.",
    "services.mail.title":"E-mail Automatisatie","services.mail.desc":"Directe bevestigingen en follow-ups voor uw patiënten.",
    "pricing.title":"Prijzen","pricing.tag.bestvalue":"Beste keuze",
    "pricing.basic.title":"Basic","pricing.basic.price":"€99","pricing.basic.desc":"1-pagina website",
    "pricing.pro.title":"Pro","pricing.pro.price":"€199","pricing.pro.desc":"Website + chatbot",
    "pricing.premium.title":"Premium","pricing.premium.price":"€299","pricing.premium.desc":"Alles-in-één digitale oplossing",
    "why.title":"Waarom kiezen voor MedicalSupporte?",
    "why.fast.title":"Snel en licht","why.fast.desc":"Supersnelle sites, geoptimaliseerd voor mobiel en SEO.",
    "why.i18n.title":"5 talen + RTL","why.i18n.desc":"NL/ES/EN/FR/AR met rechts-naar-links ondersteuning.",
    "why.forms.title":"Formulieren die converteren","why.forms.desc":"Netlify Forms met antispam en nette redirect.",
    "testi.title":"Testimonia",
    "testi.1.text":"“Onze kliniek kreeg meer afspraken in de eerste week.”","testi.1.author":"— Privékliniek Delft",
    "testi.2.text":"“Chatbot in 3 talen en automatische e-mails, simpel en effectief.”","testi.2.author":"— Fysiotherapie Gouda",
    "testi.3.text":"“Snel, duidelijk en met vertrouwenwekkend design.”","testi.3.author":"— Tandarts Rotterdam",
    "faq.title":"Veelgestelde vragen",
    "faq.1.q":"Hoe lang duurt het?","faq.1.a":"Landing binnen 48–72 uur na ontvangst van content.",
    "faq.2.q":"Eerst één taal en later meer?","faq.2.a":"Ja. We voegen talen toe zonder de site te herbouwen.",
    "faq.3.q":"Werkt het formulier zonder server?","faq.3.a":"Ja. Netlify Forms verwerkt inzendingen en je ziet ze in het panel.",
    "contact.title":"Contacteer ons",
    "contact.form.name":"Uw naam","contact.form.email":"Uw e-mail","contact.form.message":"Uw bericht","contact.form.send":"Verstuur",
    "footer.copy":"© 2025 MedicalSupporte. Alle rechten voorbehouden.",
    "alert.loading":"Bezig met verzenden…","alert.ok":"Bedankt! We nemen snel contact op.","alert.err":"Er ging iets mis. Probeer het opnieuw."
  },
  es: {
    "site.title":"MedicalSupporte",
    "nav.home":"Inicio","nav.services":"Servicios","nav.pricing":"Precios","nav.contact":"Contacto","nav.why":"¿Por qué nosotros?",
    "hero.title":"MedicalSupporte",
    "hero.subtitle":"Soluciones digitales para clínicas privadas y autónomos en Países Bajos.",
    "hero.cta":"Pide un presupuesto",
    "services.title":"Nuestros Servicios",
    "services.web.title":"Sitios Web","services.web.desc":"Webs profesionales que inspiran confianza.",
    "services.chat.title":"Chatbots","services.chat.desc":"Asistentes automáticos para citas y preguntas.",
    "services.mail.title":"Automatización de Email","services.mail.desc":"Confirmaciones y seguimientos al instante.",
    "pricing.title":"Precios","pricing.tag.bestvalue":"Mejor valor",
    "pricing.basic.title":"Básico","pricing.basic.price":"99€","pricing.basic.desc":"Sitio web de 1 página",
    "pricing.pro.title":"Pro","pricing.pro.price":"199€","pricing.pro.desc":"Web + chatbot",
    "pricing.premium.title":"Premium","pricing.premium.price":"299€","pricing.premium.desc":"Solución digital todo-en-uno",
    "why.title":"¿Por qué elegir MedicalSupporte?",
    "why.fast.title":"Rápido y ligero","why.fast.desc":"Webs veloces, optimizadas para móvil y SEO.",
    "why.i18n.title":"5 idiomas + RTL","why.i18n.desc":"NL/ES/EN/FR/AR con soporte derecha-a-izquierda.",
    "why.forms.title":"Formularios que convierten","why.forms.desc":"Netlify Forms con antispam y redirección limpia.",
    "testi.title":"Testimonios",
    "testi.1.text":"“Nuestra clínica recibió más citas la primera semana.”","testi.1.author":"— Clínica Privada Delft",
    "testi.2.text":"“Chatbot en 3 idiomas y emails automáticos, simple y efectivo.”","testi.2.author":"— Fisioterapia Gouda",
    "testi.3.text":"“Rápidos, claros y con diseño que inspira confianza.”","testi.3.author":"— Tandarts Rotterdam",
    "faq.title":"Preguntas frecuentes",
    "faq.1.q":"¿Cuánto tardan?","faq.1.a":"Landing básica en 48–72h tras recibir el contenido.",
    "faq.2.q":"¿Puedo empezar con un idioma y luego añadir más?","faq.2.a":"Sí. Se añaden sin rehacer la web.",
    "faq.3.q":"¿Funciona el formulario sin servidor?","faq.3.a":"Sí. Netlify Forms procesa y verás todo en el panel.",
    "contact.title":"Contáctanos",
    "contact.form.name":"Tu nombre","contact.form.email":"Tu correo","contact.form.message":"Tu mensaje","contact.form.send":"Enviar",
    "footer.copy":"© 2025 MedicalSupporte. Todos los derechos reservados.",
    "alert.loading":"Enviando…","alert.ok":"¡Gracias! Te contactamos en breve.","alert.err":"Algo salió mal. Inténtalo de nuevo."
  },
  en: {
    "site.title":"MedicalSupporte",
    "nav.home":"Home","nav.services":"Services","nav.pricing":"Pricing","nav.contact":"Contact","nav.why":"Why us",
    "hero.title":"MedicalSupporte",
    "hero.subtitle":"Digital solutions for private clinics and freelancers in the Netherlands.",
    "hero.cta":"Request a quote",
    "services.title":"Our Services",
    "services.web.title":"Websites","services.web.desc":"Professional websites that inspire trust.",
    "services.chat.title":"Chatbots","services.chat.desc":"Automated assistants for appointments and FAQs.",
    "services.mail.title":"Email Automation","services.mail.desc":"Instant confirmations and follow-ups.",
    "pricing.title":"Pricing","pricing.tag.bestvalue":"Best value",
    "pricing.basic.title":"Basic","pricing.basic.price":"€99","pricing.basic.desc":"One-page website",
    "pricing.pro.title":"Pro","pricing.pro.price":"€199","pricing.pro.desc":"Website + chatbot",
    "pricing.premium.title":"Premium","pricing.premium.price":"€299","pricing.premium.desc":"All-in-one digital solution",
    "why.title":"Why choose MedicalSupporte?",
    "why.fast.title":"Fast & lightweight","why.fast.desc":"Blazing sites, optimized for mobile and SEO.",
    "why.i18n.title":"5 languages + RTL","why.i18n.desc":"NL/ES/EN/FR/AR with right-to-left support.",
    "why.forms.title":"Forms that convert","why.forms.desc":"Netlify Forms with antispam and clean redirect.",
    "testi.title":"Testimonials",
    "testi.1.text":"“More bookings in our first week.”","testi.1.author":"— Private Clinic Delft",
    "testi.2.text":"“3-language chatbot and automated emails, simple and effective.”","testi.2.author":"— Physio Gouda",
    "testi.3.text":"“Fast, clear, and trust-building design.”","testi.3.author":"— Dentist Rotterdam",
    "faq.title":"FAQ",
    "faq.1.q":"How long does it take?","faq.1.a":"Landing in 48–72h after we receive your content.",
    "faq.2.q":"Start with one language and add more?","faq.2.a":"Yes. We add languages without rebuilding.",
    "faq.3.q":"Does the form work without a server?","faq.3.a":"Yes. Netlify Forms handles submissions.",
    "contact.title":"Contact us",
    "contact.form.name":"Your name","contact.form.email":"Your email","contact.form.message":"Your message","contact.form.send":"Send",
    "footer.copy":"© 2025 MedicalSupporte. All rights reserved.",
    "alert.loading":"Sending…","alert.ok":"Thanks! We’ll get back to you soon.","alert.err":"Something went wrong. Please try again."
  },
  fr: {
    "site.title":"MedicalSupporte",
    "nav.home":"Accueil","nav.services":"Services","nav.pricing":"Tarifs","nav.contact":"Contact","nav.why":"Pourquoi nous",
    "hero.title":"MedicalSupporte",
    "hero.subtitle":"Solutions numériques pour cliniques privées et indépendants aux Pays-Bas.",
    "hero.cta":"Demander un devis",
    "services.title":"Nos Services",
    "services.web.title":"Sites web","services.web.desc":"Sites professionnels qui inspirent confiance.",
    "services.chat.title":"Chatbots","services.chat.desc":"Assistants automatiques pour rendez-vous et questions.",
    "services.mail.title":"Automatisation d’e-mail","services.mail.desc":"Confirmations et suivis instantanés.",
    "pricing.title":"Tarifs","pricing.tag.bestvalue":"Meilleur choix",
    "pricing.basic.title":"Basic","pricing.basic.price":"99€","pricing.basic.desc":"Site une page",
    "pricing.pro.title":"Pro","pricing.pro.price":"199€","pricing.pro.desc":"Site + chatbot",
    "pricing.premium.title":"Premium","pricing.premium.price":"299€","pricing.premium.desc":"Solution numérique tout-en-un",
    "why.title":"Pourquoi choisir MedicalSupporte ?",
    "why.fast.title":"Rapide et léger","why.fast.desc":"Sites rapides, optimisés mobile et SEO.",
    "why.i18n.title":"5 langues + RTL","why.i18n.desc":"NL/ES/EN/FR/AR avec prise en charge RTL.",
    "why.forms.title":"Formulaires qui convertissent","why.forms.desc":"Netlify Forms avec antispam et redirection propre.",
    "testi.title":"Témoignages",
    "testi.1.text":"« Plus de rendez-vous dès la première semaine. »","testi.1.author":"— Clinique privée Delft",
    "testi.2.text":"« Chatbot en 3 langues et emails automatiques, simple et efficace. »","testi.2.author":"— Kiné Gouda",
    "testi.3.text":"« Rapides, clairs et un design de confiance. »","testi.3.author":"— Dentiste Rotterdam",
    "faq.title":"FAQ",
    "faq.1.q":"Combien de temps ?","faq.1.a":"Landing en 48–72h après réception du contenu.",
    "faq.2.q":"Commencer par une langue puis ajouter ?","faq.2.a":"Oui, sans reconstruire le site.",
    "faq.3.q":"Le formulaire sans serveur ?","faq.3.a":"Oui, Netlify Forms gère les envois.",
    "contact.title":"Contactez-nous",
    "contact.form.name":"Votre nom","contact.form.email":"Votre e-mail","contact.form.message":"Votre message","contact.form.send":"Envoyer",
    "footer.copy":"© 2025 MedicalSupporte. Tous droits réservés.",
    "alert.loading":"Envoi…","alert.ok":"Merci ! Nous revenons vite vers vous.","alert.err":"Un problème est survenu. Réessayez."
  },
  ar: {
    "site.title":"ميديكال سوبّورت",
    "nav.home":"الرئيسية","nav.services":"الخدمات","nav.pricing":"الأسعار","nav.contact":"تواصل","nav.why":"لماذا نحن",
    "hero.title":"ميديكال سوبّورت",
    "hero.subtitle":"حلول رقمية للعيادات الخاصة والعاملين لحسابهم الخاص في هولندا.",
    "hero.cta":"اطلب عرض سعر",
    "services.title":"خدماتنا",
    "services.web.title":"مواقع إلكترونية","services.web.desc":"مواقع احترافية تبعث على الثقة.",
    "services.chat.title":"روبوتات محادثة","services.chat.desc":"مساعدون آليون للمواعيد والأسئلة.",
    "services.mail.title":"أتمتة البريد الإلكتروني","services.mail.desc":"تأكيدات فورية ومتابعات.",
    "pricing.title":"الأسعار","pricing.tag.bestvalue":"أفضل اختيار",
    "pricing.basic.title":"أساسي","pricing.basic.price":"€99","pricing.basic.desc":"موقع صفحة واحدة",
    "pricing.pro.title":"احترافي","pricing.pro.price":"€199","pricing.pro.desc":"موقع + روبوت محادثة",
    "pricing.premium.title":"ممتاز","pricing.premium.price":"€299","pricing.premium.desc":"حل رقمي متكامل",
    "why.title":"لماذا نختار ميديكال سوبّورت؟",
    "why.fast.title":"سريع وخفيف","why.fast.desc":"مواقع سريعة مُحسّنة للهاتف ومحركات البحث.",
    "why.i18n.title":"٥ لغات + RTL","why.i18n.desc":"هولندي/إسباني/إنجليزي/فرنسي/عربي مع دعم الاتجاه من اليمين إلى اليسار.",
    "why.forms.title":"نماذج فعّالة","why.forms.desc":"نماذج Netlify مع مضاد للبريد المزعج وإعادة توجيه نظيفة.",
    "testi.title":"آراء العملاء",
    "testi.1.text":"“حصلنا على حجوزات أكثر في الأسبوع الأول.”","testi.1.author":"— عيادة خاصة دلفت",
    "testi.2.text":"“روبوت محادثة بثلاث لغات ورسائل تلقائية، بسيط وفعّال.”","testi.2.author":"— علاج طبيعي خاوْدا",
    "testi.3.text":"“سريعون وواضحون وتصميم يبعث على الثقة.”","testi.3.author":"— طبيب أسنان روتردام",
    "faq.title":"أسئلة شائعة",
    "faq.1.q":"كم يستغرق؟","faq.1.a":"صفحة هبوط خلال 48–72 ساعة بعد استلام المحتوى.",
    "faq.2.q":"أبدأ بلغة ثم أضيف أخرى؟","faq.2.a":"نعم، نضيف اللغات دون إعادة بناء الموقع.",
    "faq.3.q":"هل يعمل النموذج بدون خادم؟","faq.3.a":"نعم، Netlify Forms يعالج الإرساليات.",
    "contact.title":"اتصل بنا",
    "contact.form.name":"اسمك","contact.form.email":"بريدك الإلكتروني","contact.form.message":"رسالتك","contact.form.send":"إرسال",
    "footer.copy":"© 2025 ميديكال سوبّورت. جميع الحقوق محفوظة.",
    "alert.loading":"جارٍ الإرسال…","alert.ok":"شكرًا لك! سنتواصل قريبًا.","alert.err":"حدث خطأ. حاول مرة أخرى."
  }
};

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

// ===== Sombra en header al hacer scroll =====
const header = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 4);
});

// ===== IntersectionObserver para revelar secciones/cards =====
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if (e.isIntersecting) e.target.classList.add("visible");
  });
},{threshold:0.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

// ===== Carrusel simple de testimonios =====
const track = document.getElementById("testiTrack");
const dotsWrap = document.getElementById("testiDots");
let testiIndex = 0;
if (track && dotsWrap){
  const total = track.children.length;
  for (let i=0;i<total;i++){
    const b=document.createElement("button");
    b.addEventListener("click", ()=>goTesti(i));
    dotsWrap.appendChild(b);
  }
  function goTesti(i){
    testiIndex = i;
    track.style.transform = `translateX(-${i*100}%)`;
    [...dotsWrap.children].forEach((d,idx)=>d.classList.toggle("active", idx===i));
  }
  goTesti(0);
  setInterval(()=>goTesti((testiIndex+1)%total), 4500);
}

// ===== Botón volver arriba =====
const topBtn = document.getElementById("backToTop");
window.addEventListener("scroll", ()=>{
  if (!topBtn) return;
  topBtn.classList.toggle("show", window.scrollY>300);
});
if (topBtn){
  topBtn.addEventListener("click", ()=>window.scrollTo({top:0,behavior:"smooth"}));
}
