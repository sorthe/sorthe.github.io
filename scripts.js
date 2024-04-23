document.addEventListener("DOMContentLoaded", function() {
    fetchProjects();
});

async function fetchProjects() {
    const response = await fetch('/projects');
    const projectFiles = await response.json();

    const projectList = document.getElementById('projectList');

    projectFiles.forEach(function(file) {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const projectName = document.createElement('h2');
        projectName.textContent = file.name;
        projectDiv.appendChild(projectName);

        const projectContent = document.createElement('div');
        projectContent.classList.add('project-content');

        // Fetch project content and append it here
        fetch(file.download_url)
            .then(response => response.text())
            .then(content => {
                projectContent.innerHTML = content;
            });

        projectDiv.appendChild(projectContent);

        projectList.appendChild(projectDiv);
    });
}
