import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDone(null);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setDone({ ok: true, msg: "Message sent successfully! ✅" });
      form.reset();
    } catch (err) {
      setDone({ ok: false, msg: "Failed to send. Try again or email directly. ❌" });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="container-x py-14">
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 muted">Want to work together? Send a message—I'll reply fast.</p>

          <div className="mt-6 space-y-2 text-sm muted">
            <p>📧 Email: <a className="underline" href="mailto:dinujahan@gmail.com">dinujahan@gmail.com</a></p>
            <p>
              💼 LinkedIn:{" "}
              <a
                className="underline"
                href="https://www.linkedin.com/in/nusratjahandina74/"
                target="_blank"
                rel="noreferrer"
              >
                nusratjahandina74
              </a>
            </p>
            <p>📍 Location: Dhaka, Bangladesh</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="card p-6">
          <div className="grid gap-4">
            <div>
              <label className="text-sm">Name</label>
              <input
                name="from_name"
                required
                className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none"
                style={{ borderColor: "var(--border)", background: "transparent", color: "var(--text)" }}
              />
            </div>

            <div>
              <label className="text-sm">Email</label>
              <input
                name="reply_to"
                type="email"
                required
                className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none"
                style={{ borderColor: "var(--border)", background: "transparent", color: "var(--text)" }}
              />
            </div>

            <div>
              <label className="text-sm">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none"
                style={{ borderColor: "var(--border)", background: "transparent", color: "var(--text)" }}
              />
            </div>

            {/* Receiver */}
            <input type="hidden" name="to_email" value={import.meta.env.VITE_TO_EMAIL} />

            <button disabled={loading} className="btn btn-primary w-full">
              {loading ? "Sending..." : "Send Message"}
            </button>

            {done && (
              <p className={`text-sm ${done.ok ? "text-green-600" : "text-red-600"}`}>
                {done.msg}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
