function Panel({judul, children}) {
    return (
        <>
    <div>
        <h1>{judul}</h1>
        {children}
    </div>
    </>
    )
}
export default Panel