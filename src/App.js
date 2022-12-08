import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import { useState, useEffect } from 'react';

import { getIntro, getAboutMe, getResumeData, getTestimonialsData, getContactData, getSkillsFrontendDevelopment, getSkillsSpokenLanguages, getSkillsBackendDevelopment } from './services/contactService';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
function App() {

  const [introData, setIntroData] = useState({});
  const [aboutMeData, setAboutMeData] = useState({});
  const [resumeData, setResumeData] = useState({});
  const [skillsFrontendDevelopment, setSkillsFrontendDevelopment] = useState({});
  const [skillsSpokenLanguages, setSkillsSpokenLanguages] = useState({});
  const [skillsBackendDevelopment, setSkillsBackendDevelopment] = useState({});
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [contactData, setContactData] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: ResumeData } = await getResumeData();
        const { data: skillsFrontendDevelopment } = await getSkillsFrontendDevelopment();
        const { data: skillsSpokenLanguages } = await getSkillsSpokenLanguages();
        const { data: skillsBackendDevelopment } = await getSkillsBackendDevelopment();

        setResumeData(ResumeData);
        setSkillsFrontendDevelopment(skillsFrontendDevelopment);
        setSkillsSpokenLanguages(skillsSpokenLanguages);
        setSkillsBackendDevelopment(skillsBackendDevelopment);

      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: personIntroData } = await getIntro();
        const { data: aboutMeData } = await getAboutMe();
        const { data: testimonialsData } = await getTestimonialsData();
        const { data: contactData } = await getContactData();

        setIntroData(personIntroData);
        setAboutMeData(aboutMeData);
        setTestimonialsData(testimonialsData);
        setContactData(contactData);

      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Intro introData={introData} />
      <AboutMe aboutMeData={aboutMeData} />
      <Resume resumeData={resumeData}
        skillsFrontendDevelopment={skillsFrontendDevelopment}
        skillsSpokenLanguages={skillsSpokenLanguages}
        skillsBackendDevelopment={skillsBackendDevelopment} />
      <Testimonials testimonialsData={testimonialsData} />
      <Contact contactData={contactData} />
      <Footer />
    </div>
  );
}

export default App;
