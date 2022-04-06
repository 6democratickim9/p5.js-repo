var capture;
var graph;
let fineD;
let pm10;
let pm25;
let time;
function preload() {
    data = loadJSON('https://api.waqi.info/feed/korea/seoul/gwangjin-gu/?token=1e1f4497f269b1eed3811662da104301f271e544', gotData);
} //대기질 데이터를 json파일로 불러옴
function setup() {
    createCanvas(320, 240);
    capture = createCapture(VIDEO);
    capture.size(320, 240);
    capture.hide();
    graph = createGraphics(320, 240);
    pixelDensity(1); // 픽셀 밀도 고정(디스플레이에 따라 자동으로 달라지기 때문에)
}

function gotData(data){
    fineD = data; //데이터 호출
}
var sortStep = 0;
function draw() {
    background(255);
    graph.background(255);
    graph.image(capture, 0, 0, 320, 240); // Video를 image로, 1280*960
    graph.loadPixels(); // 픽셀 데이터로 부름
    
    
    pm10 = fineD.data.iaqi.pm10;  //미세먼지 호출
    pm25 = fineD.data.iaqi.pm25;  //초미세먼지 호출
    time = fineD.data.time.s;      //시각 호출

    let a = 100;
    let b = pm10.v;//호출값을 숫자로 받아오기
    let c = pm25.v;
    let d = c - 68;

  
    for (var i = 3; i < graph.pixels.length ; i += 3) {
        graph.pixels[i] = random(255);
    }
    // 노이즈 주기

    for (i = 0; i <= graph.pixels.length; i += 4) {
        var cPixel = void 0;
        var nPixel = void 0;
        var n = i + 4;

        cPixel = hue([graph.pixels[i], graph.pixels[i + 1], graph.pixels[i + 2]]); // 색상 추출
        nPixel = hue([graph.pixels[n], graph.pixels[n + 1], graph.pixels[n + 2]]); // 색상 추출
      
// 색상 비교
        if (nPixel > cPixel) {
            var t = [graph.pixels[i], graph.pixels[i + 1], graph.pixels[i + 2]];

            graph.pixels[i] = graph.pixels[n];
            graph.pixels[i + 1] = graph.pixels[n + 1];
            graph.pixels[i + 2] = graph.pixels[n + 2];

            graph.pixels[n] = t[0];
            graph.pixels[n + 1] = t[1];
            graph.pixels[n + 2] = t[2];
        }
    }

// 일부 픽셀의 색상값을 변경해 줌
    
    tint(232,221,207, a-b/2); // 색상 변경, 미세먼지 농도에 따른 alpha 값 조절
    
    
    graph.updatePixels(); // 픽셀 데이터 끝
    image(graph, 0, 0); // 처리한 것 이미지로 받음
  filter(BLUR, c/50); // 초미세먼지 농도에 따른 블러 조절
    text( time + "기준" , 10,10,200,40);  //데이터를 화면에 텍스트로 출력
    text( "미세먼지 농도: "+ b , 200, 200,120,40);   
    text( "초미세먼지 농도: "+ d, 200, 220, 120, 40);
}