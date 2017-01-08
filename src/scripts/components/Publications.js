import React from 'react';
import moment from 'moment';

const Publications = (props) => {
    const getPublications = props.publicationData.map(function(item, index) {
  		const releaseDate = moment(item.releaseDate).format('MMM, YYYY');
  		return (
        <div className="box-list__box" key={index}>
            <h3 className="section-box-title"><a href={item.website} target="_blank">{item.name}</a></h3>
            <span>{item.publisher}</span>
            <div>{releaseDate}</div>
            <div>{item.summary}</div>
          </div>
        )
  	});

  	return (
      <section className="section section__publications">
        <h2 className="section__title">Publications</h2>
        <div className="section-content">
          <div className="box-list">
            {getPublications}
          </div>
        </div>
      </section>
  	)
};

export default Publications;
