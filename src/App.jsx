import './index.css'

function App() {
  const nama = "zhara";
  const N = 15; 
  const jam = 9;

  return (
    <>
      <body>
        <h1 className="judul">Kantin {nama}</h1>
        <p>Selamat {jam < 12 ? 'Pagi' : 'Siang'}</p>
        <p>Saldo Awal Kantin Rp: {N * 1000}</p>

        <button disabled>Bayar</button>
      </body>
    </>
  )
}
export default App;