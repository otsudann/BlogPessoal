package com.blog.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotBlank
    private String nome;
    @NotBlank
    private String foto;
    @NotBlank
    private String usuario;
    @NotBlank
    @Size(min = 8)
    private String senha;

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.REMOVE)
    private List<Postagem> postagem;

    public Usuario(long id, String nome, String foto, String usuario, String senha) {
        this.id = id;
        this.nome = nome;
        this.foto = foto;
        this.usuario = usuario;
        this.senha = senha;
    }

    public Usuario(){}

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

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public List<Postagem> getPostagem() {
        return postagem;
    }

    public void setPostagem(List<Postagem> postagem) {
        this.postagem = postagem;
    }
}