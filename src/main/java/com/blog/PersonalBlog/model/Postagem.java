package com.blog.PersonalBlog.model;

import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Entity
@Table(name = "postagens")
public class Postagem {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  @NotBlank
  @Size(min = 3, max = 255)
  private String titulo;
  private String texto;
  @UpdateTimestamp
  private LocalDateTime data;

  public long getId() {
    return id;
  }

  public String getTitulo() {
    return titulo;
  }

  public String getTexto() {
    return texto;
  }

  public LocalDateTime getData() {
    return data;
  }

}
