import './index.css'
import Panel from './components/Panel.jsx'
import KartuMenu from './components/KartuMenu.jsx'

function App() {
  const nama = "zhara";
  const N = 15; 
  const jam = 9;

  return (
    <>
      <h1 className="judul">Kantin {nama}</h1>
        <p>Selamat {jam < 12 ? 'Pagi' : 'Siang'}</p>
        <p>Saldo Awal Kantin Rp: {N * 1000}</p>

        <button disabled>Bayar</button>

        <div>
          <Panel judul="Menu Hari Ini">
            <KartuMenu nama="Nasi Ayam Geprek" harga={13700} />
            <KartuMenu nama="Es Teh Lemon" harga={6000} kategori="Minuman"/>
            <KartuMenu nama="Mie Goreng Telur" harga={12000}/>
          </Panel>
        </div>
    </>
  )
}
export default App