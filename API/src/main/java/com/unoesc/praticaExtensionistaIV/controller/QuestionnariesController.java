package com.unoesc.praticaExtensionistaIV.controller;

import com.unoesc.praticaExtensionistaIV.converters.QuestionnariesConverter;
import com.unoesc.praticaExtensionistaIV.dto.request.QuestionnairesDTORequest;
import com.unoesc.praticaExtensionistaIV.service.QuestionnariesService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/api/questionnaries")
public class QuestionnariesController {

    @Autowired
    private QuestionnariesService questionnariesService;

    @Autowired
    private QuestionnariesConverter questionnariesConverter;

    @PostMapping
    public ResponseEntity<Object> CreateQuestionnaries (@RequestBody QuestionnairesDTORequest questionnariesDTO) {
        try {
            var result = this.questionnariesService.save(questionnariesConverter.DTOtoEntity(questionnariesDTO));
            return ResponseEntity.ok().body(result);
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<Object> getQuestionnaries() {
        try {
            var result = this.questionnariesService.getAll();
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/getById")
    public ResponseEntity<Object> getQuestionnariesById(@RequestParam UUID id) {
        try {
            var result = this.questionnariesService.getById(id);
            return ResponseEntity.ok().body(result);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
