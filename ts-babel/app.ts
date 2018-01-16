import * as Rx from "rx";
const users = [{ name: "dalong", age: 33 }, { name: "ddd", age: 44 }];
Rx.Observable.from(users).subscribe(item => {
     console.log(JSON.stringify(item));
     const dom =document.querySelector("#items");
     const li = document.createElement("li");
     li.innerHTML=`<li>${item.name}--${item.age}</li>`;
     dom.appendChild(li);
    },
    error => {
        console.log("there is some wrong");
    }
)