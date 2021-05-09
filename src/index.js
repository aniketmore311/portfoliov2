import data from "./data.json";
console.log(data);

function main() {
  let flag = true;
  setInterval(function () {
    let cursor = document.querySelector(".hero__cursor");
    //   console.log(cursor.style.backgroundColor);
    if (flag) {
      cursor.style.backgroundColor = "#1a202c";
      flag = !flag;
    } else {
      cursor.style.backgroundColor = "#4fd1c5";
      flag = !flag;
    }
  }, 500);
  // setting html
  let projectSectionTitle = `<h2 class="type-h2 project-section__title">Projects</h2>`;
  let html = "";
  html = html.concat(projectSectionTitle);
  data.projects.forEach((project) => {
    html = html.concat(generateProjectCardView(project));
  });
  document.querySelector("#project-section").innerHTML = html;
}

main();

function generateProjectCardView(project) {
  return `
    <div class="project-card">
        <h3 class="type-h4 project-card__title">${project.title}</h3>
        <p class="type-h5 project-card__description">${project.description}</p>
        ${generateTechListView(project.technologies)}
        <div class="btn-group">
            <a target="_blank"  href="${
              project.demoLink
            }" class="type-btn btn-group__btn"><i class="fas fa-globe btn-group__icon"></i>
                DEMO</a>
            <a target="_blank"  href="${
              project.codeLink
            }" class="type-btn btn-group__btn"><i class="fab fa-github btn-group__icon"></i>
                CODE</a>
        </div>
    </div>
  `;
}

function generateTechListView(list) {
  console.log(list);
  let html = "";
  let techListOpening = `<div class="tech-list">`;
  let techListClosing = `</div>`;
  html = html.concat(techListOpening);
  list.forEach((element) => {
    html = html.concat(generateTechListItemView(element));
  });
  html = html.concat(techListClosing);
  return html;
}

function generateTechListItemView(item) {
  return `
    <div class="type-btn tech-list__item">${item}</div>
  `;
}
