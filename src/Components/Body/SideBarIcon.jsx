import React from "react";

function SideBarIcon() {
  return (
    <div className="w-[100px] h-screen absolute right-0 top-0 flex flex-col justify-center pr-4">
      <div>
        <svg
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="#1f2937"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default SideBarIcon;
