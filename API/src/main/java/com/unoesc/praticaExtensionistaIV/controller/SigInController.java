package com.unoesc.praticaExtensionistaIV.controller;

import com.unoesc.praticaExtensionistaIV.dto.request.SigInDTO;
import com.unoesc.praticaExtensionistaIV.service.SigInService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/sigIn")
public class SigInController {

    @Autowired
    SigInService sigInService;

    @PostMapping
    public String SigIn (@Valid @RequestBody SigInDTO sigInDTO) {
        var result = this.sigInService.SigIn(sigInDTO);

        return  "";
    }
}
