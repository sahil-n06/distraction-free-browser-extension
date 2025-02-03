chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.storage.local.set({ tabSwitched: true });
});

chrome.windows.onFocusChanged.addListener((windowId) => {
    if (windowId === chrome.windows.WINDOW_ID_NONE) {
        chrome.storage.local.set({ tabSwitched: true });
    }
});
