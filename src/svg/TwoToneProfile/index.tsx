export default function TwoToneProfile({
  color,
  size,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M16.2134 14.4933C16.0801 14.48 15.9201 14.48 15.7734 14.4933C12.6001 14.3867 10.0801 11.7867 10.0801 8.58666C10.0801 5.31999 12.7201 2.66666 16.0001 2.66666C19.2667 2.66666 21.9201 5.31999 21.9201 8.58666C21.9067 11.7867 19.3867 14.3867 16.2134 14.4933Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.54695 19.4133C6.32029 21.5733 6.32029 25.0933 9.54695 27.24C13.2136 29.6933 19.227 29.6933 22.8936 27.24C26.1203 25.08 26.1203 21.56 22.8936 19.4133C19.2403 16.9733 13.227 16.9733 9.54695 19.4133Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
