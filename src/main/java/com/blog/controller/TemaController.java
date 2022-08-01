package com.blog.controller;

import java.util.List;

import javax.validation.Valid;

import com.blog.model.Tema;
import com.blog.repository.TemaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/temas")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TemaController {

  @Autowired
  private TemaRepository temaRepository;

  @GetMapping
  public ResponseEntity<List<Tema>> getAll(){
    return ResponseEntity.ok(temaRepository.findAll());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Tema>getById(@PathVariable Long id){
    return temaRepository.findById(id).map(r -> ResponseEntity.ok(r))
      .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
  }

  @PostMapping
  public ResponseEntity<Tema> post(@Valid @RequestBody Tema tema){
    return ResponseEntity.status(HttpStatus.CREATED)
      .body(temaRepository.save(tema));
  }

  @PutMapping("/{id}")
  public ResponseEntity<Tema> updateTema(@PathVariable Long id, @RequestBody Tema tema) {

    Tema t = temaRepository.getReferenceById(id);

    t.setNome(tema.getNome());
    t.setDescricao(tema.getDescricao());

    return ResponseEntity.status(HttpStatus.CREATED)
      .body(temaRepository.save(t));

  }

}

