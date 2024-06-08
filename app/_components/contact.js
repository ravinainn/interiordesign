"use client";

import image3 from "../_assets/image3.jpg";
import Image from "next/image";
import { useState } from "react";
import ring from "../_assets/whiteRing.svg";

export default function Contact() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [query, setQuery] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phoneNumber, query }),
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      setName("");
      setPhoneNumber("");
      setQuery("");
      setSuccess(true);
      setError(null);
    } catch (error) {
      console.error(error);
      setError("There was an error submitting the form.");
    }
  };
  return (
    <div
      id="contact"
      className="py-4 md:py-32 mx-auto my-20 rounded w-4/5 text-white bg-black flex flex-wrap gap-4 justify-center relative md:p-10 overflow-hidden"
    >
      <div className="w-2/5 flex flex-col gap-4  justify-center">
        <h1 className="text-5xl font-semibold pb-8">Contact Us</h1>
        <form
          className="flex flex-col gap-4 px-4  rounded py-4 text-black z-10"
          onSubmit={handleSubmit}
        >
          <input
            className=" placeholder:font-light px-2 text-lg tracking-wider py-2 rounded w-fit bg-white focus:outline-none"
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className=" placeholder:font-light px-2 text-lg tracking-wider py-2 rounded w-fit bg-white focus:outline-none"
            type="tel"
            id="phoneNumber"
            placeholder="Enter your mobile no."
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />

          <textarea
            className="w-fit md:w-full placeholder:font-light px-2 text-lg tracking-wider py-2 rounded min-h-32 bg-white outline-none focus:outline-none"
            id="query"
            placeholder="Start Asking Your Query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button
            className="w-fit  text-black text-lg sm:text-xl font-medium  px-8 py-3  rounded bg-color1 focus:ring-1 ring-white ring-offset-2 ring-offset-black"
            type="submit"
          >
            Submit
          </button>
        </form>
        {success && <p className="success">Message sent successfully!</p>}
        {error && <p className="error">{error}</p>}
      </div>
      <div className="w-2/5 flex justify-end relative">
        <Image
          className="hidden md:block w-72 z-10 rounded"
          src={image3}
          alt="image1"
        />
      </div>
      <Image
        className="absolute scale-150 -right-32 -top-24 md:scale-100 md:-right-72 md:-top-72"
        src={ring}
        alt="ring"
      />
      <Image
        className="absolute  scale-150 -left-32 -bottom-24 md:scale-100 md:-left-72 md:-bottom-72"
        src={ring}
        alt="ring"
      />
    </div>
  );
}
