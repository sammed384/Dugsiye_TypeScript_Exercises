import AgeForm from "./AgeForm"
import ContactForm from "./ContactForm"
import EmailForm from "./EmailForm"


function App() {


  return (
    <>
      <EmailForm onSubmit={(email) => console.log(email)} />
      <AgeForm onSubmit={(age) => console.log(age)} />
      <ContactForm onSubmit={(data) => console.log(data.name, data.email)} />

    </>
  )
}

export default App
