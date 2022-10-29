// we get  the values of the formulary
forma = document.forms["form-data"];
initialValue = forma["inicial"]; 
dateDiscount = forma["date-discount"]; //fecha de descuento
dateEnd = forma["date-end"]; //fecha de vencimiento
tasaConvert = forma["tasa"]; 
retencion = forma["cost"]; 
cboCosteInicial = forma["monto-inicial"]; //coste inicial
cboCosteFinal = forma["monto-final"]; //coste final
retenciones1 = forma["cost"];
select1 = document.getElementById("select-initial");
select2 = document.getElementById("select-final");
selectNew1 = document.getElementById("add-data");
selectNew2 = document.getElementById("add-data-2");
