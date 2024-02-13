function aceitarCookies() {
    document.cookie = "cookiesAceitos=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    document.getElementById("cookieBanner").style.display = "none";
}

function verificarConsentimentoCookies() {
    return document.cookie.includes("cookiesAceitos=true");
}

window.onload = function() {
    if (!verificarConsentimentoCookies()) {
        document.getElementById("cookieBanner").style.display = "block";
    }
}