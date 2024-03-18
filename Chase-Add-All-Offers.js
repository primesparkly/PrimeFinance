javascript: a = () => {
    window.history.back();
    setTimeout(c, Math.random() * 1000 + 300);
};
c = () => {
    btns = [...document.querySelectorAll("div[role='button'][data-testid='commerce-tile']")].filter(b => b.childNodes[1].childNodes[1].childNodes[0].type !== 'ico_checkmark_filled');
    b = btns.pop();
    if (!b) return console.log('added all!');
    b.childNodes[0].click();
    setTimeout(a, Math.random() * 1000 + 300);
};
c();
