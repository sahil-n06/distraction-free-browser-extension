chrome.storage.local.get("tabSwitched", (data) => {
    if (data.tabSwitched) {
        let overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "red";
        overlay.style.zIndex = "9999";
        document.body.appendChild(overlay);
        
        setTimeout(() => {
            overlay.remove();
            chrome.storage.local.set({ tabSwitched: false });
        }, 20000);
    }
});