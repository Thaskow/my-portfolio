import etudes from "../../assets/data/etudes.json";

function Etudes() {
    return (
        <div className="etudes">
            <div className="animation">
                <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
            <h1>Etudes</h1>
            <div className="formations">
            {etudes.reverse().slice(0, 3).reverse().map((etude) => (
                <div className="formation">
                    <a href={etude.lien} target='_blank' rel='noreferrer'>
                        <div className="etude">
                            <div className="niveau">
                                <p>{etude.niveau}</p>
                            </div>
                            <div className="diplome" title={etude.dSignification}>
                                <p>{etude.diplome}</p>
                            </div>
                        </div>
                        <div className="option" title={etude.oSignigication}>
                            <p>{etude.option}</p>
                        </div>
                        <div className="zone">
                            <div className="etablissement">
                                <p>{etude.etablissement}, {etude.ville}</p>
                            </div>
                        </div>
                        <div className="annee">
                            <p>{etude.annee}</p>
                        </div>
                    </a>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Etudes;