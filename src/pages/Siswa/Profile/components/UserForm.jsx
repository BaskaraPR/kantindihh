import React, { useState } from "react";

function UserForm() {
  // State for form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    address: "",
    phone: "",
  });

  // State for form validation
  const [errors, setErrors] = useState({});

  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number should contain only digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Here you would normally send the data to your backend
      console.log("Form submitted successfully:", formData);

      setSubmitStatus({
        success: true,
        message: "Profile updated successfully!",
      });

      // Optional: Reset form after successful submission
      // setFormData({ username: "", email: "", address: "", phone: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        success: false,
        message: "Failed to update profile. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle cancel button
  const handleCancel = () => {
    // Reset form data to initial values or fetch from API
    setFormData({
      username: "",
      email: "",
      address: "",
      phone: "",
    });
    setErrors({});
    setSubmitStatus(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-3xl mx-auto border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        {/* Header */}
        <div className="bg-green-500 p-4 text-white text-xl font-semibold">
          Data Diri
        </div>

        <div className="p-6 flex flex-col md:flex-row gap-8">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-40 h-40 rounded-full border-2 border-black overflow-hidden flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center bg-white">
                <div className="w-32 h-32 rounded-full bg-black relative">
                  <div className="w-16 h-16 rounded-full bg-white absolute top-4 left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-24 h-12 bg-black absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-t-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="block font-medium">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username Anda"
                  className={`w-full p-2 border rounded-md pl-3 pr-10 ${
                    errors.username ? "border-red-500" : ""
                  }`}
                  value={formData.username}
                  onChange={handleChange}
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                {errors.username && (
                  <p className="text-red-500 text-xs mt-1">{errors.username}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Anda"
                  className={`w-full p-2 border rounded-md pl-3 pr-10 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  value={formData.email}
                  onChange={handleChange}
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="address" className="block font-medium">
                Alamat
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Alamat Anda"
                  className={`w-full p-2 border rounded-md pl-3 pr-10 ${
                    errors.address ? "border-red-500" : ""
                  }`}
                  value={formData.address}
                  onChange={handleChange}
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block font-medium">
                No. Telp
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="No. Telp Anda"
                  className={`w-full p-2 border rounded-md pl-3 pr-10 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  value={formData.phone}
                  onChange={handleChange}
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Status message */}
            {submitStatus && (
              <div
                className={`p-2 rounded-md ${
                  submitStatus.success
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="pt-4 flex items-center justify-between">
              <a href="#" className="text-green-500 hover:underline">
                Ubah Password
              </a>
              <div className="space-x-2">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Menyimpan..." : "Simpan"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UserForm;
