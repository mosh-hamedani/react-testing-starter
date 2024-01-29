import { Button } from "@radix-ui/themes";
import { useState } from "react";

function Onboarding() {
  const [isTutorialCompleted, setTutorialCompleted] = useState(
    localStorage.getItem("tutorialCompleted") === "true"
  );

  const markTutorialCompleted = () => {
    localStorage.setItem("tutorialCompleted", "true");
    setTutorialCompleted(true);
  };

  return (
    <div>
      {isTutorialCompleted ? (
        <div>
          <h1>Welcome back!</h1>
          <p>You've already completed the tutorial.</p>
        </div>
      ) : (
        <div>
          <h1>Welcome to our app!</h1>
          <p>Complete the tutorial to get started.</p>
          <Button onClick={markTutorialCompleted}>
            Mark Tutorial as Completed
          </Button>
        </div>
      )}
    </div>
  );
}

export default Onboarding;
