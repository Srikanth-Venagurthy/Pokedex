import React, { useState } from "react";
import "./PromptInstall.scss";

const PromptInstall = ({ closeModal }) => {
    const [downloadPWA, setDownloadPWA] = useState(false)

    let deferredPrompt;
    window.addEventListener("beforeinstallprompt", (e) => {
      deferredPrompt = e;
    });

    const installApp = document?.getElementById("installApp");
    installApp?.addEventListener("click", async () => {
      if (deferredPrompt !== null) {
        deferredPrompt?.prompt();
        const { outcome } = await deferredPrompt?.userChoice;
        if (outcome === "accepted") {
            localStorage.setItem("app_installed", true)
            sessionStorage.setItem("install_app", false);
          deferredPrompt = null;
        } else {
            localStorage.setItem("app_installed", false)
            sessionStorage.setItem("install_app", false);
        }
      }
    });
  return (
    <div className="modal-background prompt-mod">
      <div className="modal-container">
        <div className="modal-closebtn">
          <button
            onClick={() => {
                closeModal(false);
                sessionStorage.setItem("install_app", false);
            }}
          >
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            Quick and easy way to shop and save. Click to Download
            <br />
          </p>
        </div>
        <div className="modal-footer">
          <button
            onClick={() => {
                closeModal(false);
                sessionStorage.setItem('install_app', false)
            }}
            className="no-btn"
          >
            Cancel
          </button>
          <button id="installApp"
            onClick={() => {
                setDownloadPWA(true)
                closeModal(false);
            }}
          >
            {" "}
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptInstall;
