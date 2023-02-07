const enum links{
  vk='https://www.typescriptlang.org/',
  youtube='https://www.typescriptlang.org/'
}
links.vk
links.youtube

{/* 
output:
"use strict";
"https://www.typescriptlang.org/" 
"https://www.typescriptlang.org/" 
*/}
/////////////////////////////////







enum links{
  vk='https://www.typescriptlang.org/',
  youtube='https://www.typescriptlang.org/'
}
links.vk
links.youtube

{/*
"use strict";
var links;
(function (links) {
    links["vk"] = "https://www.typescriptlang.org/";
    links["youtube"] = "https://www.typescriptlang.org/";
})(links || (links = {}));
links.vk;
links.youtube;
*/}
