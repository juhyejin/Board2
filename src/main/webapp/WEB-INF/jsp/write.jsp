<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@page contentType="text/html;charset=UTF-8" language="java"%>
<html>
<head>
    <meta charset="UTF-8">
    <title>글쓰기</title>

</head>
<body>
<div class="article_img">
    <img src="img/63988.png" width="100px" height="100px" onclick="location.href='/'"/>
</div>
 <form:form method="POST" commandName="article">
    <label>제목</label>
    <input type="text" name="title">
    <br>
    <label>작성자</label>
    <input type="text" name="writer">
    <label>비밀번호</label>
    <input type="password" name="password">
    <br><br>
    <textarea name="content"> </textarea>
    <input type="submit" value="저장">
 </form:form>

</body>
</html>
