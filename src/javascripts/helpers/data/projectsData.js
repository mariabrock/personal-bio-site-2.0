import axios from 'axios';
import apiKeys from '../apiKeys.json';
import 'firebase/auth';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getProjectData = () => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/projects.json`)
    .then((response) => {
      const demProjects = response.data.projects;
      const projects = [];
      Object.keys(demProjects).forEach((projectId) => {
        demProjects[projectId].id = projectId;
        projects.push(demProjects[projectId]);
      });
      resolve(projects);
    })
    .catch((error) => reject(error));
});


export default { getProjectData };
