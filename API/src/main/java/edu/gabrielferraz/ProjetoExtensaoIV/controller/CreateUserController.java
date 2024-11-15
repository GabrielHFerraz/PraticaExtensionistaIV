package edu.gabrielferraz.ProjetoExtensaoIV.controller;

import edu.gabrielferraz.ProjetoExtensaoIV.entities.UserEntitie;
import edu.gabrielferraz.ProjetoExtensaoIV.service.CreateUserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CreateUserController {

    @Autowired
    CreateUserService createUserService;

    @PostMapping("/createUser")
    public ResponseEntity<Object> createUser(@Valid @RequestBody UserEntitie user) {
        try {
            var result = this.createUserService.save(user);
            return  ResponseEntity.ok().body(result);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }
}
