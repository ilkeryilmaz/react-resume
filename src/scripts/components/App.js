import React from 'react'

// Get Components
import Profile from './Profile'
import Work from './Work'
import Volunteer from './Volunteer'
import Education from './Education'
import Awards from './Awards'
import Publications from './Publications'
import Skills from './Skills'
import Languages from './Languages'
import References from './References'
import Interests from './Interests'




const App = props => {
  const profileData = props.jsonObj.basics;
  const workData = props.jsonObj.work;
  const volunteerData = props.jsonObj.volunteer;
  const educationData = props.jsonObj.education;
  const awardsData = props.jsonObj.awards;
  const publicationData = props.jsonObj.publications;
  const skillsData = props.jsonObj.skills;
  const languageData = props.jsonObj.languages;
  const interestData = props.jsonObj.interests;
  const refData = props.jsonObj.references;

  return (
    <div className="container">
      <div className="left-container">
        <Profile profileData={profileData}/>
      </div>
      <div className="right-container">
        <Work workData={workData}/>
        <Education educationData={educationData}/>
        <Skills skillsData={skillsData} />
        <Languages languageData={languageData} />
        <Volunteer volunteerData={volunteerData}/>
        <Awards awardsData={awardsData}/>
        <Publications publicationData={publicationData}/>
        <Interests interestData={interestData} />
        <References refData={refData} />
      </div>
    </div>
  )
}

export default App
