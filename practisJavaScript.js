// Designed by:  Mauricio Bucardo
// Original image:
// https://dribbble.com/shots/5619509-Animated-Tab-Bar

//エラーチェックをしてくれる厳格モードを指定
"use strict";

//変数と定数を指定
const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
//querySelectorで任意のHTML要素を検出・取得
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

//ボタンを押した選択状態の動きを指定
function clickItem(item, index) {
    menu.styli.removeProperty("--itemOut");

    if (activeItem == item) return;

    //すでに選択されているものだったらactiveを削除（？）
    if(activeItem) {
        activeItem.classList.remove("active");
    }

    //選択状態の所とは別の所をクリックした時の動きを指定
    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
}

//山になっている部分の動きを指定
function offsetMenuBorder(element, menuBorder) {
    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth - offsetActiveItem.width) /2) + "px";
    menuBorder.style.transform = 'translate3d(${left}, 0, 0)';
}


offsetMenuBorder(activeItem, menuBorder);

//クリックされた時に上で作ったclickItem関数を呼ぶ
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => clickItem(item, index));
})

//ウインドウサイズが変更された時に上で作ったoffsetMenuBorder関数を呼ぶ
window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--itemOut", "nome");
});