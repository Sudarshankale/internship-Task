import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Modal } from "bootstrap";
import "./TodoForm.css";

const TodoForm = ({ setShowThankYou, setBlur, setData }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    languages: [],
    email: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "languages") {
      const updatedLanguages = checked
        ? [...formData.languages, value]
        : formData.languages.filter((lang) => lang !== value);
      setFormData({ ...formData, languages: updatedLanguages });
    } else if (name === "termsAccepted") {
      setFormData({ ...formData, termsAccepted: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      name: `${formData.firstName} ${formData.lastName}`,
      gender: formData.gender,
      language: formData.languages.join(", "),
      email: formData.email,
    };

    setData((prev) => [...prev, newEntry]);

    const modalEl = document.getElementById("formModal");
    if (modalEl) {
      const modalInstance = Modal.getOrCreateInstance(modalEl);
      modalInstance.hide();
    } else {
      console.warn("Modal element not found!");
    }

    setTimeout(() => {
      document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";

      setShowThankYou(true);
      setBlur(false);

      setFormData({
        firstName: "",
        lastName: "",
        gender: "",
        languages: [],
        email: "",
        termsAccepted: false,
      });
    }, 500);
  };

  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="formModal"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3 rounded-4">
            <div className="modal-body">
              <div className="upperdiv">
                <h4 className="fw-bold">Get Started Today!</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setBlur(false)}
                ></button>
              </div>
              <p className="text-muted">
                Fill in your details and take control of your tasks.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control pink-field"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control pink-field"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label d-block">Gender</label>
                  <div className="d-flex gap-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={handleChange}
                        id="male"
                        required
                      />
                      <label className="form-check-label" htmlFor="male">
                        Male
                      </label>
                    </div>
                    <div className="form-check pink-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={handleChange}
                        id="female"
                        required
                      />
                      <label className="form-check-label" htmlFor="female">
                        Female
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Language</label>
                  <div className="d-grid gap-2">
                    {["English", "Hindi", "Marathi"].map((lang) => (
                      <div className="form-check pink-checkbox" key={lang}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="languages"
                          value={lang}
                          checked={formData.languages.includes(lang)}
                          onChange={handleChange}
                          id={lang}
                        />
                        <label className="form-check-label" htmlFor={lang}>
                          {lang}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control pink-field"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="termsAccepted"
                    id="terms"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="terms">
                    I agree to the{" "}
                    <span className="text-danger">terms and conditions</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-danger w-100 rounded-3"
                  disabled={!formData.termsAccepted}
                  style={{ backgroundColor: "#ff3e54" }}
                >
                  Done
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoForm;
