export default function MessageQuestion({
  color,
  size,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.75 13.8226H9.75L6.41249 16.0425C5.91749 16.3725 5.25 16.0201 5.25 15.4201V13.8226C3 13.8226 1.5 12.3226 1.5 10.0726V5.57251C1.5 3.32251 3 1.82251 5.25 1.82251H12.75C15 1.82251 16.5 3.32251 16.5 5.57251V10.0726C16.5 12.3226 15 13.8226 12.75 13.8226Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M9.00084 8.52002V8.36255C9.00084 7.85255 9.31586 7.58254 9.63086 7.36504C9.93836 7.15504 10.2458 6.88505 10.2458 6.39005C10.2458 5.70005 9.69084 5.14502 9.00084 5.14502C8.31084 5.14502 7.75586 5.70005 7.75586 6.39005"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M8.99662 10.3125H9.00337"
        stroke="#4A4A4E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
