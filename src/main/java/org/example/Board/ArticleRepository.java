package org.example.Board;

import org.springframework.data.repository.CrudRepository;

public interface ArticleRepository extends CrudRepository<Article, Long> {
    Iterable<Article> findByTitleContaining(String title);
    Iterable<Article> findByWriter(String writer);
    Iterable<Article> findByContentContainingOrderByTitle(String content);
    Iterable<Article> findByPassword(String password);
    Iterable<Article> findByTitleOrContent(String title, String content);
    Iterable<Article> findByIdBetween(long min, long max);
}
