"use client";

function saveContact() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:El Kallassi;Marwan;;;
FN:Marwan El Kallassi
TITLE:CEO & Owner
ORG:Miroplastic; Detudo Packing; SZS
TEL;TYPE=CELL:+9613776882
EMAIL:marwan@miroplastic.com
URL:https://miroplastic.com
URL:https://detudo.ao
NOTE:CEO & Owner of Miroplastic (Lebanon\\, Angola\\, Syria)\\, Detudo Packing (Angola)\\, SZS (Portugal)
END:VCARD`;
  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Marwan_El_Kallassi.vcf";
  a.click();
  URL.revokeObjectURL(url);
}

export default function Home() {
  return (
    <>
      <div className="page">
        {/* ——— Name ——— */}
        <div className="nameplate">
          <div className="first-name">Marwan</div>
          <div className="last-name">El Kallassi</div>
          <div className="role">CEO & Owner</div>
        </div>

        {/* ——— Ventures ——— */}
        <div className="ventures">
          <div className="venture">
            <div className="venture-name">Miroplastic</div>
            <div className="venture-detail">Plastics Manufacturing</div>
            <div className="venture-geo">Lebanon &middot; Angola &middot; Syria</div>
            <br />
            <a href="https://miroplastic.com" target="_blank" rel="noopener" className="venture-link">
              miroplastic.com
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
          </div>

          <div className="venture">
            <div className="venture-name">Detudo Packing</div>
            <div className="venture-detail">Flexible Packaging Manufacturing</div>
            <div className="venture-geo">Angola</div>
            <br />
            <a href="https://detudo.ao" target="_blank" rel="noopener" className="venture-link">
              detudo.ao
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
          </div>

          <div className="venture">
            <div className="venture-name">SZS</div>
            <div className="venture-detail">International Trading</div>
            <div className="venture-geo">Portugal</div>
          </div>
        </div>

        <hr className="rule" />

        {/* ——— Contact ——— */}
        <div className="contact">
          <a href="tel:+9613776882" className="phone-display">
            +961 3 776 882
          </a>
          <div className="phone-channels">
            <a href="https://wa.me/9613776882" target="_blank" rel="noopener" className="channel channel--wa">
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() => document.getElementById("wechatModal")?.classList.add("open")}
              className="channel channel--wc"
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer", font: "inherit" }}
            >
              WeChat
            </button>
          </div>

          <a href="mailto:marwan@miroplastic.com" className="email-display">
            marwan@miroplastic.com
          </a>

          <br />

          <button onClick={saveContact} className="save-contact" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Save Contact
          </button>
        </div>

        {/* ——— Colophon ——— */}
        <div className="colophon">
          <div className="monogram">MK</div>
          <div className="colophon-text">
            Beirut &middot; Luanda<br />
            Damascus &middot; Lisbon
          </div>
        </div>
      </div>

      {/* ——— WeChat Modal ——— */}
      <div
        id="wechatModal"
        className="overlay"
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.id === "wechatModal" || target.classList.contains("modal-close")) {
            document.getElementById("wechatModal")?.classList.remove("open");
          }
        }}
      >
        <div className="modal-card">
          <h3>WeChat</h3>
          <p>Search this number to add me</p>
          <div className="modal-id">+961 3 776 882</div>
          <br />
          <button className="modal-close" type="button">Close</button>
        </div>
      </div>
    </>
  );
}
