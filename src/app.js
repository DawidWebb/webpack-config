import { message } from "./tools/message";
import { messageDOM } from "./tools/message";
import info from "./data/title.txt";
import "./components/footer";
import "./sass/index.scss";
import addImage from "./tools/image";

message("działam po bundlingu");
messageDOM(info);
addImage("h1");
