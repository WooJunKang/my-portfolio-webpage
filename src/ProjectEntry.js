import React from 'react';

function ProjectEntry(props) {
  const { img, title, date, description, id, tags } = props.data;
  const bgStyle = { bgImg: `url(${img})` };
  return (
    <div className="card-grid-space" style={{ bgStyle }}>
      <a className="card" >
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="date">{date}</div>
          <div className="tags">
            {tags.map(tag => {
              return (
                <div className="tag">{tag}</div>
              )
            })}
          </div>
        </div>

      </a>
    </div >
  );
}


export default ProjectEntry;