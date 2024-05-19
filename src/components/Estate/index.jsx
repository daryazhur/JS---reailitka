export const Estate = (props) => {
    return(
        <main>
            <div className="estate">
                <h2>{props.nazev}</h2>
                <img src={props.image} alt="dům"/>
                <p>{props.popis}</p>
                <p>Cena: {props.cena} Kč</p>
                <p>Město: {props.mesto}</p>
                <h3>Kontaktní údaje</h3>
                <p>{props.maklerka}</p>
                <p>{props.email}</p>
                <p>{props.mobil}</p>
            </div>
        </main>
    )
}