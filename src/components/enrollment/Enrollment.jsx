import React, { useState } from "react";

const Enrollment = () => {
  const [formData, setFormData] = useState({
    name: "",
    branch: "NONE",
    year: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Registration successful!");
        setFormData({
          name: "",
          branch: "NONE",
          year: "",
          phone: "",
        });
      } else {
        alert("Registration failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div class="mb-4">
            <label for="branch" class="block text-sm font-medium text-gray-700">
              Branch{" "}
            </label>{" "}
            <select
              id="branch"
              name="branch"
              class="mt-1 p-2 w-full border rounded-md"
              value={formData.branch}
              onChange={handleInputChange}
            >
              <option value="NONE"> Select your branch </option>{" "}
              <option value="Biotechnology"> Bio Technology </option>{" "}
              <option value="ChemicalEngineering">Chemical Engineering </option>{" "}
              <option value="CivilEngineering"> Civil Engineering </option>{" "}
              <option value="ComputerScienceEngineering">
                Computer Science and Engineering{" "}
              </option>{" "}
              <option value="ElectricalEngineering">
                Electrical Engineering{" "}
              </option>{" "}
              <option value="ElectronicsCommunicationEngineering">
                Electronics and Communication Engineering{" "}
              </option>{" "}
              <option value="IndustrialProductionEngineering">
                Industrial and Production Engineering{" "}
              </option>{" "}
              <option value="InformationTechnology">
                Information Technology{" "}
              </option>{" "}
              <option value="InstrumentalControlEngineering">
                Instrumental and Control Engineering{" "}
              </option>{" "}
              <option value="MechanicalEngineering">
                Mechanical Engineering{" "}
              </option>{" "}
              <option value="TextileTechnology"> Textile Technology </option>{" "}
            </select>{" "}
          </div>{" "}
          <div className="mb-4">
            <label
              htmlFor="year"
              className="block text-sm font-medium text-gray-700"
            >
              Year
            </label>
            <input
              type="text"
              id="year"
              name="year"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your year"
              value={formData.year}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Enrollment;