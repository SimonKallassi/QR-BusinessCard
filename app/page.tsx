"use client";

import { Phone, Mail, Download, ArrowUpRight } from "lucide-react";

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

const companies = [
  {
    name: "Miroplastic",
    desc: "Plastics Manufacturing",
    countries: "LB / AO / SY",
    color: "bg-[var(--blue)]",
    href: "https://miroplastic.com",
  },
  {
    name: "Detudo Packing",
    desc: "All Types of Packaging Manufacturing",
    countries: "AO",
    color: "bg-[var(--amber)]",
    href: "https://detudo.ao",
  },
  {
    name: "SZS",
    desc: "International Trading Company",
    countries: "PT",
    color: "bg-[var(--green)]",
    href: null,
  },
];

const presence = [
  { flag: "\u{1F1F1}\u{1F1E7}", label: "Lebanon" },
  { flag: "\u{1F1E6}\u{1F1F4}", label: "Angola" },
  { flag: "\u{1F1F8}\u{1F1FE}", label: "Syria" },
  { flag: "\u{1F1F5}\u{1F1F9}", label: "Portugal" },
  { flag: "\u{1F1E8}\u{1F1F3}", label: "China" },
];

export default function Home() {
  return (
    <>
      <div className="max-w-[500px] mx-auto px-6">
        {/* Top Bar */}
        <div className="anim-fade flex justify-between items-center py-5 border-b-[1.5px] border-[var(--ink)] text-[11px] uppercase tracking-[2px] font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--red)] animate-pulse" />
            Available for Business
          </div>
          <div>2026</div>
        </div>

        {/* Name */}
        <div className="anim-1 pt-12 pb-5 border-b-[1.5px] border-[var(--ink)]">
          <h1
            className="text-[56px] leading-[0.95] font-normal tracking-[-2px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Marwan
            <br />
            <em>El Kallassi</em>
          </h1>
          <div className="mt-4 text-[13px] font-semibold uppercase tracking-[3px] text-[var(--ink-light)]">
            CEO &amp; Owner
          </div>
        </div>

        {/* Stats */}
        <div className="anim-2 grid grid-cols-3 border-b-[1.5px] border-[var(--ink)]">
          {[
            { n: "3", l: "Companies" },
            { n: "5", l: "Countries" },
            { n: "3", l: "Industries" },
          ].map((s) => (
            <div
              key={s.l}
              className="py-[18px] text-center border-r-[1.5px] border-[var(--ink)] last:border-r-0"
            >
              <div
                className="text-[36px] leading-none tracking-[-1px]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {s.n}
              </div>
              <div className="mt-1 text-[9px] uppercase tracking-[2px] text-[var(--ink-light)] font-semibold">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="anim-3 border-b-[1.5px] border-[var(--ink)] py-[14px] overflow-hidden">
          <div
            className="flex gap-10 whitespace-nowrap"
            style={{ animation: "marquee 15s linear infinite" }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 flex-shrink-0 text-[16px]"
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                <span className="w-[6px] h-[6px] rounded-full bg-[var(--red)] flex-shrink-0" />
                {i % 2 === 0
                  ? "CHINAPLAS 2026 \u2014 Shenzhen, China"
                  : "Plastics \u2022 Packaging \u2022 Trading"}
              </span>
            ))}
          </div>
        </div>

        {/* Companies */}
        <div className="anim-3 pt-7">
          <div className="text-[9px] uppercase tracking-[3px] text-[var(--ink-light)] font-semibold mb-5">
            Companies
          </div>
          {companies.map((c) => {
            const inner = (
              <>
                <div
                  className={`w-[14px] h-[14px] rounded-[3px] flex-shrink-0 mt-1 ${c.color}`}
                />
                <div className="flex-1">
                  <div className="flex justify-between items-baseline gap-3">
                    <h3
                      className="text-[26px] font-normal leading-[1.1] tracking-[-0.5px]"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {c.name}
                    </h3>
                    <span className="text-[11px] text-[var(--ink-light)] uppercase tracking-[1.5px] font-medium whitespace-nowrap">
                      {c.countries}
                    </span>
                  </div>
                  <div className="text-[13px] text-[var(--ink-light)] mt-1 leading-[1.4]">
                    {c.desc}
                  </div>
                  {c.href && (
                    <div className="mt-2 inline-flex items-center gap-[6px] text-[12px] font-semibold uppercase tracking-[1.5px] group-hover:gap-[10px] transition-all">
                      Visit <ArrowUpRight size={14} />
                    </div>
                  )}
                </div>
              </>
            );
            return c.href ? (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener"
                className="group flex items-start gap-4 py-[18px] border-b-[1.5px] border-[var(--ink)] hover:pl-2 transition-all no-underline text-inherit"
              >
                {inner}
              </a>
            ) : (
              <div
                key={c.name}
                className="flex items-start gap-4 py-[18px] border-b-[1.5px] border-[var(--ink)]"
              >
                {inner}
              </div>
            );
          })}
        </div>

        {/* Global Presence */}
        <div className="anim-4 py-7 border-b-[1.5px] border-[var(--ink)]">
          <div className="text-[9px] uppercase tracking-[3px] text-[var(--ink-light)] font-semibold mb-3">
            Global Presence
          </div>
          <div className="flex flex-wrap gap-[6px] mt-3">
            {presence.map((p) => (
              <div
                key={p.label}
                className="inline-flex items-center gap-[6px] px-[14px] py-2 border-[1.5px] border-[var(--ink)] rounded-full text-[12px] font-semibold uppercase tracking-[1px] hover:bg-[var(--ink)] hover:text-[var(--cream)] transition-all cursor-default"
              >
                <span className="text-[14px]">{p.flag}</span>
                {p.label}
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="anim-5 pt-7">
          <div className="text-[9px] uppercase tracking-[3px] text-[var(--ink-light)] font-semibold mb-5">
            Get in Touch
          </div>
          <div className="grid grid-cols-2 gap-[10px] mb-3">
            <a
              href="https://wa.me/9613776882"
              target="_blank"
              rel="noopener"
              className="group flex flex-col items-center justify-center gap-2 py-[22px] px-4 border-[1.5px] border-[var(--ink)] no-underline text-inherit relative overflow-hidden hover:text-white active:scale-[0.97] transition-transform"
            >
              <span className="absolute inset-0 bg-[#25d366] translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px] relative z-10">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="text-[10px] font-bold uppercase tracking-[2px] relative z-10">WhatsApp</span>
            </a>

            <button
              onClick={() => document.getElementById("wechatModal")?.classList.add("open")}
              className="group flex flex-col items-center justify-center gap-2 py-[22px] px-4 border-[1.5px] border-[var(--ink)] bg-transparent text-inherit relative overflow-hidden hover:text-white active:scale-[0.97] transition-transform cursor-pointer font-[inherit]"
            >
              <span className="absolute inset-0 bg-[#09b83e] translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px] relative z-10">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05a6.3 6.3 0 01-.261-1.799c0-3.559 3.326-6.448 7.427-6.448.258 0 .507.022.76.042C16.737 4.964 13.084 2.188 8.691 2.188zm-3.11 5.28a1.03 1.03 0 110-2.06 1.03 1.03 0 010 2.06zm6.028 0a1.03 1.03 0 110-2.06 1.03 1.03 0 010 2.06zM23.995 15.588c0-3.246-3.13-5.883-6.993-5.883-3.867 0-6.998 2.637-6.998 5.883 0 3.247 3.131 5.884 6.998 5.884a8.37 8.37 0 002.33-.334.67.67 0 01.56.078l1.478.862a.248.248 0 00.128.041.226.226 0 00.224-.228c0-.055-.023-.11-.037-.164l-.3-1.145a.458.458 0 01.166-.517c1.417-1.09 2.444-2.741 2.444-4.477zm-9.34-.863a.838.838 0 110-1.676.838.838 0 010 1.676zm4.705 0a.838.838 0 110-1.676.838.838 0 010 1.676z" />
              </svg>
              <span className="text-[10px] font-bold uppercase tracking-[2px] relative z-10">WeChat</span>
            </button>

            <a
              href="tel:+9613776882"
              className="group flex flex-col items-center justify-center gap-2 py-[22px] px-4 border-[1.5px] border-[var(--ink)] no-underline text-inherit relative overflow-hidden hover:text-white active:scale-[0.97] transition-transform"
            >
              <span className="absolute inset-0 bg-[var(--blue)] translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
              <Phone size={22} className="relative z-10" />
              <span className="text-[10px] font-bold uppercase tracking-[2px] relative z-10">Call</span>
            </a>

            <a
              href="mailto:marwan@miroplastic.com"
              className="group flex flex-col items-center justify-center gap-2 py-[22px] px-4 border-[1.5px] border-[var(--ink)] no-underline text-inherit relative overflow-hidden hover:text-white active:scale-[0.97] transition-transform"
            >
              <span className="absolute inset-0 bg-[var(--red)] translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
              <Mail size={22} className="relative z-10" />
              <span className="text-[10px] font-bold uppercase tracking-[2px] relative z-10">Email</span>
            </a>
          </div>

          <button
            onClick={saveContact}
            className="flex items-center justify-center gap-[10px] w-full py-5 bg-[var(--ink)] text-[var(--cream)] border-none font-[inherit] text-[12px] font-bold uppercase tracking-[3px] cursor-pointer hover:bg-[var(--red)] hover:tracking-[5px] active:scale-[0.98] transition-all mb-7"
          >
            <Download size={16} />
            Save Contact
          </button>
        </div>

        {/* Footer */}
        <div className="anim-7 text-center py-6 pb-10 text-[10px] uppercase tracking-[2px] text-[var(--ink-light)]">
          Marwan El Kallassi &mdash; MMXXVI
        </div>
      </div>

      {/* WeChat Modal */}
      <div
        id="wechatModal"
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.id === "wechatModal" || target.dataset.close) {
            document.getElementById("wechatModal")?.classList.remove("open");
          }
        }}
        className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[100] flex items-center justify-center p-6 opacity-0 pointer-events-none [&.open]:opacity-100 [&.open]:pointer-events-auto transition-opacity duration-200"
      >
        <div className="bg-[var(--cream)] p-10 max-w-[340px] w-full text-center translate-y-[10px] [.open_&]:translate-y-0 transition-transform duration-200">
          <h3
            className="text-[28px] font-normal mb-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            WeChat
          </h3>
          <p className="text-[13px] text-[var(--ink-light)] mb-5">
            Search this number to add me:
          </p>
          <div className="inline-block px-7 py-3 border-[1.5px] border-[var(--ink)] text-[20px] font-semibold tracking-[1px] select-all mb-5">
            +961 377 6882
          </div>
          <br />
          <button
            data-close="true"
            className="inline-block px-8 py-3 bg-[var(--ink)] text-[var(--cream)] border-none font-[inherit] text-[11px] font-bold uppercase tracking-[2px] cursor-pointer hover:bg-[var(--red)] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
