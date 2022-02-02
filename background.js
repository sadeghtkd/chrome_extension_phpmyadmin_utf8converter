function reddenPage() {
    console.log("ok");
    const collection = document.getElementsByClassName("data grid_edit click2 not_null pre_wrap");
    for (var i = 0; i < collection.length; i++)
        collection[i].innerText = collection[i].innerText.replaceAll("Øª", "ت").replaceAll("Ù‡", "ه").replaceAll("Ù‡", "ه").replaceAll("Ø§", "ا")
            .replaceAll("Ø³", "س").replaceAll("Ùˆ", "و").replaceAll("ÛŒ", "ی").replaceAll("Ù†", "ن")
            .replaceAll("Ø¯", "د").replaceAll("Ø²", "ز").replaceAll("Ø¨", "ب").replaceAll("Ù‚", "ق")
            .replaceAll("Øµ", "ص").replaceAll("Ù¾", "پ").replaceAll("Ù¾", "پ").replaceAll("Ø´", "ش")
            .replaceAll("Ø±", "ر").replaceAll("Ú˜", "ژ").replaceAll("Ù", "ف").replaceAll("Ø­", "ح")
            .replaceAll("Ø·", "ط").replaceAll("Ø«", "ث").replaceAll("Ø¬", "ج").replaceAll("Ú†", "چ")
            .replaceAll("Ø®", "خ").replaceAll("Ø°", "ذ").replaceAll("Ø¶", "ض").replaceAll("Ø¸", "ظ")
            .replaceAll("Ø¹", "ع").replaceAll("Øº", "غ").replaceAll("Ú©", "ک").replaceAll("Ú¯", "گ")
            .replaceAll("Ù„", "ل").replaceAll("Ù…", "م").replaceAll("Û°", "۰").replaceAll("Û±", "۱")
            .replaceAll("Û²", "۲").replaceAll("Û³", "۳").replaceAll("Û´", "۴").replaceAll("Ûµ", "۵")
            .replaceAll("Û¶", "۶").replaceAll("Û·", "۷").replaceAll("Û¸", "۸").replaceAll("Û¹", "۹")
            .replaceAll("â€Œ", "‌").replaceAll("Ø¡", "ء").replaceAll("Ø¢", "آ").replaceAll("â€Ž", "")
            .replaceAll("â€“", "–").replaceAll("ØŒ", "،").replaceAll("ØŒ", "،").replaceAll("Ëš", "˚");
   
}


chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: reddenPage
    });
});