function setup() {
    createCanvas(710, 400);
    background(163,100,200)
    input = createInput();
    
    button = createButton('CLICK ME ;)');
    
    button.mousePressed(greet);
  
    greeting = createElement('h2', 'what is your name?');
  
    textAlign(CENTER);
    textSize(20);
  }
  
  function greet() {
    const name = input.value();
    greeting.html('Heres alot of ' + name + '  [XD HAHAHA]');
    input.value('');
  
    for (let i = 10; i < 180; i++) {
      push();
      fill(random(55), 155, 225);
      translate(random(width), random(height));
      rotate(random(2 * PI));
      text(name, 10, 20);
      pop();
    }
  }
  
  