import React from 'react';
import moment from 'moment';

const Work = (props) => {
  const getWork = props.workData.map(function(item, index) {
     let getEndDate;
     const startDate = moment(item.startDate).format('MMM, YYYY');
     if (item.endDate == '') {
       getEndDate = "Present"
     }else {
       getEndDate =
       getEndDate = moment(item.endDate).format('MMM, YYYY');
     }
     return (
         <div className="box-list__box" key={index}>
           <h3 className="section-box-title">{item.company}</h3>
           <span>{item.position}</span>
           <div>{startDate} - {getEndDate}</div>
           <div>{item.summary}</div>
         </div>
     )
  });

  return  (
    <section className="section section__work">
      <h2 className="section__title">Work</h2>
      <div className="section-content">
        <div className="box-list">
          {getWork}
        </div>
      </div>
    </section>
  );
};

export default Work;
