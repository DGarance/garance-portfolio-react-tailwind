import React from "react";
import profilPic from "../../assets/Garance-profil.jpg";

export default function Profil() {
  return (
    <div>
      <img
        className="w-96 h-96 rounded-full object-cover justify-self-center mb-2"
        src={profilPic}
        alt="Pic de Garance"
      />
    </div>
  );
}
