const Illustration = (props) => {
    const {url, image} = props;
    const pathImage = require(`../../assets/data/images/website/${image}`);

    return (
        <div className="project-image">
            <div className="project-image-content">
                <div className="redirect-to-site">
                    <a href={url} target="_blank">
                        <div className="rond">
                            <div className="text">Aperçu <br/>live</div>
                        </div>
                    </a>
                </div>
                <div className="image">
                    <img src={pathImage} alt="Image Preview Website"/>
                </div>
            </div>
        </div>
    )
}

export default Illustration;