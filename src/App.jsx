
export default function App() {
  
  var nome = "Jorge"
  const time =[
    "Construção",
    "MegaTrampo"];

  return (
    <>
    <div>
    <h1>React+Vite</h1>
    
    <h2>RM98402</h2>

      <p>Melhor pedreiro: {nome}</p>

    <ul>
      {time.map((item,key) =>
      <li key={key}>{item} </li>
      )}
    </ul>

    </div>
    </>
    
    
  )
}
