import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBar from "../../Components/store/HeaderBar";
import ProgramCards from "./ProgramCards";

export default function ProgramResources() {
  const [playDisplay, setPlayDisplay] = useState(true);
  const [showpage, setShowPage] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="py-10 md:py-20">
        <ProgramCards
          setPlayDisplay={setPlayDisplay}
          playDisplay={playDisplay}
        />
      </div>
    </>
  );
}
