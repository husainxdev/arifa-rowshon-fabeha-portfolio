import { useId } from "react";

export default function Guide({ className = "", pointing = false }) {
  const uid = useId().replace(/:/g, "");
  return (
    <div
      className={`guide-figure ${className}`}
      aria-label="Illustration of Fabiha, a smiling girl wearing a hijab"
      role="img"
    >
      <svg
        viewBox="0 0 300 340"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${uid}-hijab`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#ffbfaa" />
            <stop offset="1" stopColor="#e69ab5" />
          </linearGradient>
          <linearGradient id={`${uid}-coat`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#6650ad" />
            <stop offset="1" stopColor="#39336d" />
          </linearGradient>
        </defs>
        <ellipse
          cx="150"
          cy="320"
          rx="90"
          ry="13"
          fill="#4b3b87"
          opacity=".15"
        />
        <path
          d="M75 299c5-56 24-91 75-91s70 35 75 91"
          fill={`url(#${uid}-coat)`}
          stroke="#342d65"
          strokeWidth="5"
        />
        <path d="M139 211v29c0 12 22 12 22 0v-29" fill="#e9aa92" />
        <path
          d="M47 132C45 56 85 22 149 22c70 0 108 47 105 112-2 44-20 90-40 119-11 16-28 21-64 21-36 0-53-5-64-21-21-30-37-74-39-121Z"
          fill={`url(#${uid}-hijab)`}
          stroke="#b57394"
          strokeWidth="5"
        />
        <path
          d="M79 128c0-54 25-86 71-86s71 32 71 86v35c0 58-30 93-71 93s-71-35-71-93v-35Z"
          fill="#ffd3ba"
          stroke="#d9998a"
          strokeWidth="3"
        />
        <path
          d="M80 122c-3-57 23-83 70-83 50 0 73 33 71 83-17-9-31-26-39-43-19 22-55 33-102 43Z"
          fill="#2b244b"
        />
        <path
          d="M77 118c-3 56 9 105 44 139-30-4-49-22-59-62-6-26-5-60 2-87Z"
          fill={`url(#${uid}-hijab)`}
        />
        <path
          d="M223 118c3 56-9 105-44 139 30-4 49-22 59-62 6-26 5-60-2-87Z"
          fill={`url(#${uid}-hijab)`}
        />
        <path
          d="M110 150q11-8 24 0M166 150q12-8 24 0"
          stroke="#554055"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <g className="guide-eyes" fill="#302943">
          <ellipse cx="123" cy="162" rx="4" ry="6" />
          <ellipse cx="177" cy="162" rx="4" ry="6" />
        </g>
        <circle cx="104" cy="181" r="12" fill="#ed9b9c" opacity=".36" />
        <circle cx="196" cy="181" r="12" fill="#ed9b9c" opacity=".36" />
        <path
          d="M139 190q11 12 22 0"
          fill="none"
          stroke="#b55a76"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M95 243q-22 7-36 45M205 243q22 7 36 45"
          fill="none"
          stroke="#342d65"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M57 281q-10 15-3 23 8 8 18-7"
          fill="#ffd3ba"
          stroke="#d9998a"
          strokeWidth="3"
        />
        <g className={pointing ? "guide-pointing" : ""}>
          <path
            d="M242 283q11 1 15-14l9-23q3-8-3-10-6-3-9 4l-7 14-2-9q-2-8-9-6-5 2-4 9l1 27Z"
            fill="#ffd3ba"
            stroke="#d9998a"
            strokeWidth="3"
          />
        </g>
        <path
          d="M116 256q34 14 68 0"
          fill="none"
          stroke="#8b77ce"
          strokeWidth="4"
          opacity=".65"
        />
        <circle cx="72" cy="61" r="5" fill="#a1f4e3" />
        <path d="m227 31 2 7 7 2-7 2-2 7-2-7-7-2 7-2Z" fill="#ffe3a6" />
      </svg>
    </div>
  );
}
