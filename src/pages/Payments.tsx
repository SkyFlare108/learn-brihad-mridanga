export default function Payments() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Donations</h1>

      <details style={{ marginTop: "1.5rem", border: "1px solid #ddd", borderRadius: 8, padding: "0.75rem 1rem" }}>
        <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "1.1rem" }}>
          Harisri Yerramsetti
        </summary>

        <div style={{ marginTop: "1rem" }}>
          <section style={{ marginTop: "1rem" }}>
            <h2 style={{ margin: 0, fontSize: "1rem" }}>Zelle</h2>
            <img
              src="/qr-zelle.png"
              alt="Zelle QR"
              style={{ width: 200, display: "block" }}
            />
          </section>

          <section style={{ marginTop: "1rem" }}>
            <h2 style={{ margin: 0, fontSize: "1rem" }}>Venmo</h2>
            <img
              src="/qr-venmo.png"
              alt="Venmo QR"
              style={{ width: 200, display: "block" }}
            />
          </section>
        </div>
      </details>

      <details style={{ marginTop: "1.5rem", border: "1px solid #ddd", borderRadius: 8, padding: "0.75rem 1rem" }}>
        <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "1.1rem" }}>
          Samarth Appalabattula
        </summary>
        <div style={{ marginTop: "1rem" }}>
          {/* Empty for now */}
        </div>
      </details>

      <details style={{ marginTop: "1.5rem", border: "1px solid #ddd", borderRadius: 8, padding: "0.75rem 1rem" }}>
        <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "1.1rem" }}>
          Arjun Krishna Gundimeda
        </summary>
        <div style={{ marginTop: "1rem" }}>
          {/* Empty for now */}
        </div>
      </details>
    </main>
  );
}
