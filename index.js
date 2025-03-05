// Function to greet based on distance
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance > 400 && distance <= 2000) {
    return 'That will be twenty bucks.';
  } else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

// Function to check if the city is NYC
function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// Function to determine message based on the tip amount
function switchOnCharmFromTip(tip) {
  if (tip === 'generous') {
    return 'Thank you so much.';  // Generous tip
  } else if (tip === 'not as generous') {
    return 'Thank you.';  // Moderate tip
  } else {
    return 'Bye.';  // Any other tip
  }
}
