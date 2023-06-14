function kupAuto()
{
    var dzisiaj = new Date();
    var dataPrzyjazdu = new Date(dzisiaj.getTime() + 14 * 24 * 60 * 60 * 1000);
    var dataPrzyjazduFormatted = dataPrzyjazdu.toLocaleDateString();

    var komunikat = "Auto zakupione, przyjedzie ono dnia " + dataPrzyjazduFormatted +", na wskazany adres. Dziękujemy za zakup!";
    alert(komunikat);
}

var formData = sessionStorage.getItem('formData');
if (formData) {
var formFields = JSON.parse(formData);
document.getElementById('imie').value = formFields.imie;
document.getElementById('nazwisko').value = formFields.nazwisko;
document.getElementById('miasto').value = formFields.miasto;
}