import LinkForm from "./components/LinkForm";
import logo_LinkTrim from "../images/logo_LinkTrim.webp"

function App() {
  return (
    <div className="h-screen bg-black px-3 md:px-20 pt-6">
      {/* <h1 className="text-5xl font-bold  text-[#ac6efe]">Hello world!</h1> */}
      <img src={logo_LinkTrim} alt="" className="h-16" />

      <div className="flex flex-col justify-center">
        <LinkForm />
      </div>
    </div>
  );
}

export default App;