fetch('db.json')
  .then(response => response.json())
  .then(data => {
    const publishedData = data.filter(item => item.published === true);
    const papers = document.getElementById('papers');
    publishedData.forEach(item => {
      const divElement = document.createElement('div');
      const title = document.createElement('h2');
      const year = document.createElement('p');

      title.textContent = item.title;
      /*adding link with # reference in db.json for now*/
      title.style.cursor = "pointer"; 
      title.addEventListener('click', () => {
        if (item.link !== '') {
          window.location.href = item.link;
        }
      });

      year.textContent = item.year;

      divElement.appendChild(title);
      divElement.appendChild(year);
      papers.appendChild(divElement);
    });
  })
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });