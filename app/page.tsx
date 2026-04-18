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
      {/* ——— Dark Hero ——— */}
      <div className="hero">
        <div className="hero-inner">
          <div className="hero-label">CEO &amp; Owner</div>
          <h1 className="hero-name">
            Marwan
            <em>El Kallassi</em>
          </h1>
          <div className="hero-role">
            Plastics &middot; Packaging &middot; Trading
          </div>
        </div>
      </div>
      <div className="accent-bar" />

      <div className="content">
        {/* ——— Companies ——— */}
        <div className="ventures">
          <div className="venture">
            <div className="venture-accent" style={{ background: "var(--navy)" }} />
            <div className="venture-body">
              <div className="venture-head">
                <div className="venture-name">Miroplastic</div>
                <div className="venture-geo">LB &middot; AO &middot; SY</div>
              </div>
              <div className="venture-desc">Plastics Manufacturing</div>
              <a
                href="https://miroplastic.com"
                target="_blank"
                rel="noopener"
                className="venture-link"
              >
                miroplastic.com
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>

          <div className="venture">
            <div className="venture-accent" style={{ background: "var(--amber)" }} />
            <div className="venture-body">
              <div className="venture-head">
                <div className="venture-name">Detudo Packing</div>
                <div className="venture-geo">AO</div>
              </div>
              <div className="venture-desc">Flexible Packaging Manufacturing</div>
              <a
                href="https://detudo.ao"
                target="_blank"
                rel="noopener"
                className="venture-link"
              >
                detudo.ao
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>

          <div className="venture">
            <div className="venture-accent" style={{ background: "var(--forest)" }} />
            <div className="venture-body">
              <div className="venture-head">
                <div className="venture-name">SZS</div>
                <div className="venture-geo">PT</div>
              </div>
              <div className="venture-desc">International Trading</div>
            </div>
          </div>
        </div>

        {/* ——— Contact ——— */}
        <div className="contact-block">
          <a href="tel:+9613776882" className="phone-row">
            +961 3 776 882
          </a>

          <div className="channels">
            <a
              href="https://wa.me/9613776882"
              target="_blank"
              rel="noopener"
              className="channel-pill channel-pill--wa"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() =>
                document.getElementById("wechatModal")?.classList.add("open")
              }
              className="channel-pill channel-pill--wc"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05a6.3 6.3 0 01-.261-1.799c0-3.559 3.326-6.448 7.427-6.448.258 0 .507.022.76.042C16.737 4.964 13.084 2.188 8.691 2.188zm-3.11 5.28a1.03 1.03 0 110-2.06 1.03 1.03 0 010 2.06zm6.028 0a1.03 1.03 0 110-2.06 1.03 1.03 0 010 2.06zM23.995 15.588c0-3.246-3.13-5.883-6.993-5.883-3.867 0-6.998 2.637-6.998 5.883 0 3.247 3.131 5.884 6.998 5.884a8.37 8.37 0 002.33-.334.67.67 0 01.56.078l1.478.862a.248.248 0 00.128.041.226.226 0 00.224-.228c0-.055-.023-.11-.037-.164l-.3-1.145a.458.458 0 01.166-.517c1.417-1.09 2.444-2.741 2.444-4.477zm-9.34-.863a.838.838 0 110-1.676.838.838 0 010 1.676zm4.705 0a.838.838 0 110-1.676.838.838 0 010 1.676z" />
              </svg>
              WeChat
            </button>
          </div>

          <a href="mailto:marwan@miroplastic.com" className="email-row">
            marwan@miroplastic.com
          </a>

          <div className="save-bar">
            <button onClick={saveContact} className="save-btn" type="button">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Save Contact
            </button>
          </div>
        </div>

        {/* ——— Footer ——— */}
        <div className="colophon">
          <div className="colophon-cities">
            Beirut &middot; Luanda
            <br />
            Damascus &middot; Lisbon
          </div>
          <div className="colophon-mark">M</div>
        </div>
      </div>

      {/* ——— WeChat Modal ——— */}
      <div
        id="wechatModal"
        className="overlay"
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (
            target.id === "wechatModal" ||
            target.classList.contains("modal-close")
          ) {
            document.getElementById("wechatModal")?.classList.remove("open");
          }
        }}
      >
        <div className="modal-card">
          <h3>WeChat</h3>
          <p>Search this number to add me</p>
          <div className="modal-id">+961 3 776 882</div>
          <br />
          <button
            type="button"
            className="modal-copy"
            onClick={(e) => {
              e.stopPropagation();
              navigator.clipboard.writeText("+9613776882").then(() => {
                const btn = e.currentTarget;
                btn.textContent = "Copied!";
                setTimeout(() => { btn.textContent = "Copy Number"; }, 2000);
              });
            }}
          >
            Copy Number
          </button>
          <button className="modal-close" type="button">
            Close
          </button>
        </div>
      </div>
    </>
  );
}
