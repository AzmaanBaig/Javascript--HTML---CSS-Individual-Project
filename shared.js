// ============================================================
//  shared.js — ElderCare Website
//  This file is linked in ALL 5 pages.
//
//  Concepts used:
//  · function          — reusable block of code
//  · getElementById()  — find an element by its id
//  · .className        — read and set CSS classes
//  · if / else         — check a condition and branch
// ============================================================


// --- HAMBURGER MENU TOGGLE ---
// Called by onclick="toggleMenu()" on the hamburger button in every page.
// It checks if the menu is currently open — if yes, close it. If no, open it.

function toggleMenu() {
    var menu = document.getElementById("nav-menu");

    if (menu.className === "nav-menu menu-open") {
        menu.className = "nav-menu";        // close the menu
    } else {
        menu.className = "nav-menu menu-open";  // open the menu
    }
}
