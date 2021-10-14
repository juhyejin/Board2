<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@page contentType="text/html;charset=UTF-8" language="java"%>
<html>
<head>
    <title>게시판</title>
    <link rel="stylesheet" href="css/main.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/saveColor.js"></script>
    <script type="text/javascript" src="js/practice.js"></script>
    <script type="text/javascript" src="js/ajaxLoadView.js"></script>
</head>
<body>
<div class="article_img">
    <img src="img/63988.png" width="100px" height="100px" onclick="location.href='/'"/>
</div>

<c:forEach var="article" items="${articles}">

    <div class="article_item" onclick="loadView(${article.id})">
            <c:out value="${article.id}"/>
            <c:out value="${article.title}"/>
            <c:out value="${article.writer}"/>
    </div>
    <div id="article_${article.id}">
    </div>
</c:forEach>

<form action="/" method="GET">
    <select name="option">
        <option value="title">제목으로 검색</option>
        <option value="writer">작성자로 검색</option>
        <option value="content">내용으로 검색</option>
        <option value="password">비밀번호로 검색</option>
        <option value="title and content">제목+내용으로 검색</option>
    </select>
    <input type="text" id="search" name="keyword">
    <input type="checkbox" id="chk">
    <input type="submit" value="검색">
</form>
<button id="btnChangeColor">랜덤 색바꾸기</button>
<button id="gradationColor">그라데이션색바꾸기</button>
<input type="text" id="colorChange" name="ColorChange">
<button id="saveColorOne">저장1</button>
<button id="saveColorTwo">저장2</button>

   <div class="article_button">
        <input type="button" value="글쓰기" onclick="location.href='write'">
    </div>
</body>
</html>