import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import DevModeWaitingScreen from "../../Components/store/apps/DevModeWaitingScreen";
import AppForm from "./AppForm";

export default function AppSubmissionForm() {
  const { authDetails } = useContext(AuthContext);

  if (!authDetails?.user?.isDevMode) {
    return <DevModeWaitingScreen />;
  }

  return <AppForm />;
}
