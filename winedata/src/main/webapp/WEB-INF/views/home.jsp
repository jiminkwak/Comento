<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
 
<title>Home</title>
    <%@include file="./common_resource.jsp"%>
    
    <link href="${pageContext.request.contextPath}/resources/css/home.css" rel="stylesheet" />
 
</head>
<body>
    <h1>Wine-Quality Chart</h1>
    
    <script src="https://d3js.org/d3.v4.js"></script>
    <script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/holtzy/D3-graph-gallery@master/LIB/d3-scale-radial.js"></script>

    
    <h3 style="margin-top:70; margin-bottom:10">1) Wine-Qulity Average</h3>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/avg.js"></script>
    <button id = "load_avgList" type = "button" style="margin-top:10; margin-bottom:20">평균값 불러오기</button>
    <table>
        <thead>
            <tr>
                <th>fixed<br>acidity</th>
                <th>volatile<br>acidity</th>
                <th>citric<br>acid</th>
                <th>residual<br>sugar</th>
                <th>chlorides</th>
                <th>free<br>sulfur<br>dioxide</th>
                <th>total<br>sulfur<br>dioxide</th>
                <br><th>density</th>
                <th>pH</th>
                <th>sulphates</th>
                <th>alcohol</th>
                <th>quality</th>
                
            </tr>
        </thead>
        <tbody id ="avgList" >
            <!--<c:forEach items="${movieList}" var="movie">
                <tr>
                    <td>${movie.name}</td>
                    <td>${movie.director}</td>
                    <td>${movie.type}</td>
                </tr>
            </c:forEach>-->
        </tbody>
    </table>
    
    <h3 style="margin-top:70; margin-bottom:50">2) Free Sulfur Dioxide & Total Sulfur Dioxide (Scatterplot)</h3>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/free_total.js"></script>
    <div id = free_total></div>
    
    <h3 style="margin-top:100; margin-bottom:50">3) Fixed Acidity & Volatile Acidity (Heatmap)</h3>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/fixed_vol.js"></script>
    <div id = fixed_vol ></div>
     
    <h3 style="margin-top:70; margin-bottom:50">4) Quality (Circular barplot)</h3>
    
    
    
    
    

 
 
</body>
</html>