<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html;charset=UTF-8" language="java"%>

<html>
<head>
<title>글보기-${article.title}</title>
</head>
<body>
<div class="article_img">
    <img src="img/63988.png" width="100px" height="100px" onclick="location.href='/'"/>
</div>
<h1><c:out value="${article.title}"/></h1>
<label>작성자 : </label><c:out value="${article.writer}"/><br><br>

<c:out value="${article.content}"/>
</body>
</html>
