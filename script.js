function switchOff() {
    document.getElementById("BulbImage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("CatImage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent = "Switched Off";
    document.getElementById("buttonOn").style.backgroundColor = "#cbd2d9";
    document.getElementById("buttonOff").style.backgroundColor = "#e12d39";
}

function switchOn() {
    document.getElementById("BulbImage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("CatImage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchStatus").textContent = "Switched On";
    document.getElementById("buttonOff").style.backgroundColor ="#cbd2d9";
    document.getElementById("buttonOn").style.backgroundColor ="#22c55e";
}
