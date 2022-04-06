function setup() {
    createCanvas(300, 300);
  }
  cnt = 0;
  
  function draw() {
    background(151, 168, 190);
  
    let main = new Array();
    let heig = height / 10;
    let widt = width / 10;
  
    for (let i = 0; i < 10; i++) {
      main[i] = new Array();
      for (let j = 0; j < 10; j++) {
        main[i][j] = random(250);
      }
    }
  
  
  
    for (let hei = 0; hei < 10; hei++) {
      for (let wid = 0; wid < 10; wid++) {
  
  
        noStroke();
        fill(24, 58, 123, main[hei][wid]);
  
  
        rect(wid * widt, hei * heig, heig, widt);
      }
    }
  
  
  
  
  
  
    if (mouseIsPressed) {
  
      frameRate(10);
  
      for (let a = 0; a < 10; a++) {
        for (let b = 0; b < 10; b++) {
          noStroke();
          fill(226, 206, 106, main[a][b]);
          ellipse(a * widt + 15, b * heig + 15, heig - 5, widt - 5);
        }
      }
  
      let c = mouseX / 30;
  
      let d = mouseY / 30;
      fill(255, 255, 180);
      ellipse(int(c) * widt + 15, int(d) * heig + 15, 15, 15);
  
    }
  }
  //고흐의 '별이 빛나는 밤' 을 보고 그의 감정을 따라가보려고 했다.
  //압생트를 진탕 마시고 봤던 하늘은 울렁거리는 하늘이었을 거다.
  //그리고 순간 번쩍 하면서 하늘의 별과 달이 역동적으로 반짝반짝거리는 것을 보고 그 풍경을 캔버스에 옮겨낸 것이 아닐까?
  //