//import { navbar } from "./component/navbar.js";

//import {navbar} from "../Sephora-Clone/component/navbar.js"
import {navbar} from "./component/navbar.js"

import {footer} from "./component/footer.js"

let n=document.getElementById("navbar");
n.innerHTML = navbar();

let f=document.getElementById("footer");
f.innerHTML = footer();
