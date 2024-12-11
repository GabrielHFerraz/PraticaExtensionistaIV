package com.unoesc.praticaExtensionistaIV.repository;

import com.unoesc.praticaExtensionistaIV.entities.QuestionnairesEntitie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface QuestionnariesRepository extends JpaRepository<QuestionnairesEntitie, UUID> {
}
