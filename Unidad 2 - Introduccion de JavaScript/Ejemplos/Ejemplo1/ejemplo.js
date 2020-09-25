var i, j = 0;
for (i = 0; i < 5; i++) {
    alert("Variable i : " + i);
    for (let j = 0; j < 5; j++) {
        if (i % 2 == 0) {
            document.write(i + "-" + "<br>");
        }
    }
}