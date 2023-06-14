function selection(){
    var select = document.getElementById("cars");
    var value = select.value;

    switch (value){
        case "all":
            var divs = document.getElementsByClassName("cars");
                for (i = 0; i < divs.length; i++){
                    divs[i].style.display = "block";
                }
            break

            case "audi":
                var divs = document.getElementsByClassName("cars");
                for (i = 0; i < divs.length; i++){
                    if (divs[i].classList.contains("audi")) divs[i].style.display = "block";
                    else divs[i].style.display = "none";
                }
                break

            case "alfa":
                var divs = document.getElementsByClassName("cars");
                for (i = 0; i < divs.length; i++){
                    if (divs[i].classList.contains("alfa")) divs[i].style.display = "block";
                    else divs[i].style.display = "none";
                }
                break

                case "bmw":
                    var divs = document.getElementsByClassName("cars");
                    for (i = 0; i < divs.length; i++){
                        if (divs[i].classList.contains("bmw")) divs[i].style.display = "block";
                        else divs[i].style.display = "none";
                    }
                    break
            }
}