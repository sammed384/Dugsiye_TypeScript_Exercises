// import useNumberStorage from "./hooks/useNumberStorage";
// import useSettingsStorage from "./hooks/useSettingsStorage";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  // const [score, setScore] = useNumberStorage("score", 10);

  // const [settings, setSettings] = useSettingsStorage("settings", {
  //   language: "fr",
  //   notifications: true,
  // });

  // number
  const [score, setScore] = useLocalStorage<number>("score", 0);

  // object
  const [settings, setSettings] = useLocalStorage<{
    language: string;
    notifications: boolean;
  }>("settings", {
    language: "en",
    notifications: false,
  });

  return (
    <>
      <h1>Score: {score}</h1>
      <p>Language: {settings.language}</p>
      <p>Notifications: {settings.notifications ? "On" : "Off"}</p>

      <button onClick={() => setScore(score + 1)}>
        Increase Score
      </button>

      <button
        onClick={() =>
          setSettings({
            language: "fr",
            notifications: true,
          })
        }
      >
        Change Settings
      </button>
    </>
  );
}

export default App;
