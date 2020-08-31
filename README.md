# Comento

# 1주차_주간업무보고

1. 스프링 개발 환경 구성 
* Github 계정 : https://github.com/jiminkwak/Comento.git  
* JDK, Eclipse, Tomcat 설치 및 연동 
  + JDK 1.8 / Eclipse / Tomcat 9.0 설정 
  + Spring MVC Project 로 settingweb 생성 
  + Tomcat 을 사용해 서버 연결 
 
 
 
2. 데이터 조회를 위한 환경 구성 
* MariaDB, MySQL Workbench 설치 및 샘플 DB 구축 
  + theater 스키마 / movie 테이블 생성 후 데이터 추가 
  + log4j.xml 에러 : DTD 파일의 경로를 웹 절대 경로로 지정 
  
  
  
3. 데이터 조회 
* Spring, MariaDB, MyBatis 연동 
  + pom.xml 에 MariaDB, MyBatis depedency 추가 
  + DAO / Service / HomeController / JSP 파일 설정 
  + movieVO class 구현 (Github 업로드) 
   
   
 
4. 기타 
* 1차 온라인 세션 ( OT - 직무 이해 / 과제 설명 ) 
  + 일시 : 8월 5일, 20:00 ~ 22:00 
      
      

# 2주차_주간업무보고

1. chart_test 생성  
* dynamic web project 로 chart_test 생성 
  + chart_ex.html : d3.js example 에서 index.html 복사 및 수정 
  + data.tsv : d3.js example 에서 data.tsv 복사 
* Tomcat 을 사용해 서버 연결  

2. 샘플 차트 테스트  
* barchart.html 테스트 
  + http://localhost:8080/chart_test/chart_ex.html 실행
  + data.tsv 에서 일부 데이터 변경 후 테스트 -> 성공

3. 차트 데이터 가이드 작성
* 데이터 요청 / 응답 / chart library 정보 / 차트 샘플 작성 

4. 기타 
* 1차 과제 피드백 
  + 8월 14일  
  
5. 질문 
  - localhost:8080 에선 최초 데이터 값으로만 화면 출력되고 localhost:8243 에선 변경된 데이터를 적용해 화면 출력됩니다. 어느 부분이 잘못된건지 궁금합니다!




# 3주차_주간업무보고

1. RestController를 활용한 DataBinding
* pom.xml 에 Jackson 라이브러리 추가
* restController 파일 작성
* home.jsp 작성 및 수정
* common_resource.jsp / home.js / home.css / jquery-3.5.1.min.js 추가

2. home.jsp 문제 해결
* JSTL 문법 부분 주석 처리했지만 JSTL 라이브러리 필요하다는 오류
  + JSTL 라이브러리 다운 후 추가 완료

3. 기타
* 2차 온라인 세션 ( spring )
  + 일시 : 8월 19일, 20:00 ~ 22:00
  + 참고 자료 (블로그) -> 과제 수행하며 공부
    
    
# 4주차_주간업무보고

1. wine quality.csv 파일 mysql Insert
* product_seq 추가 후 wine_quality 스키마 / product_quality 테이블 생성

2. Wine Quality Chart 계획
* 전체 데이터 평균값 테이블 (Wine-Quality Average) -> 성공
* Free Sulfur Dioxide & Total Sulfur Dioxide 상관관계 (Scatterplot) ->성공
* Fixed Acidity & Volatile Acidity 상관관계 (Heatmap) -> 성공
* Quality (Pie chart) -> 실패 & 질문

3. Wine Quality Chart 구현
* DAO / Service / VO 패키지 구현
  + VO : WineVO, QualityVO, FreeTotalVO, FixedVolVO, AvgVO
* test.xml 구현
* js 파일 구현
  + quality.js / fixed_vol.js / free_total.js / quality.js (실패)
* css / jsp 파일 구현

4. 질문
* Quality (Pie chart)
  + 1) sql문 작성 : quality, count(quality) as cnt 추출
  + 2) js 파일 : quality와 cnt 저장하는 함수 선언 후 d3 pie chart 소스코드 응용
  + 출력 X -> js 파일 소스코드의 문제인 거 같은데 어떻게 고쳐야 하는지 잘 모르겠습니다!


