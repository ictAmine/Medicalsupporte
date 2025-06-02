// ======================
// 5-Language Clinic Chatbot
// ======================

class ClinicChatbot {
  constructor() {
    this.languages = {
      en: "English",
      fr: "Français",
      nl: "Nederlands",
      ar: "العربية",
      es: "Español"
    };
    this.currentLanguage = 'en';
    this.apiEndpoint = 'https://your-deepseek-api.com/chat'; // Replace with your API
  }

  init() {
    this.renderLanguageButtons();
    this.setupChatUI();
  }

  renderLanguageButtons() {
    const container = document.createElement('div');
    container.className = 'chatbot-language-bar';
    
    Object.entries(this.languages).forEach(([code, name]) => {
      const btn = document.createElement('button');
      btn.textContent = `${name} (${code.toUpperCase()})`;
      btn.onclick = () => this.switchLanguage(code);
      container.appendChild(btn);
    });

    document.getElementById('chatbot').prepend(container);
  }

  switchLanguage(lang) {
    this.currentLanguage = lang;
    this.postMessage("SYSTEM: Language changed to " + lang, 'bot');
  }

  setupChatUI() {
    document.getElementById('chatbot-toggle').onclick = () => {
      const dialog = document.getElementById('chatbot-dialog');
      dialog.style.display = dialog.style.display === 'block' ? 'none' : 'block';
      this.postMessage(this.getGreeting(), 'bot');
    };

    document.getElementById('chatbot-input').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.handleUserInput();
    });
  }

  async handleUserInput() {
    const input = document.getElementById('chatbot-input');
    const userMessage = input.value.trim();
    if (!userMessage) return;

    this.postMessage(userMessage, 'user');
    input.value = '';

    // Call your API here
    const response = await this.queryAI(userMessage);
    this.postMessage(response, 'bot');
  }

  async queryAI(message) {
    try {
      const res = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({
          message,
          language: this.currentLanguage
        })
      });
      return await res.json().then(data => data.reply);
    } catch (error) {
      console.error("API Error:", error);
      return "Sorry, I'm having trouble connecting. Please try again later.";
    }
  }

  postMessage(text, sender) {
    const messagesDiv = document.getElementById('chatbot-messages');
    const msgElement = document.createElement('div');
    msgElement.className = `chat-msg ${sender}-msg`;
    msgElement.textContent = text;
    messagesDiv.appendChild(msgElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  getGreeting() {
    const greetings = {
      en: "Hello! How can I assist your clinic today?",
      fr: "Bonjour ! Comment puis-je aider votre clinique ?",
      nl: "Hallo! Hoe kan ik uw kliniek helpen?",
      ar: "مرحبًا! كيف يمكنني مساعدة عيادتك؟",
      es: "¡Hola! ¿Cómo puedo ayudar a tu clínica hoy?"
    };
    return greetings[this.currentLanguage];
  }
}

// Initialize
const chatbot = new ClinicChatbot();
chatbot.init();
