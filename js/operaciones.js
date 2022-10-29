let calculate = () => {
  valorNominal = parseInt(initialValue.value);
  tasa = parseInt(tasaConvert.value);
  retenciones = parseInt(retenciones1.value);
  let days = getDay(dateEnd, dateDiscount);
  let periodoseleccionado = document.getElementById("deadline");
  let period = parseInt(
    periodoseleccionado.options[periodoseleccionado.selectedIndex].value
  );
  let TEp = percentFormat(TEP(tasa, days, period));
  let d1 = tasaDescontada(TEP(tasa, days, period));
  let d = percentFormat(d1);
  let discount = valorNominal * d1;
  let valorNeto = valorNominal - discount;
  sumarCostesIniciales();
  sumarCostesFinales();
  let recibido = calcularValorRecibido(valorNeto, retenciones);
  let entregado = calcularValorEntregado(valorNominal, retenciones);
  let tcea = percentFormat(TCEA(entregado, recibido, days));
  printData(valorNeto, days, TEp, d, discount, entregado, recibido, tcea);
  newObjetoLetra(valorNeto, days, TEp, d, discount, entregado, recibido, tcea);
};

let newObjetoLetra = (
  valorNeto,
  days,
  TEp,
  d,
  discount,
  entregado,
  recibido,
  tcea
) => {
  obj = new Letra(
    valorNeto.toFixed(2),
    recibido.toFixed(2),
    entregado.toFixed(2),
    sumaCostesIniciales,
    sumaCostesFinales,
    discount.toFixed(2),
    days,
    d,
    TEp,
    tcea
  );
  arrayLetras.push(obj);
  console.log(arrayLetras)
  sessionStorage.setItem("letra",JSON.stringify(arrayLetras));
  //localStorage.clear();
};

let printData = (
  valorNeto,
  days,
  TEp,
  d,
  discount,
  entregado,
  recibido,
  tcea
) => {
  if (isNaN(valorNeto)) {
    alert("no es un numero");
  } else {
    document.getElementById("container-2").innerHTML = resultHtml;
    document.getElementById("v-neto").innerHTML = valorNeto.toFixed(2);
    document.getElementById("days").innerHTML = days;
    document.getElementById("t-efectiva").innerHTML = TEp;
    document.getElementById("t-descontada").innerHTML = d;
    document.getElementById("discount").innerHTML = discount.toFixed(2);
    document.getElementById("c-iniciales").innerHTML = sumaCostesIniciales;
    document.getElementById("c-finales").innerHTML = sumaCostesFinales;
    document.getElementById("v-entregado").innerHTML = entregado.toFixed(2);
    document.getElementById("v-recibido").innerHTML = recibido.toFixed(2);
    document.getElementById("tcea").innerHTML = tcea;
  }
};
