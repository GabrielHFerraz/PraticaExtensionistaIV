package com.unoesc.praticaExtensionistaIV.service;

import com.unoesc.praticaExtensionistaIV.converters.QuestionnariesConverter;
import com.unoesc.praticaExtensionistaIV.dto.response.QuestionnariesDTOResponse;
import com.unoesc.praticaExtensionistaIV.entities.QuestionnairesEntitie;
import com.unoesc.praticaExtensionistaIV.repository.QuestionnariesRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class QuestionnariesService {

    @Autowired
    private QuestionnariesRepository questionnariesRepository;

    @Autowired
    ModelMapper modelMapper;


    public List<QuestionnariesDTOResponse> getAll(){
        List<QuestionnairesEntitie> questionnairesEntities = questionnariesRepository.findAll();

        return questionnairesEntities.stream()
                .map(QuestionnairesEntitie -> modelMapper.map(QuestionnairesEntitie, QuestionnariesDTOResponse.class))
                .collect(Collectors.toList());
    }

    public QuestionnairesEntitie getById(UUID id){
        return this.questionnariesRepository.findById(id).orElse(null);
    }

    public QuestionnairesEntitie save(QuestionnairesEntitie questionnariesEntitie) {
        return this.questionnariesRepository.save(questionnariesEntitie);
    }
}
