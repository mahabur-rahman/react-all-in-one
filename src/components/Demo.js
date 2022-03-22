import { useState, useEffect } from "react";

function getSessionStorageOrDefault(key, defaultValue) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

function Demo() {
  const [termsAccepted, setTermsAccepted] = useState(
    getSessionStorageOrDefault("terms", false)
  );

  useEffect(() => {
    sessionStorage.setItem("terms", JSON.stringify(termsAccepted));
  }, [termsAccepted]);

  if (!termsAccepted) {
    return (
      <>
        <h1>Terms of Service</h1>
        <p>These are the terms for using the application.</p>
        <button
          onClick={() => {
            setTermsAccepted(true);
          }}
        >
          I accept
        </button>
      </>
    );
  }

  return <div>This is the application</div>;
}
export default Demo;
