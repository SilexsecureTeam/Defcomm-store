import React, { useState } from "react";
import NavTwo from "../../../../Header/NavTwo";
import { useNavigate } from "react-router-dom";
import HeaderBar from "./HeaderBar";
import ProgramCards from "./ProgramCards";
import AppSubmissionPanel from "./AppSubmissionPanel"; // You’ll create this too

export default function ProgramResources() {
  const [playDisplay, setPlayDisplay] = useState(true);
  const [showpage, setShowPage] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/appSub");
  };

  return (
    <>
      <NavTwo />
      <div className="bg-deffcom-limagradiant py-10 md:py-20">
        <HeaderBar
          showpage={showpage}
          setShowPage={setShowPage}
          playDisplay={playDisplay}
          setPlayDisplay={setPlayDisplay}
          handleClick={handleClick}
        />
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
