

const Anchor = ({cName,name}) => {
    return (
        <div className="anch">
             <i className={cName} title={name}></i> <span>{name}</span>
        </div>
       
    )
}


export default Anchor;