package com.unoesc.praticaExtensionistaIV.controller;

import com.unoesc.praticaExtensionistaIV.entities.QuestionsEntitie;
import com.unoesc.praticaExtensionistaIV.service.QuestionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/questions")
public class QuestionsController {

    @Autowired
    private QuestionsService questionsService;

    @PostMapping()
    public ResponseEntity<QuestionsEntitie> addQuestionToQuestionnaire(@RequestParam UUID questionnaireId, @RequestBody QuestionsEntitie question) {
        try {
            QuestionsEntitie createdQuestion = this.questionsService.addQuestionToQuestionnaire(questionnaireId, question);
            return ResponseEntity.ok(createdQuestion);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}
