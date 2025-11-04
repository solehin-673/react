function Hc({children,br}){
    return(
        <div style={{color:"red",border:br}}>
            <h1>html and css passing...</h1>
            {children}
            {/* by using children we get the html written inside tag */}
        </div>
    )
}

export default Hc;