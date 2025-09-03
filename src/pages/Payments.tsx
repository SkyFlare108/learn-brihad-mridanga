export default function Payments() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Payments</h1>
      <p>We accept Zelle and Venmo.</p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Zelle</h2>
        <p>Send to: your-zelle-handle@example.com</p>
        <img
          src="/qr-zelle.png"
          alt="Zelle QR"
          style={{ width: "200px", marginTop: "1rem" }}
        />
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Venmo</h2>
        <p>Username: @your-venmo</p>
        <img
          src="/qr-venmo.png"
          alt="Venmo QR"
          style={{ width: "200px", marginTop: "1rem" }}
        />
      </section>
    </main>
  );
}
