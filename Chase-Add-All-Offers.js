javascript: a = () => {
    window.history.back();
    setTimeout(c, Math.random() * 2000 + 1300);
};
c = () => {
    btns = [...document.querySelectorAll("div[role='button'][data-testid='commerce-tile']")]
  .filter(b => {
    const child = b.childNodes[1]?.childNodes[0]?.childNodes[0]; // Optional chaining prevents errors
    return child?.getAttribute && child.getAttribute("data-testid") === 'commerce-tile-button';
  });
    b = btns.pop();
    if (!b) return console.log('added all!');
    b.childNodes[0].click();
    setTimeout(a, Math.random() * 2000 + 300);
};
c();
