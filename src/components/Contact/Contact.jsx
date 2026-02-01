import AnimatedLetters from "../Animation/Animation";
import "./Contact.scss";
import { toast } from "react-hot-toast";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import EncryptButton from "../EncryptButton/EncryptButton";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [isAvailable, setIsAvailable] = useState(true); // Set to false when not available
  const refForm = useRef();
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters";
        } else if (value.trim().length > 50) {
          error = "Name must be less than 50 characters";
        } else if (!/^[a-zA-Z\s'-]+$/.test(value)) {
          error =
            "Name can only contain letters, spaces, hyphens, and apostrophes";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (
          !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
        ) {
          error = "Please enter a valid email address";
        }
        break;

      case "subject":
        if (!value.trim()) {
          error = "Subject is required";
        } else if (value.trim().length < 5) {
          error = "Subject must be at least 5 characters";
        } else if (value.trim().length > 100) {
          error = "Subject must be less than 100 characters";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "Message is required";
        } else if (value.trim().length < 20) {
          error = "Message must be at least 20 characters";
        } else if (value.trim().length > 5000) {
          error = "Message must be less than 5000 characters";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix all errors before submitting");
      return;
    }

    toast.promise(
      emailjs.sendForm(
        "service_907am0x",
        "template_mzvsyui",
        refForm.current,
        "48deWTLr8fCnftS87",
      ),
      {
        loading: "Sending message...",
        success: "Message sent successfully!",
        error: "Message failed to send, please try again",
      },
    );

    // Reset form
    refForm.current.reset();
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setTouched({});
  };
  return (
    <div>
      <div className="container contact-page">
        <div className="text-zone">
          <div className="availability-status">
            <div
              className={`status-indicator ${isAvailable ? "available" : "unavailable"}`}
            >
              <span className="status-dot"></span>
              <span className="status-text">
                {isAvailable
                  ? "Available for opportunities"
                  : "Currently unavailable"}
              </span>
            </div>
          </div>
          <h1>
            <AnimatedLetters
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
  I am a full stack developer seeking new roles and project opportunities.
  I focus on building scalable, production ready applications.
  If you are hiring or want to discuss a role, contact me using the form below.
</p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={handleSubmit}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name && touched.name ? "error" : ""}
                    required
                  />
                  {errors.name && touched.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </li>
                <li className="half">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? "error" : ""}
                    required
                  />
                  {errors.email && touched.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.subject && touched.subject ? "error" : ""}
                    required
                  />
                  {errors.subject && touched.subject && (
                    <span className="error-message">{errors.subject}</span>
                  )}
                </li>
                <li>
                  <div className="textarea-wrapper">
                    <textarea
                      placeholder="Message (minimum 20 characters)"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.message && touched.message ? "error" : ""
                      }
                      required
                    />
                    <span
                      className={`char-count-overlay ${formData.message.length > 5000 ? "error" : ""}`}
                    >
                      {formData.message.length}/5000
                    </span>
                  </div>
                  {errors.message && touched.message && (
                    <span className="error-message">{errors.message}</span>
                  )}
                </li>
                <li>
                  <EncryptButton
                    text="SEND"
                    color="indigo"
                    onClick={handleSubmit}
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-wrap">
          <div className="info-map">
            Souvik Basak
            <br />
            India,
            <br />
            Kolkata, West Bengal,
            <br />
            PIN - 700061
            <span>
              <a href="mailto: souvik.basak2404@gmail.com">
                souvik.basak2404@gmail.com
              </a>
            </span>
          </div>
          <MapContainer
            center={[22.57503914240553, 88.36520081358563]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[22.57503914240553, 88.36520081358563]}>
              <Popup>
                Souvik Lives Here <br /> Come over for a cup of coffee :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
