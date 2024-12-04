package com.unoesc.praticaExtensionistaIV.controller;

import com.unoesc.praticaExtensionistaIV.entities.UserEntitie;
import com.unoesc.praticaExtensionistaIV.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/createUser")
public class CreateUserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<Object> CreateUser(@Valid @RequestBody UserEntitie user) {
        try {
            var result = this.userService.save(user);
            return ResponseEntity.ok().body(result);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
