export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2348070719088"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      <img
        src="/whatsappIcon.png"
        alt="Chat on WhatsApp"
        className="h-6"
      />
    </a>
  );
}
