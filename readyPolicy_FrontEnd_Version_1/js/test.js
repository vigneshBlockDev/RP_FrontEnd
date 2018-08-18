(function renderElements(){
  let compare_Table = document.getElementById('Compare_Table');
  let output = '';
  for(let i=0;i<=2;i++){

    for(let j=0;j<=2;j++){
      output += `<table id="Test" border="1"><tr>`;
      output += `<td>${IDV}</td>`;
      output += `<td>${i,j+`Vignesh`}</td>`;
      output += `<td>${i,j+`Vignesh`}</td>`;
      output += `</tr>`;
      output += `<tr>`;
      output += `<td>${i,j+`Vignesh`}</td>`;
      output += `<td>${i,j+`Vignesh`}</td>`;
      output += `<td>${i,j+`Vignesh`}</td>`;
      output += `</tr>`;
      output += `</table>`;
    }
    
  }
compare_Table.innerHTML = output;
})();