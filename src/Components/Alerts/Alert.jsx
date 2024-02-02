import { useContext } from "react";
import { AppState } from "../../App";

import Abandon from "./Abandon";
import Complete from "./Complete";

export default function Alert(props) {
  const { alert, setAlert } = useContext(AppState);

  return (
    // overlay
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="bg-gray-600 dark:bg-slate-700 dark:bg-opacity-80 bg-opacity-80 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full grid place-items-center"
    >
      {/* modals */}
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {alert === "complete" && <Complete />}
        {alert === "abandon" && <Abandon />}
      </div>
    </div>
  );
}
