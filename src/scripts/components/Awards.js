import React from 'react';
import moment from 'moment';

const Awards = props => {
    const getAwards = props.awardsData.map(function(item, index) {
  		const date = moment(item.startDate).format('MMM, YYYY');
  		return (
        <div className="box-list__box" key={index}>
            <h3 className="section-box-title">{item.title}</h3>
            <span>{date}</span>
            <div>{item.awarder}</div>
            <div>{item.summary}</div>
  				</div>
        )
  	});

  	return (
      <section className="section section__awards">
        <h2 className="section__title">Awards</h2>
        <div className="section-content">
          <div className="box-list">
            {getAwards}
          </div>
        </div>
      </section>
  	)
};

export default Awards;
