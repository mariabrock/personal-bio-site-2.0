import axios from 'axios';
import apiKeys from '../apiKeys.json';
import 'firebase/auth';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjectData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
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
