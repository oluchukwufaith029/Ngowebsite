 const Vision = ({  image,  title, info, }) => {
  return(  
          <article className="tour-card">
          <div className="tour-img-container">
            <img src={image} className="vision-img" alt={title} />
           
          </div>
          <div className="vision-info">
            <div className="vision-title">
              <h4>{title}</h4>
            </div>
            <p>{info}</p>
            <div className="vision-footer">
                
            </div>
          </div>
        </article>
  );
};
export default Vision;