const trident = window.navigator.userAgent.search('Trident');
  // IE11 이전
  const msie = window.navigator.userAgent.search('MSIE');

  if (trident !== -1 || msie !== -1) {
    alert(
      '인터넷 익스플로러는 지원하지 않는 브라우저입니다.  \n크롬, 파이어폭스, 엣지, 웨일 브라우저를 사용 부탁드립니다.'
    );
  }
