// Find all the "Add to Card" buttons on the page
var offerButtons = Array.from(document.querySelectorAll("span[class='unActiveOffer'][aria-label='Activate']"));
var index;
for (index = 0; index < offerButtons.length; ++index) {
  console.log("Clicking offer button");
  offerButtons[index].click();
  await new Promise(r => setTimeout(r, 2000));
  document.querySelectorAll("button[class='cdlx-btn']")[0].click();
  // Wait 2 seconds to be nice to servers
  await new Promise(r => setTimeout(r, 2000));
}
