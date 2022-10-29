arrayCostesIniciales = [];
arrayCostesFinales = [];
sumaCostesIniciales = 0;
sumaCostesFinales = 0;
/**costos iniciales */
let addString = () => {
  selectedTextInicial = select1.options[select1.selectedIndex].innerText;
  costeInicial = parseInt(cboCosteInicial.value); 
  let select = document.querySelector("#add-data");
  const option = document.createElement("option");
  option.id += "ci";
  option.value = cboCosteInicial.value;
  option.text = selectedTextInicial + " = " + cboCosteInicial.value;
  arrayCostesIniciales.push(costeInicial);
  select.appendChild(option);
  console.log(option);
  console.log(arrayCostesIniciales);
  cboCosteInicial.value = "";
  select1.selectedIndex = 0;
};
let sumarCostesIniciales = () => {
  arrayCostesIniciales.forEach((element) => {
    sumaCostesIniciales += element;
  });
};
let eliminarOpcion = () => {
  let indice = selectNew1.selectedIndex;
  if (indice > -1) {
    arrayCostesIniciales.forEach((element) => {
      arrayCostesIniciales[indice] = 0;
    });
    selectNew1.removeChild(selectNew1[indice]);
  } else {
    alert("seleccione una opcion");
  }
};
/**** costos finales */
let addString2 = () => {
  selectedTextFinal = select2.options[select2.selectedIndex].innerText;
  costeFinal = parseInt(cboCosteFinal.value);
  let select = document.querySelector("#add-data-2");
  const option = document.createElement("option");
  option.id += "cf";
  option.value = cboCosteFinal.value;
  option.text = selectedTextFinal + " = " + cboCosteFinal.value;
  arrayCostesFinales.push(costeFinal);
  select.appendChild(option);
  console.log(option);
  console.log(arrayCostesFinales);
  cboCosteFinal.value = "";
  select2.selectedIndex = 0;
};
let sumarCostesFinales = () => {
  arrayCostesFinales.forEach((element) => {
    sumaCostesFinales += element;
  });
};
let eliminarOpcion2 = () => {
  let indice = selectNew2.selectedIndex;
  if (indice > -1) {
    arrayCostesFinales.forEach((element) => {
      arrayCostesFinales[indice] = 0;
    });
    selectNew2.removeChild(selectNew2[indice]);
  } else {
    alert("seleccione una opcion");
  }
};
