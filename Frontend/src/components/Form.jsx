import { useState } from "react";

function Form() {
  const [form, setForm] = useState({ name: "", email: "", password: "", department: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.department) {
      setError("Please fill all fields");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    alert("User Registered!");
    setForm({ name: "", email: "", password: "", department: "" });
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      {["name", "email", "password"].map((field) => (
        <input
          key={field}
          type={field === "password" ? "password" : "text"}
          name={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={form[field]}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      ))}

      <select name="department" onChange={handleChange} value={form.department} className="w-full p-2 border rounded">
        <option value="">Select Department</option>
        <option value="Developer">Developer</option>
        <option value="Designing">Designing</option>
        <option value="Sales & Marketing">Sales & Marketing</option>
        <option value="HR">HR</option>
      </select>

      {error && <p className="text-red-500">{error}</p>}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
    </form>
  );
}

export default Form;
