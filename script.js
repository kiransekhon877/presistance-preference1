document.addEventListener("DOMContentLoaded", () => {
    const themeSelector = document.getElementById("theme");
    const listStyleSelector = document.getElementById("list-style");
    const dynamicList = document.getElementById("dynamic-list");

    const themes = {
        light: "light",
        dark: "dark",
        blue: "blue"
    };

    const listStyles = {
        none: "list-none",
        bullet: "list-bullet",
        numbered: "list-numbered"
    };

    const items = ["Learn JavaScript", "Build a Portfolio", "Contribute to Open Source", "Explore Web Design", "Practice Coding"];

    const loadPreferences = () => {
        const savedTheme = localStorage.getItem("theme") || themes.light;
        const savedListStyle = localStorage.getItem("listStyle") || listStyles.none;

        document.body.className = savedTheme;
        dynamicList.className = `list-group ${savedListStyle}`;

        themeSelector.value = savedTheme;
        listStyleSelector.value = savedListStyle;
    };

    const savePreferences = () => {
        localStorage.setItem("theme", themeSelector.value);
        localStorage.setItem("listStyle", listStyleSelector.value);
    };

    themeSelector.addEventListener("change", () => {
        document.body.className = themes[themeSelector.value];
        savePreferences();
    });

    listStyleSelector.addEventListener("change", () => {
        dynamicList.className = `list-group ${listStyles[listStyleSelector.value]}`;
        savePreferences();
    });

    const populateList = () => {
        dynamicList.innerHTML = "";
        items.forEach((item) => {
            const li = document.createElement("li");
            li.classList.add("list-group-item");
            li.textContent = item;
            dynamicList.appendChild(li);
        });
    };

    loadPreferences();
    populateList();
});
