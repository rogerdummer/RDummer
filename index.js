document.addEventListener("DOMContentLoaded", function() {
    quest1 = document.getElementById("quest1");
    quest2 = document.getElementById("quest2");
    quest3 = document.getElementById("quest3");

    resp1 = document.getElementById("resp1");
    resp2 = document.getElementById("resp2");
    resp3 = document.getElementById("resp3");

    let isShowed1, isShowed2, isShowed3;
    quest1.addEventListener("click", function() {
        if (!isShowed1) {
            resp2.classList.remove("selected");
            resp3.classList.remove("selected");

            quest1.classList.add("quest_selected");
            resp1.classList.add("selected");

            quest2.classList.remove("quest_selected");
            quest3.classList.remove("quest_selected");

            isShowed1 = 1;
            isShowed2 = 0;
            isShowed3 = 0;
        } else {
            quest1.classList.remove("quest_selected");
            resp1.classList.remove("selected");
            isShowed1 = 0;
        }
    });

    quest2.addEventListener("click", function() {
        if (!isShowed2) {
            resp1.classList.remove("selected");
            resp3.classList.remove("selected");

            quest2.classList.add("quest_selected");
            resp2.classList.add("selected");

            quest1.classList.remove("quest_selected");
            quest3.classList.remove("quest_selected");

            isShowed1 = 0;
            isShowed2 = 1;
            isShowed3 = 0;
        } else {
            quest2.classList.remove("quest_selected");
            resp2.classList.remove("selected");
            isShowed2 = 0;
        }
    });

    quest3.addEventListener("click", function() {
        if (!isShowed3) {
            resp1.classList.remove("selected");
            resp2.classList.remove("selected");

            quest3.classList.add("quest_selected");
            resp3.classList.add("selected");

            quest1.classList.remove("quest_selected");
            quest2.classList.remove("quest_selected");

            isShowed1 = 0;
            isShowed2 = 0;
            isShowed3 = 1;
        } else {
            quest3.classList.remove("quest_selected");
            resp3.classList.remove("selected");
            isShowed3 = 0;
        }
    });

});