// Find all the "Add to Card" buttons on the page
var offerButtons = Array.from(document.getElementsByClassName("btn btn-sm btn-fluid offer-cta btn-secondary")).filter(btn => btn.title == "Add to Card");
var index;
for (index = 0; index < offerButtons.length; ++index) {
  console.log("Clicking offer button");
  offerButtons[index].click();
  // Wait 2 seconds to be nice to AMEX servers
  await new Promise(r => setTimeout(r, 2000));
}
