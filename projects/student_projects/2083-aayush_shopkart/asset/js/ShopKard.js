document.addEventListener("DOMContentLoaded", function () {

    const offerPopup = document.getElementById("offerPopup");
    const closeOffer = document.getElementById("closeOffer");
    const shopNow = document.getElementById("shopNow");

    console.log("ShopKart JavaScript loaded");

    closeOffer.onclick = function () {
        offerPopup.style.display = "none";
    };

    shopNow.onclick = function () {
        offerPopup.style.display = "none";
    };

    offerPopup.onclick = function (event) {
        if (event.target === offerPopup) {
            offerPopup.style.display = "none";
        }
    };

});