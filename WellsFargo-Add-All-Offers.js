// Find all the "Add to Card" buttons on the page
var offerButtons = Array.from(document.querySelectorAll("span[class='AvailableDealTile2__activate___RMxY3']"));
var index;
for (index = 0; index < offerButtons.length; ++index) {
  console.log("Clicking offer button");
  offerButtons[index].click();
  await new Promise(r => setTimeout(r, 2000));
  document.querySelectorAll("button[class='AvailableDeal__termsCloseButton___SbPJv']")[0].click();
  // Wait 2 seconds to be nice to AMEX servers
  await new Promise(r => setTimeout(r, 2000));
}
