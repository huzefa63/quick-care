"use client";

const { useState } = require("react");

export default function TextExpander({ children,placeholder,icon }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = isExpanded ? children : children.slice(0, 80);
  return (
    <div className="">
      <span className="font-bold flex gap-1 items-center">{icon} {placeholder}</span> <span className="mr-1">{text}</span>
      {text.length > 90 && <button className="font-bold text-sm text-blue-400" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "...read less" : "...read more"}
      </button>}
    </div>
  );
}
