package com.blog.repository;

import com.blog.model.Usuario;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class UsuarioRepositoryTeste {

    private String emailTest = "teste1@teste";
    @Autowired
    private UsuarioRepository usuarioRepository;

    @BeforeAll
    void start(){
        usuarioRepository.deleteAll();
        usuarioRepository.save(new Usuario(0L, "teste1", "url/foto1", "teste1@teste", "12345678"));
        usuarioRepository.save(new Usuario(0L, "teste2", "url/foto2", "teste2@teste", "12345678"));
        usuarioRepository.save(new Usuario(0L, "teste3", "url/foto3", "teste3@teste", "12345678"));
        usuarioRepository.save(new Usuario(0L, "teste4", "url/foto4", "teste4@teste", "12345678"));
    }

    @Test
    @DisplayName("Retorna Usuario")
    public void retornaUsuario(){
        Optional<Usuario> usuario = usuarioRepository.findByUsuario(this.emailTest);
        assertTrue(usuario.get().getUsuario().equals(this.emailTest));
    }
}
