class Letra {

  static contador = 0;

  constructor(
    valorNeto,
    valorRecibido,
    valorEntregado,
    costesIniciales,
    costesFinales,
    descuento,
    dias,
    tasaDescontada,
    tep,
    tcea
  ) {
    this.id = ++Letra.contador;
    this._valorNeto = valorNeto;
    this._valorRecibido = valorRecibido;
    this._valorEntregado = valorEntregado;
    this._costesIniciales = costesIniciales;
    this._costesFinales = costesFinales;
    this._descuento = descuento;
    this._dias = dias;
    this._tasaDescontada = tasaDescontada;
    this._tep = tep;
    this._tcea = tcea;
  }
}

arrayLetras = [];
