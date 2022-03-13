

const Project = ({ name, image, git,description }) => {
    const tar ='_blank'
console.log(name)
    return (

        <div className="projectCard" id="certCard">
            <div className="imageContainer">
                <img src={image} alt={name} />
            </div>

            <div className="restContainer">
                <h2>{name}</h2>
                <div className="pholder">
                <p>{description}</p></div>

                <div className="bholder">
                    <button><a href={git} target={tar}>Check it on Github</a></button>
                </div>
            </div>
        </div>
    )
}

export default Project;