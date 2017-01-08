import React from 'react';

const Languages = props => {
    const getLanguages = props.languageData.map(function(item, index) {
  		return (
        <div className="box-list__box" key={index}>
            <h3 className="section-box-title">{item.name}</h3>
            <div>{item.level}</div>
  				</div>
        )
  	});

  	return (
      <section className="section section__Languages">
        <h2 className="section__title">Languages</h2>
        <div className="section-content">
          <div className="box-list">
            {getLanguages}
          </div>
        </div>
      </section>
  	)
};


export default Languages;
