import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div style={{ padding: "20px", 
      fontFamily: "Arial, sans-serif", color: "#333", lineHeight: "1.6", border: "1px solid #ccc", backgroundColor: "#f9f9f9", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      
    }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0",
            backgroundColor: "#fff", border: "1px solid #ccc", borderRadius: "4px", padding: "10px", width: "100%" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0",
            backgroundColor: "#fff", border: "1px solid #ccc", borderRadius: "4px", padding: "10px", width: "100%"
           }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0",
            backgroundColor: "#fff", border: "1px solid #ccc", borderRadius: "4px", padding: "10px", width: "100%", height: "100px" 
           }}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
<footer>
  <p
    style={{
      textAlign: "center",
      padding: "10px",
      backgroundColor: "#282c34",
      color: "#fff",
    }}
  >
    &copy; 2025 MyWebsite. All rights reserved.
  </p>
</footer>;

export default Contact;
