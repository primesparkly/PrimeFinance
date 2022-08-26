// Find all the "Add to Card" buttons on the page
var offerButtons = Array.from(document.getElementsByClassName("offer-cta axp-offers__global__fluid___15Bk5 css-1duq00z")).filter(btn => btn.title == "Add to Card");
var index;
for (index = 0; index < offerButtons.length; ++index) {
  console.log("Clicking offer button");
  offerButtons[index].click();
  // Wait 2 seconds to be nice to AMEX servers
  await new Promise(r => setTimeout(r, 2000));
}
