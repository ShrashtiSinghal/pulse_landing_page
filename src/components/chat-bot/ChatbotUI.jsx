// src/components/chatbot/ChatbotUI.jsx
import React, { useState, useEffect, useRef } from "react";
import darkeyeLogo from "../../assets/images/culinda_logo.png";
import monitorImg from "../../assets/images/monitor.png";
import contactImg from "../../assets/images/contact.png";
import arrpwDown from '../../assets/images/arrow-down.svg';
import mascotLogo from '../../assets/images/mascot-logo.png'

import "./ChatbotUI.css";

const ChatbotUI = ({ onClose, submitMeetingUrl }) => {
  const [messages, setMessages] = useState([]);
  const [activeOptionsIndex, setActiveOptionsIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    code: "+91",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({ email: "", code: "", phone: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    initChat();
    // scroll to bottom whenever messages change
    const id = setTimeout(() => scrollToBottom(), 50);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  const initChat = () => {
    const initial = [
      {
        sender: "bot",
        type: "text",
        content:
          "Hi there! Welcome to Pulse - Real-Time Network Traffic Monitoring & Analytics platform. I can help you with:",
      },
      {
        sender: "bot",
        type: "options",
        options: [
          { text: "Know More About Pulse", img: darkeyeLogo },
          { text: "Book a Demo", img: monitorImg },
          { text: "Contact Team", img: contactImg },
        ],
      },
    ];
    setMessages(initial);
    setActiveOptionsIndex(initial.length - 1);
  };

  const onOptionSelect = (option, index) => {
    if (index !== activeOptionsIndex) return;

    setActiveOptionsIndex(null);

    // push user "message"
    setMessages((prev) => [
      ...prev,
      { sender: "user", type: "text", content: option.text },
    ]);

    setActiveOptionsIndex(null);

    if (option.text === "Know More About Pulse") {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          type: "text",
          content: `
            <div>
              <img src="${darkeyeLogo}" alt="DarkEye Logo" style="max-width: 50px;padding: 10px;padding-top: 0;"/>
              <p>Pulse helps organizations make smarter security decisions through:</p><br>
              <ul>
                <li>🌐 Asset & Traffic Visibility</li>
                <li>🛡️ Exposure & Anomaly Detection</li>
                <li>🔎 Threat Hunting & Investigation</li>
                <li>📈 Utilization Intelligence</li>
                <li>⚡ Analyst-First UX</li>
                <li>🧑‍💻 Identity & Org Controls</li>
                <li>🔒 Integration Ecosystem</li>
              </ul><br>
              <p>Would you like to see all features or book a quick demo?</p>
            </div>
          `,
        },
        {
          sender: "bot",
          type: "options",
          options: [{ text: "Book a Demo", img: monitorImg }],
        },
      ]);
      // set active options index to the newly added options message
      setActiveOptionsIndex((prevIndex) => (messages.length + 2));
      return;
    }

    if (option.text === "Book a Demo" || option.text === "Contact Team") {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          type: "form",
          content: "Please fill out the form below to book your demo.",
        },
      ]);
    }
  };

  // basic phone-only input handler
  const allowOnlyPhone = (e) => {
    const char = String.fromCharCode(e.which || e.keyCode || 0);
    if (!/[0-9]/.test(char)) {
      e.preventDefault();
    }
  };

  const validateForm = () => {
    const errs = { email: "", code: "", phone: "" };
    let isValid = true;


    // Name check
    if (!formData.name.trim()) {
      isValid = false;
    }

    // Email check
    const emailRegex = /^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(formData.email || "")) {
      errs.email = "Please enter a valid email address";
      isValid = false;
    }


    // Code check
    const codeRegex = /^\+\d{1,3}$/;
    if (!codeRegex.test(formData.code || "")) {
      errs.code = "Invalid country code (e.g., +1, +91)";
      isValid = false;
    }

    // Phone check
    const phoneDigits = (formData.phone || "").replace(/\D/g, "");
    if (phoneDigits.length < 6) {
      errs.phone = "Invalid phone number";
      isValid = false;
    }

    return { ok: isValid, errs };
  };

  const isFormValid = () => {
    const emailRegex = /^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const codeRegex = /^\+\d{1,3}$/;
    const phoneDigits = (formData.phone || "").replace(/\D/g, "");

    return (
      formData.name.trim() !== "" &&
      emailRegex.test(formData.email || "") &&
      codeRegex.test(formData.code || "") &&
      phoneDigits.length >= 6
    );
  };

  const submitDetails = async (e) => {
    e.preventDefault();
    if (formSubmitted || isLoading) return;
    const check = validateForm();
    if (!check.ok) {
      setErrors(check.errs);
      return;
    }
    setErrors({ email: "", code: "", phone: "" });
    setIsLoading(true);

    const userData = {
      name: formData.name,
      email: formData.email,
      phone: `${formData.code}${formData.phone}`,
      company: formData.company,
      message: formData.message,
      wants_demo: true,
    };

    try {
      const response = await fetch("https://darkeyescan.com:8841/enquiry?source=Pulse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const res = await response.json();

      if (res?.status === "success" || res?.success) {
        setFormSubmitted(true);
        pushSuccessMessages(userData);
      } else {
        pushBotText("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      pushBotText("Unable to submit at the moment. Please try again later.");
    } finally {
      setIsLoading(false);
    }

  };

  const pushSuccessMessages = (userData) => {
    const userDetails = `
      <p><b>Your Details:</b></p>
      <p>Name: ${userData.name}</p>
      <p>Email: ${userData.email}</p>
      <p>Phone: ${userData.phone}</p>
      ${userData.company ? `<p>Organization: ${userData.company}</p>` : ""}
      ${userData.message ? `<p>Message: ${userData.message}</p>` : ""}
    `;
    setMessages((prev) => [
      ...prev,
      { sender: "user", type: "text", content: userDetails },
      {
        sender: "bot",
        type: "text",
        content: `✅ Thank you, <b>${userData.name}</b>! Our team will contact you at <b>${userData.email}</b> to schedule your demo.`,
      },
    ]);
  };

  const pushBotText = (text) => {
    setMessages((prev) => [...prev, { sender: "bot", type: "text", content: text }]);
  };

  return (
    <div className="chat-container" role="dialog" aria-label="Chatbot">
      <div className="chat-header" onClick={onClose}>
        <div className="bird-wrapper">
          <img
            src={mascotLogo}
            alt="DarkEye Bird"
            className="chat-header-logo"
          />
        </div>
        <img src={arrpwDown} alt="Arrow Down" className="chat-close-btn" />
      </div>

      <div className="chat-box" ref={scrollRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`message-wrapper ${msg.sender}`}>
            {msg.type === "text" && (
              <div
                className="message"
                // we render HTML similar to Angular sanitizer approach - ensure content is safe
                dangerouslySetInnerHTML={{ __html: msg.content }}
              />
            )}

            {msg.type === "options" && msg.options && (
              <div className="options">
                {msg.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => onOptionSelect(opt, i)}
                    disabled={activeOptionsIndex !== i}
                    className="option-button"
                  >
                    {opt.img && <img src={opt.img} alt={opt.text} className="option-img" />}
                    <span>{opt.text}</span>
                  </button>
                ))}
              </div>
            )}

            {msg.type === "form" && (
              <form className="chat-form" onSubmit={submitDetails} style={{ opacity: formSubmitted ? 0.6 : 1 }}>
                <p>Great! Let's get your details so our team can reach out to you.</p>

                <label>Name*</label>
                <input name="name" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required disabled={formSubmitted} />

                <label>Email*</label>
                <input name="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required disabled={formSubmitted} />
                {errors.email && <small className="error">{errors.email}</small>}

                <label>Phone*</label>
                <div className="phone-row">
                  <input name="code" type="text" value={formData.code} onChange={(e) => setFormData({ ...formData, code: e.target.value })} style={{ width: 70 }} disabled={formSubmitted} />
                  <input name="phone" type="text" value={formData.phone} onKeyPress={allowOnlyPhone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required disabled={formSubmitted} />
                </div>
                {errors.code && <small className="error">{errors.code}</small>}
                {errors.phone && <small className="error">{errors.phone}</small>}

                <label>Organization</label>
                <input name="company" type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} disabled={formSubmitted} />

                <label>Message</label>
                <textarea name="message" rows="4" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} disabled={formSubmitted} />

                <div className="submit-details">
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={!isFormValid() || isLoading || formSubmitted}
                  >
                    {isLoading ? "Submitting..." : formSubmitted ? "Submitted" : "Submit"}
                  </button>

                </div>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatbotUI;
