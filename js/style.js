//Counter
var count = 0;
var count1 = 0;
//function=====================
function RightBtn(sld_1, size, length, slg) {
    sld_1.style.transition = "transform 0.6s ease-in-out";
    count++;
    if (count > length - slg) {
        count = 0;
    }
    sld_1.style.transform = 'translateX(' + (-size * count) + 'px)';
}
function LeftBtn(sld_1, size, length, slg) {
    sld_1.style.transition = "transform 0.6s ease-in-out";
    count--;
    if (count < 0) {
        count = length - slg;
    }
    sld_1.style.transform = 'translateX(' + (-size * count) + 'px)';
}

//slide ====================================
var Slides_1 = document.querySelector(".image_container");
var slides = document.querySelectorAll(".image_container .image");
var size = slides[0].clientWidth;

var time = setInterval(function () {
    Slides_1.style.transition = "transform 0.6s ease-in-out";
    count1++;
    if (count1 > slides.length - 1) {
        count1 = 0;
    }
    Slides_1.style.transform = 'translateX(' + (-size * count1) + 'px)';
}, 4000);

function slideLeft() {
    LeftBtn(Slides_1, size, slides.length, 1);
}
function slideRight() {
    RightBtn(Slides_1, size, slides.length, 1);
}

//btn click slide ================================
function Next(e) {
    Slides_1.style.transition = "transform 0.4s ease-in-out";
    count = e;
    Slides_1.style.transform = 'translateX(' + (-size * count) + 'px)';
}

//new product========================================
var pro_new = document.querySelector(".new_1 .mid");
var products = document.querySelectorAll(".new_1 .mid .product_1");
var pro_size = products[0].clientWidth;

function product_Left() {
    LeftBtn(pro_new, pro_size, products.length, 4);
}

function product_Right() {
    RightBtn(pro_new, pro_size, products.length, 4);
}

//latest product ================================================
var late_1 = document.querySelector(".new_2 .mid");
var latests = document.querySelectorAll(".new_2 .mid .product_2");
var late_size = latests[0].clientWidth;

function late_Left() {
    LeftBtn(late_1, late_size, latests.length, 5);
}

function late_Right() {
    RightBtn(late_1, late_size, latests.length, 5);
}

//featured product==============================================
var fea_1 = document.querySelector(".future_a");
var features = document.querySelectorAll(".future_a .future_2");

var fea_size = features[0].clientWidth;
console.log(fea_size);
function fea_Left() {
    LeftBtn(fea_1, fea_size - 35, features.length, 3);
}
function fea_right() {
    RightBtn(fea_1, fea_size - 35, features.length, 3);
}

//hot deal
var hot_1 = document.querySelector(".deal_1 .hot_container");
var hots = document.querySelectorAll(".deal_1 .hot_container .sp_hot");
var hot_size = hots[0].clientWidth;

function hot_left() {
    LeftBtn(hot_1, hot_size, hots.length, 1);
}
function hot_right() {
    RightBtn(hot_1, hot_size, hots.length, 1);
}

//special deal
var hot_2 = document.querySelector(".deal_2 .hot_container");
var hots2 = document.querySelectorAll(".deal_2 .hot_container .sp_hot");
var hot_size2 = hots2[0].clientWidth;

function hot_left2() {
    LeftBtn(hot_2, hot_size2, hots2.length, 1);
}
function hot_right2() {
    RightBtn(hot_2, hot_size2, hots2.length, 1);
}


