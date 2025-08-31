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
    "services.metaTitle":"Diensten — MedicalSupporte",
    "pricing.metaTitle":"Prijzen — MedicalSupporte",
    "contact.metaTitle":"Contact — MedicalSupporte",
    "why.metaTitle":"Waarom wij — MedicalSupporte",

    "nav.home":"Home","nav.services":"Diensten","nav.pricing":"Prijzen","nav.contact":"Contact","nav.why":"Waarom wij",

    "hero.title":"MedicalSupporte",
    "hero.subtitle":"Digitale oplossingen voor privéklinieken en ZZP’ers in Nederland.",
    "hero.cta":"Vraag een offerte aan",

    "services.title":"Onze Diensten",
    "services.subtitle":"Webs, chatbots en automatisatie die converteren.",
    "services.web.title":"Websites","services.web.desc":"Professionele websites die vertrouwen uitstralen.",
    "services.web.li1":"Schoon, betrouwbaar design",
    "services.web.li2":"Technische SEO basis",
    "services.web.li3":"Snel laden",
    "services.chat.title":"Chatbots","services.chat.desc":"Automatische assistenten die afspraken en vragen afhandelen.",
    "services.chat.li1":"FAQ’s beantwoord",
    "services.chat.li2":"Pre-afspraken en filters",
    "services.chat.li3":"Meertalig",
    "services.mail.title":"E-mail Automatisatie","services.mail.desc":"Directe bevestigingen en follow-ups.",
    "services.mail.li1":"Onmiddellijke bevestigingen",
    "services.mail.li2":"Herinneringen",
    "services.mail.li3":"Templates per taal",

    "pricing.title":"Prijzen","pricing.subtitle":"Transparantie vanaf het begin.",
    "pricing.tag.bestvalue":"Beste keuze",
    "pricing.basic.title":"Basic","pricing.basic.price":"€99","pricing.basic.desc":"1-pagina website",
    "pricing.basic.li1":"1-pagina","pricing.basic.li2":"Responsive","pricing.basic.li3":"Snelle oplevering",
    "pricing.pro.title":"Pro","pricing.pro.price":"€199","pricing.pro.desc":"Website + chatbot",
    "pricing.pro.li1":"Web + chatbot","pricing.pro.li2":"3 talen","pricing.pro.li3":"Automatische e-mail",
    "pricing.premium.title":"Premium","pricing.premium.price":"€299","pricing.premium.desc":"Alles-in-één",
    "pricing.premium.li1":"Alles-in-één","pricing.premium.li2":"5 talen + RTL","pricing.premium.li3":"Priority support",

    "why.title":"Waarom kiezen voor MedicalSupporte?","why.subtitle":"Snel, meertalig, en gericht op conversie.",
    "why.blocks.title":"Wat jou klanten oplevert",
    "why.fast.title":"Snel en licht","why.fast.desc":"Supersnelle sites, geoptimaliseerd voor mobiel en SEO.",
    "why.fast.li1":"Geoptimaliseerd voor PageSpeed","why.fast.li2":"Echt responsive","why.fast.li3":"Technische SEO",
    "why.i18n.title":"5 talen + RTL","why.i18n.desc":"NL/ES/EN/FR/AR met rechts-naar-links ondersteuning.",
    "why.i18n.li1":"NL/ES/EN/FR/AR","why.i18n.li2":"Correct RTL in Arabisch","why.i18n.li3":"CTA’s en velden vertaald",
    "why.forms.title":"Formulieren die converteren","why.forms.desc":"Netlify Forms met antispam en nette redirect.",
    "why.forms.li1":"Serverloos Netlify Forms","why.forms.li2":"Antispam + redirect","why.forms.li3":"Hidden: taal & URL",
    "why.process.title":"Eenvoudig proces","why.process.1":"Briefing in jouw taal","why.process.2":"Oplevering 48–72u","why.process.3":"Snelle iteraties","why.process.4":"Live & leads",
    "why.cta":"Ik wil beginnen",

    "testi.title":"Testimonia",
    "testi.1.text":"“Onze kliniek kreeg meer afspraken in de eerste week.”","testi.1.author":"— Privékliniek Delft",
    "testi.2.text":"“Chatbot in 3 talen en automatische e-mails, simpel en effectief.”","testi.2.author":"— Fysiotherapie Gouda",
    "testi.3.text":"“Snel, duidelijk en betrouwbaar design.”","testi.3.author":"— Tandarts Rotterdam",

    "faq.title":"Veelgestelde vragen",
    "faq.1.q":"Hoe lang duurt het?","faq.1.a":"Landing binnen 48–72 uur.",
    "faq.2.q":"Eerst één taal, later meer?","faq.2.a":"Ja, zonder herbouwen.",
    "faq.3.q":"Formulier zonder server?","faq.3.a":"Ja, Netlify Forms.",

    "contact.title":"Contacteer ons","contact.subtitle":"Vertel je casus. We reageren snel.",
    "contact.form.name":"Uw naam","contact.form.email":"Uw e-mail","contact.form.message":"Uw bericht","contact.form.send":"Verstuur",

    "footer.copy":"© 2025 MedicalSupporte. Alle rechten voorbehouden.",

    "cta.float.text":"Klaar voor meer patiënten?","cta.float.btn":"Offerte",
    "cta.toContact":"Ik wil een voorstel"
  },

  es: {
    "site.title":"MedicalSupporte",
    "services.metaTitle":"Servicios — MedicalSupporte",
    "pricing.metaTitle":"Precios — MedicalSupporte",
    "contact.metaTitle":"Contacto — MedicalSupporte",
    "why.metaTitle":"Por qué nosotros — MedicalSupporte",

    "nav.home":"Inicio","nav.services":"Servicios","nav.pricing":"Precios","nav.contact":"Contacto","nav.why":"¿Por qué nosotros?",

    "hero.title":"MedicalSupporte",
    "hero.subtitle":"Soluciones digitales para clínicas privadas y autónomos en Países Bajos.",
    "hero.cta":"Pide un presupuesto",

    "services.title":"Nuestros Servicios",
    "services.subtitle":"Webs, chatbots y automatización que convierten.",
    "services.web.title":"Sitios Web","services.web.desc":"Webs profesionales que inspiran confianza.",
    "services.web.li1":"Diseño limpio y fiable",
    "services.web.li2":"SEO técnico base",
    "services.web.li3":"Carga rápida",
    "services.chat.title":"Chatbots","services.chat.desc":"Asistentes automáticos para citas y preguntas.",
    "services.chat.li1":"Preguntas frecuentes",
    "services.chat.li2":"Pre-citas y filtros",
    "services.chat.li3":"Multi-idioma",
    "services.mail.title":"Automatización de Email","services.mail.desc":"Confirmaciones y seguimientos al instante.",
    "services.mail.li1":"Confirmaciones instantáneas",
    "services.mail.li2":"Recordatorios",
    "services.mail.li3":"Plantillas por idioma",

    "pricing.title":"Precios","pricing.subtitle":"Transparencia desde el principio.",
    "pricing.tag.bestvalue":"Mejor valor",
    "pricing.basic.title":"Básico","pricing.basic.price":"99€","pricing.basic.desc":"Sitio web de 1-página",
    "pricing.basic.li1":"1-página","pricing.basic.li2":"Responsive","pricing.basic.li3":"Entrega rápida",
    "pricing.pro.title":"Pro","pricing.pro.price":"199€","pricing.pro.desc":"Web + chatbot",
    "pricing.pro.li1":"Web + chatbot","pricing.pro.li2":"3 idiomas","pricing.pro.li3":"Email automático",
    "pricing.premium.title":"Premium","pricing.premium.price":"299€","pricing.premium.desc":"Todo-en-uno",
    "pricing.premium.li1":"Todo-en-uno","pricing.premium.li2":"5 idiomas + RTL","pricing.premium.li3":"Soporte prioritario",

    "why.title":"¿Por qué elegir MedicalSupporte?","why.subtitle":"Rápido, multilenguaje y orientado a conversión.",
    "why.blocks.title":"Lo que te hace ganar clientes",
    "why.fast.title":"Rápido y ligero","why.fast.desc":"Webs veloces, optimizadas para móvil y SEO.",
    "why.fast.li1":"PageSpeed optimizado","why.fast.li2":"Responsive real","why.fast.li3":"SEO técnico",
    "why.i18n.title":"5 idiomas + RTL","why.i18n.desc":"NL/ES/EN/FR/AR con soporte derecha-a-izquierda.",
    "why.i18n.li1":"NL/ES/EN/FR/AR","why.i18n.li2":"RTL correcto en árabe","why.i18n.li3":"CTA y campos traducidos",
    "why.forms.title":"Formularios que convierten","why.forms.desc":"Netlify Forms con antispam y redirección limpia.",
    "why.forms.li1":"Netlify Forms sin servidor","why.forms.li2":"Antispam + redirect","why.forms.li3":"Ocultos: idioma y URL",
    "why.process.title":"Proceso simple","why.process.1":"Brief en tu idioma","why.process.2":"Entrega 48–72h","why.process.3":"Ajustes rápidos","why.process.4":"Online y leads",
    "why.cta":"Quiero empezar",

    "testi.title":"Testimonios",
    "testi.1.text":"“Nuestra clínica recibió más citas la primera semana.”","testi.1.author":"— Clínica Privada Delft",
    "testi.2.text":"“Chatbot en 3 idiomas y emails automáticos, simple y efectivo.”","testi.2.author":"— Fisioterapia Gouda",
    "testi.3.text":"“Rápidos, claros y con diseño que inspira confianza.”","testi.3.author":"— Tandarts Rotterdam",

    "faq.title":"Preguntas frecuentes",
    "faq.1.q":"¿Cuánto tardan?","faq.1.a":"Landing básica en 48–72h.",
    "faq.2.q":"¿Un idioma y luego más?","faq.2.a":"Sí, sin rehacer.",
    "faq.3.q":"¿Formulario sin servidor?","faq.3.a":"Sí, Netlify Forms.",

    "contact.title":"Contáctanos","contact.subtitle":"Cuéntanos tu caso. Respondemos rápido.",
    "contact.form.name":"Tu nombre","contact.form.email":"Tu correo","contact.form.message":"Tu mensaje","contact.form.send":"Enviar",

    "footer.copy":"© 2025 MedicalSupporte. Todos los derechos reservados.",

    "cta.float.text":"¿Listo para más pacientes?","cta.float.btn":"Solicitar oferta",
    "cta.toContact":"Quiero una propuesta"
  },

  en: {
    "site.title":"MedicalSupporte",
    "services.metaTitle":"Services — MedicalSupporte",
    "pricing.metaTitle":"Pricing — MedicalSupporte",
    "contact.metaTitle":"Contact — MedicalSupporte",
    "why.metaTitle":"Why us — MedicalSupporte",

    "nav.home":"Home","nav.services":"Services","nav.pricing":"Pricing","nav.contact":"Contact","nav.why":"Why us",

    "hero.title":"MedicalSupporte",
    "hero.subtitle":"Digital solutions for private clinics and freelancers in the Netherlands.",
    "hero.cta":"Request a quote",

    "services.title":"Our Services",
    "services.subtitle":"Websites, chatbots and automation that convert.",
    "services.web.title":"Websites","services.web.desc":"Professional websites that inspire trust.",
    "services.web.li1":"Clean, reliable design",
    "services.web.li2":"Technical SEO basics",
    "services.web.li3":"Fast loading",
    "services.chat.title":"Chatbots","services.chat.desc":"Automated assistants for appointments and FAQs.",
    "services.chat.li1":"FAQs handled",
    "services.chat.li2":"Pre-booking & filters",
    "services.chat.li3":"Multi-language",
    "services.mail.title":"Email Automation","services.mail.desc":"Instant confirmations and follow-ups.",
    "services.mail.li1":"Instant confirmations",
    "services.mail.li2":"Reminders",
    "services.mail.li3":"Language templates",

    "pricing.title":"Pricing","pricing.subtitle":"Transparency from the start.",
    "pricing.tag.bestvalue":"Best value",
    "pricing.basic.title":"Basic","pricing.basic.price":"€99","pricing.basic.desc":"One-page website",
    "pricing.basic.li1":"One-page","pricing.basic.li2":"Responsive","pricing.basic.li3":"Quick delivery",
    "pricing.pro.title":"Pro","pricing.pro.price":"€199","pricing.pro.desc":"Website + chatbot",
    "pricing.pro.li1":"Web + chatbot","pricing.pro.li2":"3 languages","pricing.pro.li3":"Auto email",
    "pricing.premium.title":"Premium","pricing.premium.price":"€299","pricing.premium.desc":"All-in-one",
    "pricing.premium.li1":"All-in-one","pricing.premium.li2":"5 languages + RTL","pricing.premium.li3":"Priority support",

    "why.title":"Why choose MedicalSupporte?","why.subtitle":"Fast, multilingual, conversion-driven.",
    "why.blocks.title":"What actually wins clients",
    "why.fast.title":"Fast & lightweight","why.fast.desc":"Blazing sites, optimized for mobile and SEO.",
    "why.fast.li1":"PageSpeed-friendly","why.fast.li2":"True responsive","why.fast.li3":"Technical SEO",
    "why.i18n.title":"5 languages + RTL","why.i18n.desc":"NL/ES/EN/FR/AR with right-to-left support.",
    "why.i18n.li1":"NL/ES/EN/FR/AR","why.i18n.li2":"Correct RTL in Arabic","why.i18n.li3":"Translated CTAs & fields",
    "why.forms.title":"Forms that convert","why.forms.desc":"Netlify Forms with antispam and clean redirect.",
    "why.forms.li1":"Serverless Netlify Forms","why.forms.li2":"Antispam + redirect","why.forms.li3":"Hidden: language & URL",
    "why.process.title":"Simple process","why.process.1":"Brief in your language","why.process.2":"Delivery 48–72h","why.process.3":"Quick iterations","why.process.4":"Go live & get leads",
    "why.cta":"Let’s start",

    "testi.title":"Testimonials",
    "testi.1.text":"“More bookings in our first week.”","testi.1.author":"— Private Clinic Delft",
    "testi.2.text":"“3-language chatbot and automated emails, simple and effective.”","testi.2.author":"— Physio Gouda",
    "testi.3.text":"“Fast, clear, trust-building design.”","testi.3.author":"— Dentist Rotterdam",

    "faq.title":"FAQ",
    "faq.1.q":"How long?","faq.1.a":"Landing in 48–72h.",
    "faq.2.q":"Start with one language?","faq.2.a":"Yes, no rebuild.",
    "faq.3.q":"Form without server?","faq.3.a":"Yes, Netlify Forms.",

    "contact.title":"Contact us","contact.subtitle":"Tell us your case. We reply fast.",
    "contact.form.name":"Your name","contact.form.email":"Your email","contact.form.message":"Your message","contact.form.send":"Send",

    "footer.copy":"© 2025 MedicalSupporte. All rights reserved.",

    "cta.float.text":"Ready for more patients?","cta.float.btn":"Quote",
    "cta.toContact":"I want a proposal"
  },

  fr: {
    "site.title":"MedicalSupporte",
    "services.metaTitle":"Services — MedicalSupporte",
    "pricing.metaTitle":"Tarifs — MedicalSupporte",
    "contact.metaTitle":"Contact — MedicalSupporte",
    "why.metaTitle":"Pourquoi nous — MedicalSupporte",

    "nav.home":"Accueil","nav.services":"Services","nav.pricing":"Tarifs","nav.contact":"Contact","nav.why":"Pourquoi nous",

    "hero.title":"MedicalSupporte",
    "hero.subtitle":"Solutions numériques pour cliniques privées et indépendants aux Pays-Bas.",
    "hero.cta":"Demander un devis",

    "services.title":"Nos Services",
    "services.subtitle":"Sites, chatbots et automatisation qui convertissent.",
    "services.web.title":"Sites web","services.web.desc":"Sites professionnels qui inspirent confiance.",
    "services.web.li1":"Design propre et fiable",
    "services.web.li2":"SEO technique de base",
    "services.web.li3":"Chargement rapide",
    "services.chat.title":"Chatbots","services.chat.desc":"Assistants automatiques pour rendez-vous et questions.",
    "services.chat.li1":"FAQ traitées",
    "services.chat.li2":"Pré-rdv & filtres",
    "services.chat.li3":"Multilingue",
    "services.mail.title":"Automatisation d’e-mail","services.mail.desc":"Confirmations et suivis instantanés.",
    "services.mail.li1":"Confirmations instantanées",
    "services.mail.li2":"Rappels",
    "services.mail.li3":"Modèles par langue",

    "pricing.title":"Tarifs","pricing.subtitle":"Transparence dès le départ.",
    "pricing.tag.bestvalue":"Meilleur choix",
    "pricing.basic.title":"Basic","pricing.basic.price":"99€","pricing.basic.desc":"Site une page",
    "pricing.basic.li1":"Une page","pricing.basic.li2":"Responsive","pricing.basic.li3":"Livraison rapide",
    "pricing.pro.title":"Pro","pricing.pro.price":"199€","pricing.pro.desc":"Site + chatbot",
    "pricing.pro.li1":"Site + chatbot","pricing.pro.li2":"3 langues","pricing.pro.li3":"E-mail auto",
    "pricing.premium.title":"Premium","pricing.premium.price":"299€","pricing.premium.desc":"Tout-en-un",
    "pricing.premium.li1":"Tout-en-un","pricing.premium.li2":"5 langues + RTL","pricing.premium.li3":"Support prioritaire",

    "why.title":"Pourquoi choisir MedicalSupporte ?","why.subtitle":"Rapide, multilingue, orienté conversion.",
    "why.blocks.title":"Ce qui vous fait gagner des clients",
    "why.fast.title":"Rapide et léger","why.fast.desc":"Sites rapides, optimisés mobile et SEO.",
    "why.fast.li1":"PageSpeed optimisé","why.fast.li2":"Vrai responsive","why.fast.li3":"SEO technique",
    "why.i18n.title":"5 langues + RTL","why.i18n.desc":"NL/ES/EN/FR/AR avec prise en charge RTL.",
    "why.i18n.li1":"NL/ES/EN/FR/AR","why.i18n.li2":"RTL correct en arabe","why.i18n.li3":"CTA et champs traduits",
    "why.forms.title":"Formulaires qui convertissent","why.forms.desc":"Netlify Forms avec antispam et redirection propre.",
    "why.forms.li1":"Netlify Forms sans serveur","why.forms.li2":"Antispam + redirect","why.forms.li3":"Cachés : langue & URL",
    "why.process.title":"Processus simple","why.process.1":"Brief dans votre langue","why.process.2":"Livraison 48–72h","why.process.3":"Itérations rapides","why.process.4":"Mise en ligne & leads",
    "why.cta":"Je commence",

    "testi.title":"Témoignages",
    "testi.1.text":"« Plus de rendez-vous dès la première semaine. »","testi.1.author":"— Clinique privée Delft",
    "testi.2.text":"« Chatbot en 3 langues & e-mails auto, simple et efficace. »","testi.2.author":"— Kiné Gouda",
    "testi.3.text":"« Rapides, clairs et rassurants. »","testi.3.author":"— Dentiste Rotterdam",

    "faq.title":"FAQ",
    "faq.1.q":"Combien de temps ?","faq.1.a":"Landing en 48–72h.",
    "faq.2.q":"Une langue puis plus ?","faq.2.a":"Oui, sans rebuild.",
    "faq.3.q":"Formulaire sans serveur ?","faq.3.a":"Oui, Netlify Forms.",

    "contact.title":"Contactez-nous","contact.subtitle":"Dites-nous votre besoin. Réponse rapide.",
    "contact.form.name":"Votre nom","contact.form.email":"Votre e-mail","contact.form.message":"Votre message","contact.form.send":"Envoyer",

    "footer.copy":"© 2025 MedicalSupporte. Tous droits réservés.",

    "cta.float.text":"Prêt pour plus de patients ?","cta.float.btn":"Devis",
    "cta.toContact":"Je veux une proposition"
  },

  ar: {
    "site.title":"ميديكال سوبّورت",
    "services.metaTitle":"الخدمات — ميديكال سوبّورت",
    "pricing.metaTitle":"الأسعار — ميديكال سوبّورت",
    "contact.metaTitle":"تواصل — ميديكال سوبّورت",
    "why.metaTitle":"لماذا نحن — ميديكال سوبّورت",

    "nav.home":"الرئيسية","nav.services":"الخدمات","nav.pricing":"الأسعار","nav.contact":"تواصل","nav.why":"لماذا نحن",

    "hero.title":"ميديكال سوبّورت",
    "hero.subtitle":"حلول رقمية للعيادات الخاصة والعاملين لحسابهم الخاص في هولندا.",
    "hero.cta":"اطلب عرض سعر",

    "services.title":"خدماتنا",
    "services.subtitle":"مواقع وروبوتات وأتمتة تحقق التحويل.",
    "services.web.title":"مواقع إلكترونية","services.web.desc":"مواقع احترافية تبعث على الثقة.",
    "services.web.li1":"تصميم نظيف وموثوق",
    "services.web.li2":"أساسيات SEO تقنية",
    "services.web.li3":"سرعة تحميل عالية",
    "services.chat.title":"روبوتات محادثة","services.chat.desc":"مساعدون آليون للمواعيد والأسئلة.",
    "services.chat.li1":"أسئلة شائعة",
    "services.chat.li2":"حجز أولي وفلاتر",
    "services.chat.li3":"متعدد اللغات",
    "services.mail.title":"أتمتة البريد","services.mail.desc":"تأكيدات فورية ومتابعات.",
    "services.mail.li1":"تأكيدات فورية",
    "services.mail.li2":"تذكيرات",
    "services.mail.li3":"قوالب حسب اللغة",

    "pricing.title":"الأسعار","pricing.subtitle":"شفافية منذ البداية.",
    "pricing.tag.bestvalue":"أفضل اختيار",
    "pricing.basic.title":"أساسي","pricing.basic.price":"€99","pricing.basic.desc":"صفحة واحدة",
    "pricing.basic.li1":"صفحة واحدة","pricing.basic.li2":"متجاوب","pricing.basic.li3":"تسليم سريع",
    "pricing.pro.title":"احترافي","pricing.pro.price":"€199","pricing.pro.desc":"موقع + روبوت",
    "pricing.pro.li1":"موقع + روبوت","pricing.pro.li2":"3 لغات","pricing.pro.li3":"بريد تلقائي",
    "pricing.premium.title":"ممتاز","pricing.premium.price":"€299","pricing.premium.desc":"حل متكامل",
    "pricing.premium.li1":"متكامل","pricing.premium.li2":"5 لغات + RTL","pricing.premium.li3":"دعم أولوية",

    "why.title":"لماذا نختار ميديكال سوبّورت؟","why.subtitle":"سريع ومتعدد اللغات ويركز على التحويل.",
    "why.blocks.title":"ما يجلب لك العملاء",
    "why.fast.title":"سريع وخفيف","why.fast.desc":"مواقع سريعة مُحسّنة للهاتف ومحركات البحث.",
    "why.fast.li1":"محسّن لـ PageSpeed","why.fast.li2":"استجابة حقيقية","why.fast.li3":"SEO تقني",
    "why.i18n.title":"٥ لغات + RTL","why.i18n.desc":"هولندي/إسباني/إنجليزي/فرنسي/عربي مع دعم RTL.",
    "why.i18n.li1":"NL/ES/EN/FR/AR","why.i18n.li2":"RTL صحيح بالعربية","why.i18n.li3":"نداءات وحقول مترجمة",
    "why.forms.title":"نماذج فعّالة","why.forms.desc":"نماذج Netlify مع مضاد للبريد المزعج وإعادة توجيه نظيفة.",
    "why.forms.li1":"نماذج Netlify بلا خادم","why.forms.li2":"مكافحة السبام + تحويل","why.forms.li3":"مخفية: اللغة والرابط",
    "why.process.title":"عملية بسيطة","why.process.1":"موجز بلغتك","why.process.2":"تسليم ٤٨–٧٢ ساعة","why.process.3":"تعديلات سريعة","why.process.4":"نشر وتحويلات",
    "why.cta":"أريد البدء",

    "testi.title":"آراء العملاء",
    "testi.1.text":"“حصلنا على حجوزات أكثر في الأسبوع الأول.”","testi.1.author":"— عيادة خاصة دلفت",
    "testi.2.text":"“روبوت بثلاث لغات ورسائل تلقائية، بسيط وفعّال.”","testi.2.author":"— علاج طبيعي خاوْدا",
    "testi.3.text":"“سريعون وواضحون وتصميم موثوق.”","testi.3.author":"— طبيب أسنان روتردام",

    "faq.title":"أسئلة شائعة",
    "faq.1.q":"كم يستغرق؟","faq.1.a":"صفحة خلال ٤٨–٧٢ ساعة.",
    "faq.2.q":"لغة واحدة ثم المزيد؟","faq.2.a":"نعم، بدون إعادة بناء.",
    "faq.3.q":"نموذج بدون خادم؟","faq.3.a":"نعم، Netlify Forms.",

    "contact.title":"اتصل بنا","contact.subtitle":"احكِ لنا عن حالتك. نرد بسرعة.",
    "contact.form.name":"اسمك","contact.form.email":"بريدك الإلكتروني","contact.form.message":"رسالتك","contact.form.send":"إرسال",

    "footer.copy":"© 2025 ميديكال سوبّورت. جميع الحقوق محفوظة.",

    "cta.float.text":"جاهز لمزيد من المرضى؟","cta.float.btn":"عرض",
    "cta.toContact":"أريد عرضًا"
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

  // Título de página inteligente
  const metaCandidates = ["services.metaTitle","pricing.metaTitle","contact.metaTitle","why.metaTitle","site.title"];
  for (const key of metaCandidates){
    if (dict[key]){ document.title = dict[key]; break; }
  }

  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  document.querySelectorAll(".lang-btn").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang === lang);
    b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
  });

  const lf = document.getElementById("langField");
  if (lf) lf.value = lang;

  const app = document.getElementById("app");
  if (app){ app.classList.remove("fade-in"); void app.offsetWidth; app.classList.add("fade-in"); }
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

// Header sombra
const header = document.getElementById("siteHeader");
window.addEventListener("scroll", () => { if (header) header.classList.toggle("scrolled", window.scrollY > 4); });

// Reveal
const io = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if (e.isIntersecting) e.target.classList.add("visible"); }); },{threshold:0.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

// Testimonios (solo si existen en la página)
const track = document.getElementById("testiTrack");
const dotsWrap = document.getElementById("testiDots");
let testiIndex = 0;
if (track && dotsWrap){
  const total = track.children.length;
  for (let i=0;i<total;i++){ const b=document.createElement("button"); b.addEventListener("click", ()=>goTesti(i)); dotsWrap.appendChild(b); }
  function goTesti(i){ testiIndex = i; track.style.transform = `translateX(-${i*100}%)`; [...dotsWrap.children].forEach((d,idx)=>d.classList.toggle("active", idx===i)); }
  goTesti(0);
  setInterval(()=>goTesti((testiIndex+1)%total), 4500);
}

// Back to top
const topBtn = document.getElementById("backToTop");
window.addEventListener("scroll", ()=>{ if (topBtn) topBtn.classList.toggle("show", window.scrollY>300); });
if (topBtn){ topBtn.addEventListener("click", ()=>window.scrollTo({top:0,behavior:"smooth"})); }

// Floating CTA (si existe)
const fCta = document.getElementById("floatingCTA");
if (fCta){
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => { fCta.style.opacity = entry.isIntersecting ? "0" : "1"; });
  }, {rootMargin: "0px 0px -40% 0px"});
  const footer = document.querySelector("footer");
  if (footer) observer.observe(footer);
}
// Marcar activo en el menú según URL
(function(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a=>{
    const href = a.getAttribute("href");
    if (!href) return;
    const page = href.split("?")[0].split("#")[0];
    a.classList.toggle("active", page === path || (path==="index.html" && href.includes("#home")));
  });
})();
