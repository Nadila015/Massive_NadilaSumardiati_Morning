import Link from "./components/Link"
function App() {


  return (
    <div
      className="w-full min-h-screen " style={{  
        backgroundImage: "url('https://images.unsplash.com/photo-1632243313737-e03f05bd09db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}> 
      <div className="max-w-2xl w-full mx-auto py-8 flex flex-col items-center gap-5 px-3 md:px-0">
        <div className="flex flex-col gap-5 items-center ">
          <div className=" flex gap-4">
          
          <img src="img1.jpeg" alt="foto" className="w-52 h-54 rounded-full" />
          
          </div>
          <h1 className="text-xl md:text-4xl font-bold text-center">Nadila Sumardiati</h1>
          </div>
         <Link text="Instagram" url="https://instagram.com/nadilaardd?igshid=OTk0YzhjMDVlZA=="/>
         <Link text="Youtube" url="https://youtube.com/@nadilasumardiati7376"/>
         <Link text="Twitter" url="https://twitter.com/munndla?t=P8yCvG22PnzWfcqOwXmqVw&s=08"/>
         <Link text="Facebook" url="https://www.facebook.com/munndla?mibextid=ZbWKwL"/>
         <Link text="LinkedIn" url="https://www.linkedin.com/in/nadila-sumardiati-261123276/"/>
      </div>
      
    </div>
  )
}

export default App
