import { useState } from "react"
import { LanguageContext } from "./LanguageContext"
import { Clock } from "./Clock"

function App() {
  const [language, setLanguage] = useState("en")

  function handleSetLanguage(language) {
    setLanguage(language)
  }

  return (
    <div>
      <button onClick={() => handleSetLanguage("es")}>ES</button>
      <button onClick={() => handleSetLanguage("en")}>EN</button>
      <LanguageContext.Provider value = {language}>
        <Clock />
      </LanguageContext.Provider>
    </div>
  )
}

export default App
