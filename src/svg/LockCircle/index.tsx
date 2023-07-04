export default function LockCircle({
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
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 7.33329V6.66663C6 5.55996 6.33333 4.66663 8 4.66663C9.66667 4.66663 10 5.55996 10 6.66663V7.33329"
        stroke={color}
        stroke-width="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.99959 9.73336C8.22051 9.73336 8.39958 9.55427 8.39958 9.33335C8.39958 9.11244 8.22051 8.93335 7.99959 8.93335C7.77868 8.93335 7.59961 9.11244 7.59961 9.33335C7.59961 9.55427 7.77868 9.73336 7.99959 9.73336Z"
        stroke={color}
        stroke-width="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.6665 11.3333H6.33317C4.99984 11.3333 4.6665 10.9999 4.6665 9.66658V8.99992C4.6665 7.66659 4.99984 7.33325 6.33317 7.33325H9.6665C10.9998 7.33325 11.3332 7.66659 11.3332 8.99992V9.66658C11.3332 10.9999 10.9998 11.3333 9.6665 11.3333Z"
        stroke={color}
        stroke-width="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
