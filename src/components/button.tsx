"use client";
import { useRouter } from "next/navigation";
import React from "react";
function Button() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div>
      <div className="py-3">
        <button
          className="bg-blue-700 text-white rounded-sm size-1/12 mt-10"
          onClick={handleBack}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Button;
