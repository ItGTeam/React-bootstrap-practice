import axios from "axios";
const SERVER_URL = "http://localhost:9000";

//Get http://localhost:9000/introData
//Get Introduction
export const getIntro = () => {
    const url = `${SERVER_URL}/introData`
    return axios.get(url);
}
//Get http://localhost:9000/aboutMeData
//Get aboutMeData
export const getAboutMe = () => {
    const url = `${SERVER_URL}/aboutMeData`
    return axios.get(url);
}
//Get http://localhost:9000/resumeData
//Get resumeData
export const getResumeData = () => {
    const url = `${SERVER_URL}/resumeData`
    return axios.get(url);
}
//Get http://localhost:9000/testimonialsData
//Get testimonialsData
export const getTestimonialsData = () => {
    const url = `${SERVER_URL}/testimonialsData`
    return axios.get(url);
}
//Get http://localhost:9000/ContactData
//Get ContactData
export const getContactData = () => {
    const url = `${SERVER_URL}/ContactData`
    return axios.get(url);
}
//Get http://localhost:9000/skillsBackendDevelopment
//Get skillsBackendDevelopment
export const getSkillsBackendDevelopment = () => {
    const url = `${SERVER_URL}/skillsBackendDevelopment`
    return axios.get(url);
}
//Get http://localhost:9000/skillsSpokenLanguages
//Get skillsSpokenLanguages
export const getSkillsSpokenLanguages = () => {
    const url = `${SERVER_URL}/skillsSpokenLanguages`
    return axios.get(url);
}
//Get http://localhost:9000/skillsFrontendDevelopment
//Get skillsFrontendDevelopment
export const getSkillsFrontendDevelopment = () => {
    const url = `${SERVER_URL}/skillsFrontendDevelopment`
    return axios.get(url);
}