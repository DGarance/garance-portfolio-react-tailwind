import React from "react";

export default function Tag(props) {
  return (
    <span className="inline-flex items-center mr-2 rounded-md bg-gray-50 px-4 py-3 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
      {props.tags}
    </span>
  );
}
