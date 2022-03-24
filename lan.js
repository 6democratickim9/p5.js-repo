function setup() {

    createCanvas(600,500);
    background(240);
  
  
  }
  
  let cnt1=0;
  
  
  function draw() {
    
  let w;
    let h;
    let s;
    let cnt;
    let a;
    
    let num;
    
    a=random(0,250);
    s=random(0,250);
    w=random(1,600);
    h=random(1,500);
    
    strokeWeight(0,1);
    
    for(cnt=0;cnt<5;cnt++){
    fill(h,h,h,h)
      triangle(w,h,random(w,w-s),random(h,h+h),random(w,w+w),random(h,h-s));
      
    frameRate(5);
    cnt1++;
      if(cnt%5===0){
      
        for(num=10;num>0;num--){
        
          fill(300);
          ellipse(300,500,100,350);
        fill(cnt1*num);
          circle(300,350,15*num);
          
          
        }
        
      
      }
      
    }
    
    
    
    
  
  
    
  
  
  }
  
  
  //언어는 초기에 그림과 같은 형태였다. 그 그림은 곧 언어라는 이름을 가지고, 인간을 지배하기 시작했다. 인간은 언어로 정보를 저장하고 지식을 쌓았다. 언어는 인간 너머에 있었지만, 인간이 없으면 그 힘을 잃어버렸다. 하지만 오늘날 언어와 인간은 분리될 수 없기 때문에 언어는 그 힘을 나날이 키우고 있다. 언젠가 언어는 인간을 집어삼킬까?
  
  //인간의 선을 하고 있지 않은 직선의 도형들(언어)이 여러개 겹쳐져 나비와 같은 형상을 하고 있다. 이 형상들은 캔버스 내에서 계속해서 돌아다닌다. 인간의 모습과 유사한 까만 원은 형상들과 부딪히며 점점 그 색이 옅어진다. (인간을 지배하기 시작한다) 시간이 지날수록 캔버스는 하얗게 변해가지만 완전히 하얗게 변하진 않는다. (인간을 집어삼키지는 못한다) 변할듯, 변하지 않을듯 궁금증을 불러일으키며 계속해서 돌아간다.
  