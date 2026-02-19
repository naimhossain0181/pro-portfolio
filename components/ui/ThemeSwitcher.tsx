"use client";

export default function ThemeSwitcher() {
    const changeColor = (color: string) => {
        document.documentElement.setAttribute("data-theme", color);
        localStorage.setItem("theme-color", color); // Save for the script to find later
    };

    const toggleDark = () => {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme-mode", isDark ? "dark" : "light");
    };

    return (
        <div className="flex gap-4">
            <button onClick={() => changeColor("sunset")}>Sunset</button>
            <button onClick={toggleDark}>Toggle Dark</button>
        </div>
    );
}