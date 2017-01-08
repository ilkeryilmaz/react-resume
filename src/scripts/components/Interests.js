import React from 'react';

const Interests = props => {
    const getInterests = props.interestData.map(function(item, index) {
  		return (
        <div className="box-list__box" key={index}>
            <h3 className="section-box-title">{item.name} <span>{item.level}</span></h3>
            <div>{item.keywords}</div>
  				</div>
        )
  	});

  	return (
      <section className="section section__interest">
        <h2 className="section__title">Interest</h2>
        <div className="section-content">
          <div className="box-list">
            {getInterests}
          </div>
        </div>
      </section>
  	)
};


export default Interests;
