package com.blog.repository;

import com.blog.model.Postagem;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * PostagemRepository
 */
public interface PostagemRepository extends JpaRepository<Postagem, Long> {
  
}

