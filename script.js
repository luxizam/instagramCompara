
fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    return response.json();
  })
  .then(data => {
    const usuariosList = document.getElementById('usuarios');
    
    // Recorre el array "usuarios" y crea elementos de lista
    data.users.forEach(objeto => {
      const listItem = document.createElement('li');
      listItem.textContent = `Nombre: ${objeto.nombre}, Edad: ${objeto2.edad}`;
      usuariosList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });