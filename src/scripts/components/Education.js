import React from 'react';
import moment from 'moment';

const Education = props => {
    const getEducation = props.educationData.map(function(item, index) {
  		const startdate = moment(item.startDate).format('MMM, YYYY');
  		const enddate = moment(item.endDate).format('MMM, YYYY');
  		return (
          <div className="box" key={index}>
            <h3 className="section-box-title">{item.studyType} {item.area}</h3>
  				  <span>{item.institution}</span>
  				  <div>Studied: {startdate} - {enddate}</div>
  				</div>
        )
  	});

  	return (
      <section className="section section__education">
        <h2 className="section__title">Education</h2>
        <div className="section-content">
          <div className="box-list">
            {getEducation}
          </div>
        </div>
      </section>
  	)
};

export default Education;
