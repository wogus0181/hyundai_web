function darkModeHandler(self){
  var target = document.querySelector('body');  //body태그를 불러옴
  if(self.value === 'night'){  //만약 버튼의 값이 'night'이면
    Body.SetBackgroundColor('black');  //Body 객체의 SetBackgroundColor 함수에 'black'을 전달하라
    Body.setColor('#D358F7');  //Body 객체의 setColor 함수에 'white'를 전달하라.
    self.value = 'day' //버튼의 값을 'day'로 변경해라.

    Links.setColor('powderblue');  //Links객체의 setColor 함수에 'powderblue'를 전달하라.
  } else{  //버튼의 값이 'night'가 아니라면
    Body.SetBackgroundColor('white');  //Body객체의 SetBackgroundColor 함수에 'white'를 전달
    Body.setColor('black');  //Body 객체의 setColor 함수에 매개변수로 'black' 을 전달하라.

    Links.setColor('blue');  //Links 객체의 setColor 함수에 매개변수로 'blue' 전달.
    self.value = 'night';
  }
}

var Links = {  // 모든 링크들의 색을 바꾸기 위한 객체
  setColor:function (color){
    var alist = document.querySelectorAll('a');  //모든 a태그들을 담고 있는 변수
    var i = 0;
    while(i < alist.length){  // alist의 길이만큼 반복
      alist[i].style.color = color;  // n번째 alist 즉, n번째 a태그의 style 속성의 color 값
      //즉, a태그의 color(글자색)을 매개변수 color값으로 변경한다는 뜻

      i = i + 1; // a태그가 저장되어 있는 alist를 순차적으로 움직이며 색을 바꿔줘야 하기때문에 1씩 증가 시켜줘야한다.
    }
  }
}

var Body = {  // Body 태그에 있는 글씨와 배경 색을 바꾸는 기능의 객체
  setColor:function (color){  // body태그 안에 있는 글자색을 바꾸는 기능의 함수
    document.querySelector('body').style.color = color;  //document.querySelector를 사용해 'body'태그의 글자색을
    // 매개변수 color 값으로 바꾼다.
  },  //setColor 함수의 끝, SetBackgroundColor와의 구분점
  SetBackgroundColor:function (color){  //body태그의 배경색을 바꾸는 기능의 함수
    document.querySelector('body').style.backgroundColor = color;  //document.querySelector를 사용해 'body'태그의 배경색을
    // 매개변수 color 값으로 바꾼다.
  }
}
