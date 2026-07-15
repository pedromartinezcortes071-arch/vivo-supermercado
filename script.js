(function () {
  var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  var hoy = new Date();
  var mesEl = document.getElementById("oferta-mes");
  var semanaEl = document.getElementById("oferta-semana");
  if (mesEl) {
    mesEl.textContent = meses[hoy.getMonth()].charAt(0).toUpperCase() + meses[hoy.getMonth()].slice(1) + " " + hoy.getFullYear();
  }
  if (semanaEl) {
    var ofertaInicio = new Date(2026, 6, 15);
    var ofertaFin = new Date(2026, 6, 25);
    var fmt = function (d) { return d.getDate() + " " + meses[d.getMonth()]; };
    semanaEl.textContent = fmt(ofertaInicio) + " – " + fmt(ofertaFin) + " " + ofertaFin.getFullYear();
  }
})();
