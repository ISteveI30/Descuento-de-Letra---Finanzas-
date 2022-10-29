if(sessionStorage.getItem("letra") == undefined) {
console.log("espere datos");
}else {
  obtenido = JSON.parse(sessionStorage.getItem("letra"));
  console.log(obtenido);
  obtenido.forEach((element) => {
    document.getElementById("tbody").innerHTML += `
    
      <tr>
        <td>${element._valorNeto}</td>
        <td>${element._dias}</td>
        <td>${element._tasaDescontada}</td>
        <td>${element._tep}</td>
        <td>${element._descuento}</td>
        <td>${element._costesIniciales}</td>
        <td>${element._costesFinales}</td>
        <td>${element._valorRecibido}</td>
        <td>${element._valorEntregado}</td>
        <td>${element._tcea}</td>
      </tr>
      `;
  });

}
