import LabelHarga from './LabelHarga.jsx'

function kartuMenu({nama, harga, kategori="Makanan"}) {
    return(
        <>
        <div className="kartu">
            <h1>{nama}</h1>
            <LabelHarga nilai={harga} />
            <p>Kategori: {kategori}</p>
        </div>
        </>
    )
}
export default kartuMenu