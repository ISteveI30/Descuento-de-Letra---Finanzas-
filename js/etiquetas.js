//this part be appear when press us the button "calcular"
resultHtml = `
 <div class="tittle">
 <h3>Resultado de Letra Descontada</h3>
</div>
<div class="data-container">
 <div class="data">
   <div class="group-data-2">
     <label for="v-neto">Valor Neto:</label>
     <p id="v-neto"></p>
   </div>
   <div class="group-data-2">
     <label for="v-recibido">Valor Recibido:</label>
     <p id="v-recibido"></p>
   </div>
   <div class="group-data-2">
     <label for="v-entregado">Valor Entregado:</label>
     <p id="v-entregado"></p>
   </div>
   <div class="group-data-2">
     <label for="c-finales">Costes Finales:</label>
     <p id="c-finales"></p>
   </div>
   <div class="group-data-2">
     <label for="c-iniciales">Costes Iniciales:</label>
     <p id="c-iniciales"></p>
   </div>
 </div>
 <div class="data">
   <div class="group-data-2">
     <label for="discount">Descuento:</label>
     <p id="discount"></p>
   </div>
   <div class="group-data-2">
     <label for="days">Días Transcurridos:</label>
     <p id="days"></p>
   </div>
   <div class="group-data-2">
     <label for="t-descontada">Tasa Descontada (d%):</label>
     <p id="t-descontada"></p>
   </div>
   <div class="group-data-2">
     <label for="t-efectiva">Tasa Efectiva (TE):</label>
     <p id="t-efectiva"></p>
   </div>
   <div class="group-data-2">
     <label for="tcea">TCEA (%):</label>
     <p id="tcea"></p>
   </div>
 </div>
</div>
<div class="content-final-2">
 <a 
    type="button"
    class="btn-final-2" 
    onclick="resetear()"
    href="#titulo-inicio"
    >Nuevo Descuento</a>
</div>
`;
