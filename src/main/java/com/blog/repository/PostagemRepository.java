package com.blog.repository;

import java.util.List;

import com.blog.model.Postagem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * PostagemRepository
 */
@Repository
public interface PostagemRepository extends JpaRepository<Postagem, Long> {

  public List <Postagem> findAllByTituloIgnoreCase(@Param("titulo") String titulo);
  
}

