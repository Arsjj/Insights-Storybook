export default function Cube({ color, size }: { color?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.69 2.08076L14.5725 4.71326C15.1425 5.02076 15.1425 5.89826 14.5725 6.20576L9.69 8.83826C9.255 9.07076 8.745 9.07076 8.31 8.83826L3.4275 6.20576C2.8575 5.89826 2.8575 5.02076 3.4275 4.71326L8.31 2.08076C8.745 1.84826 9.255 1.84826 9.69 2.08076Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        opacity="0.4"
        d="M2.7075 7.98326L7.245 10.2558C7.8075 10.5408 8.1675 11.1183 8.1675 11.7483V16.0383C8.1675 16.6608 7.515 17.0583 6.96 16.7808L2.4225 14.5083C1.86 14.2233 1.5 13.6458 1.5 13.0158V8.72576C1.5 8.10326 2.1525 7.70576 2.7075 7.98326Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        opacity="0.4"
        d="M15.292 7.98326L10.7545 10.2558C10.192 10.5408 9.83203 11.1183 9.83203 11.7483V16.0383C9.83203 16.6608 10.4845 17.0583 11.0395 16.7808L15.577 14.5083C16.1395 14.2233 16.4995 13.6458 16.4995 13.0158V8.72576C16.4995 8.10326 15.847 7.70576 15.292 7.98326Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
