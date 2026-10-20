// Local logos from the uploaded portfolio where available; other marks are inline.
export default function PlatformIcon({ name, className = "" }) {
  if (name === "CodeChef") return <img src={`${import.meta.env.BASE_URL}logos/codechef.svg`} alt="" aria-hidden="true" className={`${className} rounded bg-white p-0.5 object-contain`} />;
  if (name === "Codeforces") return <img src={`${import.meta.env.BASE_URL}logos/codeforces.png`} alt="" aria-hidden="true" className={`${className} rounded bg-white p-0.5 object-contain`} />;

  const common = {
    className,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
  };
  switch (name) {
    case "GitHub":
      return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.21 11.16.6.11.82-.25.82-.57 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.58-4.04-1.58-.55-1.37-1.34-1.74-1.34-1.74-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.79 2.81 1.27 3.5.97.11-.76.42-1.27.76-1.56-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.24-3.17-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.21a11.6 11.6 0 0 1 3-.4c1.02 0 2.05.13 3 .4 2.29-1.53 3.3-1.21 3.3-1.21.66 1.65.24 2.87.12 3.17.77.83 1.24 1.88 1.24 3.17 0 4.53-2.81 5.53-5.49 5.82.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.69.83.57C20.56 21.88 24 17.48 24 12.29 24 5.78 18.63.5 12 .5z" /></svg>;
    case "LinkedIn":
      return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.35-1.53 2.78-1.53 2.97 0 3.59 1.96 3.59 4.51v5.27Z" /></svg>;
    case "Instagram":
      return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.7" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
    case "VJudge":
      return <svg {...common}><path d="M8 11h8l8 22 8-22h8L27 39h-6L8 11Z" fill="currentColor"/><path d="M18 8h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>;
    case "HackerRank":
      return <svg {...common}><path d="m24 3 18 10.5v21L24 45 6 34.5v-21L24 3Z" stroke="currentColor" strokeWidth="3"/><path d="M16 15v18m16-18v18M16 24h16" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/></svg>;
    case "HackerEarth":
      return <svg {...common}><path d="M9 8h30v8H17v6h18v7H17v4h22v7H9V8Z" fill="currentColor"/><path d="m21 22 8 7" stroke="currentColor" strokeWidth="3"/></svg>;
    case "BeeCrowd":
      return <svg {...common}><path d="M12 8v32m0-16c4-6 10-9 16-8 8 1 12 6 12 13s-5 13-13 13c-6 0-12-3-15-8" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="30" cy="27" r="3" fill="currentColor"/></svg>;
    default:
      return null;
  }
}
