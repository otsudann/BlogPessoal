package com.blog.repository;

import java.util.List;
import java.util.Optional;

import com.blog.model.Tema;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * PostagemRepository
 */
@Repository
public interface TemaRepository extends JpaRepository<Tema, Long> {

  // mysql equivalent:
  // SELECT * FROM temas WHERE titulo LIKE "%titulo%";
  public List <Tema> findAllByDescricaoIgnoreCase(@Param("descricao") String descricao);

  // mysql equivalent:
  // SELECT * FROM temas WHERE titulo = "titulo";
  public Optional <Tema> findByDescricao(String descricao);

}

