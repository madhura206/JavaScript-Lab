
document.getElementById('loading').style.display = 'block';

setTimeout(() => {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const table = document.getElementById('fetchTable');
      document.getElementById('loading').style.display = 'none';

      table.innerHTML = `
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Marks</th>
          <th>Grade</th>
        </tr>
      `;

      data.forEach(student => {
        const row = document.createElement('tr');
        if (student.marks > 90) row.classList.add('highlight');

        row.innerHTML = `
          <td>${student.id}</td>
          <td>${student.name}</td>
          <td>${student.marks}</td>
          <td>${student.grade}</td>
        `;
        table.appendChild(row);
      });
    })
    .catch(error => console.error('Fetch Error:', error));
}, 2000); 



$.getJSON('data.json', function(data) {
  const table = $('#jqueryTable');
  table.append(`
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Marks</th>
      <th>Grade</th>
    </tr>
  `);

  $.each(data, function(index, student) {
    const row = $(`
      <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.marks}</td>
        <td>${student.grade}</td>
      </tr>
    `);
    if (student.marks > 90) row.addClass('highlight');
    table.append(row);
  });
}).fail(function() {
  console.error("Error loading JSON data with jQuery.");
});
