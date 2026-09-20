import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import PageTransition from "../components/PageTransition";

const ContactForm = ({
  formData,
  handleChange,
  handleSubmit,
  submitting,
  succeeded,
  errors,
  compact = false,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className={compact ? "space-y-4" : "space-y-5"}
    >
      {succeeded && (
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-center text-sm font-medium text-emerald-400">
          ✅ Message sent successfully!
        </div>
      )}

      <div className="relative">
        <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm" />
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className={`w-full rounded-xl border border-white/10 bg-white/5 pl-11 pr-4 text-white outline-none transition-all duration-300 focus:border-indigo-500 focus:bg-white/[0.08] focus:ring-4 focus:ring-indigo-500/10 ${
            compact ? "h-11" : "h-14"
          }`}
        />
        <ValidationError prefix="Name" field="name" errors={errors} className="text-xs text-rose-400 mt-1" />
      </div>

      <div className="relative">
        <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm" />
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className={`w-full rounded-xl border border-white/10 bg-white/5 pl-11 pr-4 text-white outline-none transition-all duration-300 focus:border-indigo-500 focus:bg-white/[0.08] focus:ring-4 focus:ring-indigo-500/10 ${
            compact ? "h-11" : "h-14"
          }`}
        />
        <ValidationError prefix="Email" field="email" errors={errors} className="text-xs text-rose-400 mt-1" />
      </div>

      <div className="relative">
        <i className="fas fa-phone absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm" />
        <input
          type="tel"
          name="phone"
          required
          pattern="[6-9][0-9]{9}"
          maxLength={10}
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className={`w-full rounded-xl border border-white/10 bg-white/5 pl-11 pr-4 text-white outline-none transition-all duration-300 focus:border-indigo-500 focus:bg-white/[0.08] focus:ring-4 focus:ring-indigo-500/10 ${
            compact ? "h-11" : "h-14"
          }`}
        />
        <ValidationError prefix="Phone" field="phone" errors={errors} className="text-xs text-rose-400 mt-1" />
      </div>

      <div className="relative">
        <i className="fas fa-comment-alt absolute left-4 top-5 text-neutral-500 text-sm" />
        <textarea
          name="message"
          required
          rows={compact ? 4 : 5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 pl-11 pr-4 pt-4 text-white outline-none transition-all duration-300 focus:border-indigo-500 focus:bg-white/[0.08] focus:ring-4 focus:ring-indigo-500/10"
        />
        <ValidationError prefix="Message" field="message" errors={errors} className="text-xs text-rose-400 mt-1" />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className={`w-full rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold text-white transition-all duration-300 hover:opacity-95 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center gap-2 ${
          compact ? "h-11 text-sm" : "h-14"
        }`}
      >
        {submitting ? (
          <>
            <i className="fas fa-spinner animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <i className="fas fa-paper-plane text-xs" />
          </>
        )}
      </button>
    </form>
  );
};

const Contact = () => {
  const [state, handleFormspreeSubmit] = useForm("mwlpvbao");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await handleFormspreeSubmit(e);
    
    // Formspree returns response.response.ok upon successful dispatch
    if (response?.response?.ok) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <PageTransition>
      <section className="relative min-h-[85vh] py-2 flex items-center overflow-hidden">
        {/* Dynamic Glow Background Shapes */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[450px] h-[450px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[400px_1fr] z-10">
          {/* Desktop Phone Mockup */}
          <div className="hidden justify-center lg:flex">
            <div className="relative border-4 border-neutral-800 bg-neutral-950 p-3 rounded-[40px] shadow-2xl shadow-indigo-500/5 ring-1 ring-white/10 w-[320px]">
              {/* Dynamic Screen Inner */}
              <div className="rounded-[32px] overflow-hidden bg-[#070a13] border border-neutral-800 p-5 h-[540px] flex flex-col justify-between">
                <div>
                  <div className="w-16 h-4 bg-neutral-900 rounded-full mx-auto mb-4" /> {/* Camera Notch */}
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Instant Briefing
                  </h3>
                  <p className="mb-4 text-xs text-neutral-400">
                    Drop a line straight into my workspace.
                  </p>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <ContactForm
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    submitting={state.submitting}
                    succeeded={state.succeeded}
                    errors={state.errors}
                    compact
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Copywriting Block */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold border rounded-full bg-white/5 border-white/10 backdrop-blur-md text-indigo-300 w-fit mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              Let's Connect
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl max-w-2xl leading-none">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Great Together.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base text-neutral-400 leading-relaxed">
              Have a project idea, startup opportunity, freelance workflow, or simply want to sync up? Shoot over a message and let's craft an exceptional experience.
            </p>

            {/* Mobile / Tablet Fallback Form Card */}
            <div className="mt-8 lg:hidden w-full max-w-xl">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 shadow-xl">
                <ContactForm
                  formData={formData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  submitting={state.submitting}
                  succeeded={state.succeeded}
                  errors={state.errors}
                />
              </div>
            </div>

            {/* Statistics Row Grid */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl w-full">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-center backdrop-blur-sm">
                <h3 className="text-2xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">&lt; 24h</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-neutral-500">
                  Response
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-center backdrop-blur-sm">
                <h3 className="text-2xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">100%</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-neutral-500">
                  Async Focus
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-center backdrop-blur-sm">
                <h3 className="text-2xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">Global</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-neutral-500">
                  Remote Ops
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;