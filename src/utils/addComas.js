export function addCommas(number) {
  var numberStr = number.toString();
  if (numberStr.indexOf(".") !== -1) {
    var parts = numberStr.split(".");
    var integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var decimalPart = parts[1];
    return integerPart + "." + decimalPart;
  } else {
    return numberStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
