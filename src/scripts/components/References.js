import React from 'react';

const References = props => {
    const getReferences = props.refData.map(function(item, index) {
  		return (
        <div className="box-list__box" key={index}>
            <h3 className="section-box-title">{item.name}</h3>
            <div>{item.reference}</div>
  				</div>
        )
  	});

  	return (
      <section className="section section__references">
        <h2 className="section__title">References</h2>
        <div className="section-content">
          <div className="box-list">
            {getReferences}
          </div>
        </div>
      </section>
  	)
};


export default References;
