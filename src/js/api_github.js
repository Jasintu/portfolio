async function getGitHubSpi() {
    const repositoriesInput = ['STATELLEBR', 'CloscaBottle'];
    const repositoriesList = document.getElementById('proj');
    repositoriesList.innerHTML = ''; // Limpa o conteúdo anterior

    try {
        const response = await fetch(`https://api.github.com/users/Jasintu/repos`);
        const repositories = await response.json();

        if (response.ok) {
            repositories.forEach(async repo => {
                if (repositoriesInput.includes(repo.name)) {
                    const projectPreview = document.createElement('div');
                    projectPreview.classList.add('proj');

                    const title = document.createElement('h1');
                    title.textContent = repo.name.toUpperCase(); // Torna o título maiúsculo

                    const rightSideProject = document.createElement('div');
                    rightSideProject.classList.add('rigth_side_project');

                    const descriptionTitle = document.createElement('h2');
                    descriptionTitle.textContent = 'Descrição';

                    const description = document.createElement('div');
                    description.classList.add('description');

                    const technologiesHeader = document.createElement('h2');
                    technologiesHeader.textContent = 'TECNOLOGIAS';

                    const technologiesList = document.createElement('ul');
                    technologiesList.classList.add('techno-list');

                    const paragraph = document.createElement('p');
                    paragraph.textContent = repo.description || "Descrição não disponível"; // Exibe a descrição do repositório ou "Descrição não disponível" se não houver descrição

                    const date = document.createElement('span');
                    date.textContent = 'Última atualização: ' + new Date(repo.updated_at).toLocaleDateString(); // Exibe a data do último update do repositório
                    date.classList.add("date_proj");

                    description.appendChild(technologiesHeader);
                    description.appendChild(technologiesList);
                    description.appendChild(descriptionTitle);
                    description.appendChild(paragraph);
                    description.appendChild(date);

                    const siteButton = createButton('VISITE O SITE', `https://${repo.owner.login}.github.io/${repo.name}`); // Adiciona link para o site hospedado no GitHub Pages
                    const repoButton = createButton('CHEQUE REPOSITÓRIO', repo.html_url); // Adiciona link para o repositório no GitHub

                    // Adiciona a imagem de pré-visualização
                    const previewImageUrl = await getPreviewImage(repo.name);
                    if (previewImageUrl) {
                        const previewImage = document.createElement('img');
                        previewImage.src = previewImageUrl;
                        previewImage.classList.add('preview-image');
                        previewImage.style.width = '320px'; // Definir largura como 300px
                        previewImage.style.height = '180px'; // Definir altura como 160px
                        rightSideProject.appendChild(previewImage);
                    }

                    rightSideProject.appendChild(description);
                    rightSideProject.appendChild(siteButton);
                    rightSideProject.appendChild(repoButton);

                    projectPreview.appendChild(title);
                    projectPreview.appendChild(rightSideProject);

                    repositoriesList.appendChild(projectPreview);

                    // Extração e exibição das tecnologias
                    const languagesResponse = await fetch(repo.languages_url);
                    const languagesData = await languagesResponse.json();
                    const technologiesUsed = Object.keys(languagesData);
                    technologiesUsed.forEach(tech => {
                        const techItem = document.createElement('li');
                        techItem.textContent = tech;
                        techItem.classList.add('tech-item');
                        technologiesList.appendChild(techItem);
                    });

                    // Adiciona título "Descrição" após a lista de tecnologias
                }
            });
        } else {
            repositoriesList.textContent = 'Erro ao recuperar repositórios.';
        }
    } catch (error) {
        console.error('Erro ao obter os repositórios:', error);
    }
}

function createButton(text, link) {
    const button = document.createElement('a');
    button.classList.add('site_btn');
    button.textContent = text;
    button.href = link;
    button.target = "_blank";

    const span = document.createElement('span');
    span.classList.add('material-symbols-outlined');
    span.textContent = 'trending_flat';

    button.appendChild(span);

    return button;
}

async function getPreviewImage(repoName) {
    try {
        const response = await fetch(`https://api.github.com/repos/Jasintu/${repoName}/contents/preview.PNG`);
        if (response.ok) {
            const imageData = await response.json();
            return imageData.download_url;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Erro ao obter a imagem de pré-visualização:', error);
        return null;
    }
}

getGitHubSpi();
