import { motion } from "framer-motion";

// Stamped once at build/merge time (not a live ticking clock) so the footer
// reflects when this deploy was produced, shown in Cairo local time.
const LAST_UPDATED = new Date().toLocaleString("en-GB", {
  timeZone: "Africa/Cairo",
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

function Footer() {
  return (
    <footer className="py-8 border-t" style={{ borderColor: "var(--border-color, rgba(163,230,53,0.1))" }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <p style={{ color: "var(--text-muted, #94a3b8)" }}>
          &copy; 2026 Sameh El-Hosary. Built with passion for data.
        </p>
        <p className="mt-2 text-xs" style={{ color: "var(--text-muted, #94a3b8)", opacity: 0.7 }}>
          Last updated: {LAST_UPDATED} (Cairo time)
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;
