var itemleft = document.getElementById("item-left");
var itemright = document.getElementById("item-right")
let url = "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
for (let index = 0; index <= 20; index++) {
    let i = document.createElement("img")
    let x = document.createElement("img")
    x.src=url
    i.src=url
    itemright.appendChild(x)
    itemleft.appendChild(i)
}