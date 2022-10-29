let getDay = (dateEnd, dateDiscount) => {
  //valores de los input date
  let day1 = new Date(dateEnd.value);
  let day2 = new Date(dateDiscount.value);
  let difference = Math.abs(day2 - day1);
  let days = difference / (1000 * 3600 * 24);
  return days;
};
let TEP = (tasa, days, period) => {
  let resultado = Math.pow(1 + tasa / 100, days / period) - 1;
  return resultado;
};
let tasaDescontada = (TEP) => {
  let step = TEP / (1 + TEP);
  return step;
};
let percentFormat = (num) => {
  return num.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 7,
  });
};
let calcularValorRecibido = (neto, retenciones) => {
  let resultado = neto - sumaCostesIniciales - retenciones;
  return resultado;
};
let calcularValorEntregado = (nominal, retenciones) => {
  let resultado = nominal + sumaCostesFinales - retenciones;
  return resultado;
};
let TCEA = (entregado, recibido, dias) => {
  let resultado = Math.pow(entregado / recibido, 360 / dias) - 1;
  console.log("resultado tecea:"+typeof resultado )
  return resultado;
};

let resetear = () => {
  initialValue.value = "";
  cboCosteInicial.value = "";
  cboCosteFinal.value = "";
  tasaConvert.value = "";
  let tasaPlazo = document.getElementById("deadline");
  tasaPlazo.selectedIndex = 0;
  retenciones1.value = "";
  select1.selectedIndex = 0;
  select2.selectedIndex = 0;

  let options1 = document.querySelectorAll("#ci");
  options1.forEach((element) => {
    element.remove();
  });
  let options2 = document.querySelectorAll("#cf");
  options2.forEach((element) => {
    element.remove();
  });
  sumaCostesFinales = 0;
  sumaCostesIniciales = 0;
  arrayCostesIniciales.splice(0, arrayCostesIniciales.length);
  arrayCostesFinales.splice(0, arrayCostesFinales.length);

  document.getElementById("container-2").innerHTML = "";
  
};
