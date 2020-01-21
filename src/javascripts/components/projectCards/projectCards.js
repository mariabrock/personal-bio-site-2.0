import './projectCards.scss';
import projectData from '../../helpers/data/projectsData';
import utilities from '../../helpers/utilities';

const displayProjectCards = () => {
  projectData.getProjectData()
    .then((projects) => {
      let domString = '';
      projects.forEach((project) => {
        domString += `
        <div id="card">
          <div id="card-body col-sm-4">
            <h2 id="title">${project.title}</h2>
            <a href=${project.url}><img src="${project.screenshot}" alt="Image of ${project.title}" /></a>
            <p>${project.description}</p>
            <p>${project.technologiesUsed}</p>
            <a href=${project.url} class="btn btn-outline-dark">View Site</a>
            <a href=${project.githubUrl} class="btn btn-light">View GitHub</a>
          </div>
        </div>
        `;
      });
      utilities.printToDom('projectsText', domString);
    })
    .catch((error) => console.error(error));
};

export default { displayProjectCards };
