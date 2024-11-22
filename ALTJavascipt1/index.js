const container = document.getElementsByClassName("content_container")[0];

const element = document.getElementById("content");

const qoute = document.createElement("div");
qoute.innerHTML = `<span class="qoute_symbol">"</span><br>
see you on the other side, where we will discuss events in javascript , may the forces be with you
<br><span class="qoute_symbol">"</span>
`;

element.appendChild(qoute);
document.querySelectorAll(".qoute_symbol").forEach((el) => {
  el.style.color = "blue";
});
element.style.fontFamily = `Caveat, cursive`;
element.style.fontSize = "2.5em";
element.style.paddingLeft = "0.3em";
element.style.verticalAlign = "middle";
element.style.borderLeft = "7px solid #007bff";

container.appendChild(element);
container.classList.add("container");
