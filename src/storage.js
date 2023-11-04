import { mainFactory } from "./home";
import { myFactory } from "./notes";

localStorage.setItem("mainFactory", JSON.stringify(mainFactory));
localStorage.setItem("sam", JSON.stringify(myFactory()))

localStorage.getItem('mainFactory')
localStorage.getItem("sam")