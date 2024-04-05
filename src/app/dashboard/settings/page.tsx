"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Setting() {
  const router = useRouter();

  const handleBlog = () => {
    const number = Math.random();
    if (number < 0.5) {
      router.push("/blog");
    } else {
      alert(number);
    }
  };

  return <div>This is a Setting page </div>;
}

export default Setting;
