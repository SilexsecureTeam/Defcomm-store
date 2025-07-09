import React, { useState } from "react";
import NavTwo from "../../../../Components/Header/NavTwo";
import { useNavigate } from "react-router-dom";
import HeaderBar from "./HeaderBar";
import ProgramCards from "./ProgramCards";
import AppSubmissionPanel from "./AppSubmissionPanel"; // You’ll create this too

export default function ProgramResources() {
  const [playDisplay, setPlayDisplay] = useState(true);
  const [showpage, setShowPage] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <NavTwo />
      <div className="bg-deffcom-limagradiant py-10 md:py-20">
        <HeaderBar />
        {playDisplay ? (
          <ProgramCards
            setPlayDisplay={setPlayDisplay}
            playDisplay={playDisplay}
          />
        ) : (
          <AppSubmissionPanel showpage={showpage} setShowPage={setShowPage} />
        )}
      </div>
    </>
  );
}
