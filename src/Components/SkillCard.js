

const SkillCard = ({name, image,catagory}) => {
    return (
        <div className="projectCard" id="card">
            <div className="imgBorder">
                <img src={image} alt={name} id="cardImage"/>
            </div>
            
            <h4>{name}</h4>
        </div>
    )
}

export default SkillCard