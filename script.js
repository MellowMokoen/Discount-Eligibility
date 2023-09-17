function checkEligibility(event) {
  event.preventDefault();

  let ageInput = document.querySelector("#user-age");
  let member = document.querySelector("#membership");

  let userAge = parseInt(ageInput.value);
  let youMember = member.checked;

  let seniorEligible = userAge >= 65;
  let memberElegibile = userAge >= 18 && youMember;

    if (seniorEligible) {

      let h2 = document.querySelector("h2");
        h2.innerHTML = "Congratulations ! You qualify for the Senior Discount";
      
    } else if (memberElegibile) {

         let h2 = document.querySelector("h2");
        h2.innerHTML = "Congratulations ! You qualify for the Member Discount";
    
      } else {
        let h2 = document.querySelector("h2");
        h2.innerHTML = "Sorry ! You do not qualify for any discount";
      }
}
let form = document.querySelector("form");
form.addEventListener("submit",checkEligibility);



