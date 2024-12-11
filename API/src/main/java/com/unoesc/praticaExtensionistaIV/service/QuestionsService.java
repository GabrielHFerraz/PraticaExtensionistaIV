package com.unoesc.praticaExtensionistaIV.service;

import com.unoesc.praticaExtensionistaIV.entities.QuestionnairesEntitie;
import com.unoesc.praticaExtensionistaIV.entities.QuestionsEntitie;
import com.unoesc.praticaExtensionistaIV.repository.QuestionnariesRepository;
import com.unoesc.praticaExtensionistaIV.repository.QuestionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class QuestionsService {

    @Autowired
    private QuestionsRepository questionsRepository;

    @Autowired
    private QuestionnariesRepository questionnairesRepository;

    public QuestionsEntitie addQuestionToQuestionnaire(UUID questionnaireId, QuestionsEntitie question) {
        Optional<QuestionnairesEntitie> questionnaire = this.questionnairesRepository.findById(questionnaireId);

        if (questionnaire.isPresent()) {
            question.setQuestionnaire(questionnaire.get());
            return questionsRepository.save(question);
        } else {
            throw new RuntimeException("Questionnaire not found with ID: " + questionnaireId);
        }
    }


}
