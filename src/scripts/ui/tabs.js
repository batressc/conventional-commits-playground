/**
 * Tab navigation functionality
 * Handles tab switching and keyboard navigation
 * @module ui/tabs
 */

/**
 * Opens a specific tab panel
 * @param {HTMLElement} button - The tab button that was clicked
 * @param {string} tabName - The ID of the panel to show
 */
const openTab = (button, tabName) => {
    const tabPanels = document.querySelectorAll('.tabs__panel');
    const tabButtons = document.querySelectorAll('.tabs__button');

    // Hide all panels and deactivate buttons
    tabPanels.forEach(panel => {
        panel.style.display = 'none';
        panel.classList.remove('active');
    });
    
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });

    // Show selected panel and activate button
    const panel = document.getElementById(tabName);
    if (panel) {
        panel.style.display = 'block';
        setTimeout(() => panel.classList.add('active'), 10);
    }
    
    button.classList.add('active');
    button.setAttribute('aria-selected', 'true');
};

/**
 * Handles keyboard navigation within tab list
 * @param {KeyboardEvent} event - Keyboard event
 * @param {NodeListOf<HTMLElement>} tabs - List of tab buttons
 */
const handleTabKeydown = (event, tabs) => {
    const currentIndex = Array.from(tabs).indexOf(document.activeElement);
    let newIndex;

    switch (event.key) {
        case 'ArrowLeft':
            newIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
            tabs[newIndex].focus();
            tabs[newIndex].click();
            event.preventDefault();
            break;
        case 'ArrowRight':
            newIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
            tabs[newIndex].focus();
            tabs[newIndex].click();
            event.preventDefault();
            break;
        case 'Home':
            tabs[0].focus();
            tabs[0].click();
            event.preventDefault();
            break;
        case 'End':
            tabs[tabs.length - 1].focus();
            tabs[tabs.length - 1].click();
            event.preventDefault();
            break;
    }
};

/**
 * Initializes tab functionality
 * Sets up click handlers and keyboard navigation
 */
export const initTabs = () => {
    const tablist = document.querySelector('[role="tablist"]');
    if (!tablist) return;

    const tabs = tablist.querySelectorAll('[role="tab"]');

    // Add click handlers to each tab button
    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            const panelId = tab.getAttribute('aria-controls');
            if (panelId) {
                openTab(tab, panelId);
            }
        });
    });

    // Add keyboard navigation
    tablist.addEventListener('keydown', (event) => {
        handleTabKeydown(event, tabs);
    });
};
