const Texte = (props) => {
    const {titre, description, tags} = props;

    return (
        <div className="project-explanation">
            <div className="titre">
                <h1>{titre}</h1>
            </div>
            <div className="tags">
                {
                    tags.map((tag) => (
                        <div className="tag">
                            <p>{tag}</p>
                        </div>
                    ))
                }
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Texte;