package com.unoesc.praticaExtensionistaIV.service;

import com.unoesc.praticaExtensionistaIV.dto.request.SigInDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class SigInService {

    @Autowired
    UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String SigIn (SigInDTO sigInDTO) {
        var user = this.userService.findByUsername(sigInDTO.getUsername());

        if (!passwordEncoder.matches(sigInDTO.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials"); // Exceção personalizada seria ideal
        }

        return user.getUsername();
    }
}
