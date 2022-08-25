package com.blog.repository;

import java.util.List;
import java.util.Optional;

import com.blog.model.Postagem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * PostagemRepository
 */
@Repository
public interface PostagemRepository extends JpaRepository<Postagem, Long> {

  // mysql equivalent:
  // SELECT * FROM tb_postagens WHERE titulo LIKE "%titulo%";
  public List <Postagem> findAllByTituloIgnoreCase(@Param("titulo") String titulo);

  // mysql equivalent:
  // SELECT * FROM tb_postagens WHERE titulo = "titulo";
  public Optional <Postagem> findByTitulo(String titulo);
  
}

