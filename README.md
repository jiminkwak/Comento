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
* 1차 온라인 세션 ( OT - 직무 이해 / 과제 설명) 
  + 일시 : 8월 5일, 20:00 ~ 22:00 
      
      

# 2주차_주간업무보고

1. chart_test 생성  
* dynamic web project 로 chart_test 생성 
  + barchart.html : d3.js example 에서 index.html 복사 및 수정 
  + data.tsv : d3.js example 에서 data.tsv 복사 
* Tomcat 을 사용해 서버 연결  

2. 샘플 차트 테스트  
* barchart.html 테스트 
  + http://localhost:8080/chart_test/barchart.html 실행
  + data.tsv 에서 일부 데이터 변경 후 테스트 -> 성공 

3. 차트 데이터 가이드 작성
* 데이터 요청 / 응답 / chart library 정보 / 차트 샘플 작성 

4. 기타 
* 1차 과제 피드백 
  + 8월 14일
