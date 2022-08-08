package com.blog.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

/**
 * Tema
 */
@Entity
@Table(name = "temas")
public class Tema {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @NotBlank
  @Size(min = 3, max = 255)
  private String nome;
  private String descricao;

  @OneToMany(mappedBy = "tema", cascade = CascadeType.ALL)
  @JsonIgnoreProperties("tema")
  private List<Postagem> postagem;

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getDescricao() {
    return descricao;
  }

  public void setDescricao(String descricao) {
    this.descricao = descricao;
  }

  
}

