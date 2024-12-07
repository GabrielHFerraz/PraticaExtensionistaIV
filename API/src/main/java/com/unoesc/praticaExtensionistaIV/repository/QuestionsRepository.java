package com.unoesc.praticaExtensionistaIV.repository;

import com.unoesc.praticaExtensionistaIV.entities.QuestionsEntitie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface QuestionsRepository extends JpaRepository<QuestionsEntitie, UUID> {
}
