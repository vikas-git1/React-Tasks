import React, { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const validate = () => {
    if (!formData.userName.trim()) return "User Name is required";
    if (!formData.userEmail.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.userEmail)) return "Enter Proper Email";
    if (!formData.userPassword.trim()) return "Password is required";
    if (formData.userPassword.length < 6)
      return "Password must be atleast 6 character";
    return null;
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let errorMessage = validate();
    if (!errorMessage) {
      alert("Form data saved successfully");
      setFormData({ userName: "", userEmail: "", userPassword: "" });
      setSubmitted(true);
    } else {
      alert(errorMessage);
      setSubmitted(false);
    }
  };

  return (
    <form
      action=""
      className="border-2 border-amber-50 rounded-2xl h-[50vh] w-[50vw] m-auto p-10 flex flex-col justify-around items-center text-white"
      onSubmit={handleSubmit}
      noValidate
    >
      <input
        type="text"
        placeholder="Enter your Name"
        value={formData.userName}
        name="userName"
        onChange={handleChange}
        required
        className="border-2 border-amber-50 outline-none px-10 py-2 rounded-2xl"
      />
      <input
        type="email"
        placeholder="Enter Email"
        value={formData.userEmail}
        name="userEmail"
        onChange={handleChange}
        required
        className="border-2 border-amber-50 outline-none px-10 py-2 rounded-2xl"
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={formData.userPassword}
        name="userPassword"
        onChange={handleChange}
        required
        className="border-2 border-amber-50 outline-none px-10 py-2 rounded-2xl"
      />
      <button
        type="submit"
        className="border-2 border-amber-50 outline-none px-10 py-2 rounded-2xl"
      >
        Submit
      </button>
      {submitted && <p>Form Submitted Successfully</p>}
    </form>
  );
};

export default FormValidation;
