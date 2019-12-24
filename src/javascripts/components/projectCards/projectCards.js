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
            <img src="${project.screenshot}" alt="Image of ${project.title}" />
            <p>${project.description}</p>
            <p>${project.technologiesUsed}</p>
            <p id="linkToProject">${project.url}</p>
          </div>
        </div>
        `;
      });
      utilities.printToDom('projectsText', domString);
    })
    .catch((error) => console.error(error));
};

export default { displayProjectCards };
