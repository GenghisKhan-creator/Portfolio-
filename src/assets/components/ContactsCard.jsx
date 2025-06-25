// src/components/CardSpotlightDemo.jsx
import React from "react";
import { CardSpotlight } from "./card-spotlight"; // Ensure this path is correct

// Use React.forwardRef here to ensure the ref from App.js reaches CardSpotlight
export const CardSpotlightDemo = React.forwardRef((props, ref) => {
  return (
    // Pass the ref to the CardSpotlight component
    <CardSpotlight ref={ref} className="h-96 w-96">
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        Contact Information
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        You can reach me on these contacts:
        <ul className="list-none mt-5">
          <Step title="My email address" />
          <li className="mb-4">
            <a href="mailto:gideonissah7@gmail.com">gideonissah7@gmail.com</a>
          </li>
          <Step title="My Phone Number" />
          <li>
            <a href="tel:+233503432413">+233 50 343 2413</a>
          </li>
        </ul>
      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-sm">
        Hoping to hear from you soon! I prioritize rapid communication, so rest
        assured, I'll get back to you within 4 minutes.
      </p>
    </CardSpotlight>
  );
});

// Your Step and CheckIcon components remain the same
const Step = ({ title }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};