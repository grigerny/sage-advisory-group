"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/content/site";

type Status = "idle" | "submitting" | "success" | "error";

function toggleValue(list: string[], value: string) {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [roles, setRoles] = useState<string[]>([]);
  const [decision, setDecision] = useState("");
  const [support, setSupport] = useState<string[]>([]);
  const [locations, setLocations] = useState("");
  const [stages, setStages] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const about = String(formData.get("about") || "").trim();

    if (!fullName || !email || !about) {
      setStatus("error");
      setErrorMessage("Please complete the required fields before submitting.");
      return;
    }

    const payload = {
      fullName,
      email,
      about,
      roles: roles.join(", ") || "Not specified",
      decision: decision || "Not specified",
      support: support.join(", ") || "Not specified",
      locations: locations || "Not specified",
      stages: stages.join(", ") || "Not specified",
      timeline: timeline || "Not specified",
      _subject: `SAGE advisory inquiry from ${fullName}`,
      _template: "table"
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contact.formEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Unable to send the form right now.");
      }

      form.reset();
      setRoles([]);
      setDecision("");
      setSupport([]);
      setLocations("");
      setStages([]);
      setTimeline("");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        `Something went wrong. Please email ${contact.formEmail} directly and we will follow up.`
      );
    }
  }

  if (status === "success") {
    return (
      <div className="contact-success" role="status">
        <h2>{contact.successTitle}</h2>
        <p>{contact.successBody}</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-field">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          placeholder="Enter your full name"
          required
        />
        <span className="field-note">* This question is required</span>
      </div>

      <div className="contact-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email address"
          required
        />
        <span className="field-note">* This question is required</span>
      </div>

      <div className="contact-field">
        <label htmlFor="about">
          Tell us about where your restaurant operation stands today &amp; your location,
          so we can understand how best to support your top priorities.
        </label>
        <textarea id="about" name="about" rows={5} required />
        <span className="field-note">* This question is required</span>
      </div>

      <fieldset className="contact-fieldset">
        <legend>What is Your Role in the Company?</legend>
        <p className="choice-hint">Choose one or more:</p>
        <div className="choice-grid">
          {contact.roleOptions.map((option) => (
            <label className="choice" key={option}>
              <input
                type="checkbox"
                checked={roles.includes(option)}
                onChange={() => setRoles(toggleValue(roles, option))}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="contact-fieldset">
        <legend>Do you lead or share responsibility for key decisions?</legend>
        <p className="choice-hint">Choose the option that applies:</p>
        <div className="choice-grid">
          {contact.decisionOptions.map((option) => (
            <label className="choice" key={option}>
              <input
                type="radio"
                name="decision"
                value={option}
                checked={decision === option}
                onChange={() => setDecision(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="contact-fieldset">
        <legend>Which areas do you currently have third party support with or wish you did?</legend>
        <p className="choice-hint">Choose one or more:</p>
        <div className="choice-grid">
          {contact.supportOptions.map((option) => (
            <label className="choice" key={option}>
              <input
                type="checkbox"
                checked={support.includes(option)}
                onChange={() => setSupport(toggleValue(support, option))}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="contact-fieldset">
        <legend>Number of Locations You Currently Operate:</legend>
        <p className="choice-hint">Choose the option that applies:</p>
        <div className="choice-grid">
          {contact.locationOptions.map((option) => (
            <label className="choice" key={option}>
              <input
                type="radio"
                name="locations"
                value={option}
                checked={locations === option}
                onChange={() => setLocations(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="contact-fieldset">
        <legend>How would you describe where your business is today?</legend>
        <p className="choice-hint">Choose any that apply:</p>
        <div className="choice-grid">
          {contact.stageOptions.map((option) => (
            <label className="choice" key={option}>
              <input
                type="checkbox"
                checked={stages.includes(option)}
                onChange={() => setStages(toggleValue(stages, option))}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="contact-fieldset">
        <legend>How soon are you hoping to bring in support?</legend>
        <p className="choice-hint">Choose one of the options:</p>
        <div className="choice-grid">
          {contact.timelineOptions.map((option) => (
            <label className="choice" key={option}>
              <input
                type="radio"
                name="timeline"
                value={option}
                checked={timeline === option}
                onChange={() => setTimeline(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {status === "error" && errorMessage && (
        <p className="contact-error" role="alert">
          {errorMessage}
        </p>
      )}

      <button className="button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : contact.submitLabel}
      </button>
    </form>
  );
}
