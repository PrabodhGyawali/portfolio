(function () {
    var buttons = document.querySelectorAll("[data-filter]");
    var cards = document.querySelectorAll("[data-cats]");
    if (!buttons.length || !cards.length) return;

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var filter = button.getAttribute("data-filter");

            buttons.forEach(function (other) {
                var active = other === button;
                other.classList.toggle("is-active", active);
                other.setAttribute("aria-pressed", active ? "true" : "false");
            });

            cards.forEach(function (card) {
                var cats = (card.getAttribute("data-cats") || "").split(/\s+/);
                card.hidden = filter !== "all" && cats.indexOf(filter) === -1;
            });
        });
    });
})();
