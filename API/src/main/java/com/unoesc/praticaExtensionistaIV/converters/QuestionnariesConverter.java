package com.unoesc.praticaExtensionistaIV.converters;

import com.unoesc.praticaExtensionistaIV.dto.request.QuestionnairesDTORequest;
import com.unoesc.praticaExtensionistaIV.dto.response.QuestionnariesDTOResponse;
import com.unoesc.praticaExtensionistaIV.entities.QuestionnairesEntitie;
import com.unoesc.praticaExtensionistaIV.entities.QuestionsEntitie;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class QuestionnariesConverter {
    @Autowired
    ModelMapper modelMapper;

    public QuestionnairesEntitie DTOtoEntity(QuestionnairesDTORequest questionnairesDTO) {
        return modelMapper.map(questionnairesDTO, QuestionnairesEntitie.class);
    }

}
