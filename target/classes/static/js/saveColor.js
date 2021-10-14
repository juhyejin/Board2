function saveColor(r,g,b,storage){
    localStorage.setItem("r" + storage, r);
    localStorage.setItem("g" + storage, g);
    localStorage.setItem("b" + storage, b);
}